import React, { useState, useEffect } from 'react';
import { catalogData } from '../data/mockCourses';
import ProfessorRating from '../components/ProfessorRating';

const CatalogPage = ({ onAddCourse, onRemoveCourse, selectedCourses, currentUser }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(catalogData);
    const [majorOnly, setMajorOnly] = useState(false);

    useEffect(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        let results = catalogData.filter(course =>
            course.name.toLowerCase().includes(lowercasedTerm) ||
            course.id.toLowerCase().includes(lowercasedTerm) ||
            course.professor.toLowerCase().includes(lowercasedTerm)
        );

        if (majorOnly && currentUser) {
            if (currentUser.major === 'Computer Science') {
                results = results.filter(course => course.computerScienceCourse === true);
            } else if (currentUser.major === 'Marine Science') {
                results = results.filter(course => course.marineScienceCourse === true);
            }
        }

        setFilteredCourses(results);
    }, [searchTerm, majorOnly, currentUser]);

    const formatSectionDisplay = (times) => {
        const timeGroups = {};
        times.forEach(time => {
            const key = `${time.start}-${time.end}`;
            if (!timeGroups[key]) {
                timeGroups[key] = { days: [], start: time.start, end: time.end };
            }
            timeGroups[key].days.push(time.day);
        });

        return Object.values(timeGroups).map(group => ({
            days: group.days.join(' / '),
            start: group.start,
            end: group.end
        }));
    };

    const totalSelectedCredits = Object.values(selectedCourses).reduce((sum, c) => sum + c.credits, 0);

    // Check if user has completed a course
    const hasTakenCourse = (courseId) => {
        return currentUser?.completedCourses?.includes(courseId);
    };

    // Check if user meets prerequisites for a course
    const meetsPrerequisites = (course) => {
        if (!course.prerequisites || course.prerequisites.length === 0) {
            return { meets: true, missing: [] };
        }
        
        const completedCourses = currentUser?.completedCourses || [];
        const missing = [];

        for (const prereq of course.prerequisites) {
            if (Array.isArray(prereq)) {
                // OR condition - need at least one course from this group
                const hasOne = prereq.some(p => completedCourses.includes(p));
                if (!hasOne) {
                    missing.push(prereq.join(' OR '));
                }
            } else {
                // Single required course
                if (!completedCourses.includes(prereq)) {
                    missing.push(prereq);
                }
            }
        }

        return { meets: missing.length === 0, missing };
    };

    // Check if user can add a course
    const canAddCourse = (course) => {
        // First check if already completed
        if (hasTakenCourse(course.id)) {
            return { 
                canAdd: false, 
                reason: 'already-completed',
                message: 'Already completed'
            };
        }
        
        // Then check prerequisites
        const prereqCheck = meetsPrerequisites(course);
        if (!prereqCheck.meets) {
            return { 
                canAdd: false, 
                reason: 'missing-prerequisites', 
                missing: prereqCheck.missing,
                message: `Missing: ${prereqCheck.missing.join(', ')}`
            };
        }
        
        return { canAdd: true };
    };

    return (
        <div className="page-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 className="page-title" style={{ margin: 0 }}>Course Catalog</h2>
                
                {currentUser && (
                    <label className="major-filter-toggle">
                        <input
                            type="checkbox"
                            checked={majorOnly}
                            onChange={(e) => setMajorOnly(e.target.checked)}
                            className="toggle-checkbox"
                        />
                        <span className="toggle-slider"></span>
                        <span className="toggle-label">
                            Show only {currentUser.major} courses
                        </span>
                    </label>
                )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <p style={{ margin: 0 }}>Selected Credits: <span className="credits-total">{totalSelectedCredits}</span></p>
                {totalSelectedCredits > 18 && <p style={{ color: 'red', margin: 0 }}>Warning: You have exceeded the credit limit of 18 credits!</p>}
            </div>

            <input
                type="text"
                placeholder="Search by course name, code, or professor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {majorOnly && filteredCourses.length === 0 && (
                <div className="no-results-message">
                    <p>No {currentUser.major} courses found matching your search.</p>
                    <p>Try turning off the major filter or adjusting your search.</p>
                </div>
            )}

            <div className="catalog-grid">
                {filteredCourses.map(course => {
                    const isSelected = !!selectedCourses[course.id];
                    const periodLabels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
                    const addCheck = canAddCourse(course);
                    const isCompleted = addCheck.reason === 'already-completed';
                    const hasMissingPrereqs = addCheck.reason === 'missing-prerequisites';

                    return (
                        <div key={course.id} className={`card course-card ${isSelected ? 'selected' : ''} ${isCompleted ? 'course-completed' : ''} ${hasMissingPrereqs ? 'course-locked' : ''}`}>
                            <div className="course-card-header">
                                <h3>{course.id}</h3>
                                <span>{course.credits} Credits</span>
                            </div>
                            <p>{course.name}</p>
                            <small>{course.professor}</small>
                            
                            {/* Status badges */}
                            {isCompleted && (
                                <div className="course-status-badge completed-badge">
                                    ✓ Completed
                                </div>
                            )}
                            {hasMissingPrereqs && (
                                <div className="course-status-badge prereq-badge" title={addCheck.message}>
                                    🔒 Missing Prerequisites
                                </div>
                            )}

                            {/* Show prerequisites */}
                            {course.prerequisites && course.prerequisites.length > 0 && (
                                <div className="prerequisites-display">
                                    <strong>Prerequisites:</strong>
                                    <div className="prereq-list">
                                        {course.prerequisites.map((prereq, idx) => {
                                            if (Array.isArray(prereq)) {
                                                const hasOne = prereq.some(p => hasTakenCourse(p));
                                                return (
                                                    <span key={idx} className={`prereq-item ${hasOne ? 'prereq-met' : 'prereq-missing'}`}>
                                                        {hasOne ? '✓' : '✗'} {prereq.join(' OR ')}
                                                    </span>
                                                );
                                            } else {
                                                const completed = hasTakenCourse(prereq);
                                                return (
                                                    <span key={idx} className={`prereq-item ${completed ? 'prereq-met' : 'prereq-missing'}`}>
                                                        {completed ? '✓' : '✗'} {prereq}
                                                    </span>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="course-sections-preview">
                                {course.sections.map((section) => {
                                    const formattedTimes = formatSectionDisplay(section.times);
                                    return (
                                        <div key={section.id} className="section-preview">
                                            {formattedTimes.map((timeGroup, idx) => (
                                                <React.Fragment key={idx}>
                                                    <span>{timeGroup.days}</span>
                                                    <span>{periodLabels[timeGroup.start - 1]}</span>
                                                    <span className="section-num">ID: {section.id}</span>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="course-card-footer">
                                <ProfessorRating rating={course.rating} />
                                {isSelected ? (
                                    <button 
                                        onClick={() => onRemoveCourse(course.id)} 
                                        className="remove-catalog-btn"
                                    >
                                        Remove
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => addCheck.canAdd && onAddCourse(course.id)} 
                                        className="add-btn"
                                        disabled={!addCheck.canAdd}
                                        title={addCheck.message}
                                        style={{
                                            opacity: addCheck.canAdd ? 1 : 0.6,
                                            cursor: addCheck.canAdd ? 'pointer' : 'not-allowed'
                                        }}
                                    >
                                        {addCheck.canAdd ? 'Add' : addCheck.message}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CatalogPage;