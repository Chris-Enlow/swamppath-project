import React, { useState, useEffect } from 'react';
import { getCatalogData, checkPrerequisites, profileCourseData } from '../data/mockCourses';
import ProfessorRating from '../components/ProfessorRating';

const CatalogPage = ({ onAddCourse, onRemoveCourse, selectedCourses, userProfile }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [catalogData, setCatalogData] = useState([]);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        if (userProfile && userProfile.profileKey) {
            const data = getCatalogData(userProfile.profileKey);
            setCatalogData(data);
            setFilteredCourses(data);
        }
    }, [userProfile]);

    useEffect(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const results = catalogData.filter(course =>
            course.name.toLowerCase().includes(lowercasedTerm) ||
            course.id.toLowerCase().includes(lowercasedTerm) ||
            course.professor.toLowerCase().includes(lowercasedTerm)
        );
        setFilteredCourses(results);
    }, [searchTerm, catalogData]);

    const showNotification = (message, type = 'error') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 5000);
    };

    const checkTimeConflict = (newCourse) => {
        const conflicts = [];
        
        Object.entries(selectedCourses).forEach(([courseId, course]) => {
            newCourse.sections.forEach(newSection => {
                course.sections.forEach(existingSection => {
                    newSection.times.forEach(newTime => {
                        existingSection.times.forEach(existingTime => {
                            if (newTime.day === existingTime.day) {
                                const newStart = newTime.start;
                                const newEnd = newTime.end;
                                const existingStart = existingTime.start;
                                const existingEnd = existingTime.end;
                                
                                if (
                                    (newStart >= existingStart && newStart < existingEnd) ||
                                    (newEnd > existingStart && newEnd <= existingEnd) ||
                                    (newStart <= existingStart && newEnd >= existingEnd)
                                ) {
                                    conflicts.push({
                                        courseId,
                                        courseName: course.name,
                                        day: newTime.day,
                                        time: `${getPeriodLabel(existingStart)}`
                                    });
                                }
                            }
                        });
                    });
                });
            });
        });
        
        return conflicts;
    };

    const getPeriodLabel = (period) => {
        const labels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
        return labels[period - 1] || 'Unknown';
    };

    const getDayName = (day) => {
        const days = { 'M': 'Monday', 'T': 'Tuesday', 'W': 'Wednesday', 'R': 'Thursday', 'F': 'Friday' };
        return days[day] || day;
    };

    const handleAddCourse = (courseId, course) => {
        const profileData = profileCourseData[userProfile.profileKey];
        
        if (profileData.completedCourses.includes(courseId)) {
            showNotification(
                `❌ You've already completed ${courseId} - ${course.name}. This course is in your completed courses list.`,
                'error'
            );
            return;
        }
        
        if (selectedCourses[courseId]) {
            showNotification(
                `⚠️ ${courseId} - ${course.name} is already in your schedule.`,
                'warning'
            );
            return;
        }
        
        const prereqCheck = checkPrerequisites(courseId, profileData.completedCourses, profileData.courses);
        if (!prereqCheck.met) {
            const missingCourses = prereqCheck.missing.map(id => {
                const prereqCourse = profileData.courses[id];
                return `${id} - ${prereqCourse?.name || 'Unknown'}`;
            }).join(', ');
            
            showNotification(
                `🚫 Cannot add ${courseId} - ${course.name}. You need to complete these prerequisites first: ${missingCourses}`,
                'error'
            );
            return;
        }
        
        const conflicts = checkTimeConflict(course);
        if (conflicts.length > 0) {
            const conflictMessages = conflicts.map(c => 
                `${c.courseId} on ${getDayName(c.day)} at ${c.time}`
            ).join('; ');
            
            showNotification(
                `⏰ Time conflict detected! ${courseId} - ${course.name} conflicts with: ${conflictMessages}. Please remove the conflicting course(s) first.`,
                'error'
            );
            return;
        }
        
        const currentCredits = Object.values(selectedCourses).reduce((sum, c) => sum + c.credits, 0);
        const newTotal = currentCredits + course.credits;
        
        if (newTotal > 18) {
            showNotification(
                `📚 Cannot add ${courseId} - ${course.name}. This would bring your total to ${newTotal} credits, exceeding the 18-credit limit. Current: ${currentCredits} credits.`,
                'error'
            );
            return;
        }
        
        onAddCourse(courseId);
        showNotification(
            `✅ Successfully added ${courseId} - ${course.name} to your schedule!`,
            'success'
        );
    };

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
    const profileData = userProfile ? profileCourseData[userProfile.profileKey] : null;

    return (
        <div className="page-container">
            {notification && (
                <div className={`notification-banner notification-${notification.type}`}>
                    <div className="notification-content">
                        <span>{notification.message}</span>
                        <button 
                            className="notification-close" 
                            onClick={() => setNotification(null)}
                            aria-label="Close notification"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <div className="catalog-header">
                <h2 className="page-title">Course Catalog - {userProfile?.major}</h2>
                <p className="catalog-subtitle">Showing available courses for {userProfile?.year} students</p>
            </div>
            
            <div className="catalog-info-bar">
                <div>
                    <p>
                        Selected Credits: <span className="credits-total">{totalSelectedCredits}</span> / 18
                    </p>
                    {totalSelectedCredits > 18 && (
                        <p className="credit-warning">⚠️ Warning: You have exceeded the credit limit!</p>
                    )}
                    {totalSelectedCredits >= 15 && totalSelectedCredits <= 18 && (
                        <p className="credit-info">💡 You have {18 - totalSelectedCredits} credits remaining</p>
                    )}
                </div>
                <div className="completed-courses-badge">
                    <span>✅ {profileData?.completedCourses.length || 0} courses completed</span>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search by course name, code, or professor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {filteredCourses.length === 0 ? (
                <div className="no-courses-message">
                    <p>🎉 Congratulations! You've completed all prerequisite requirements.</p>
                    <p>No more courses are available this semester based on your current progress.</p>
                    <p>Check back next semester for advanced courses, or contact your advisor for elective options.</p>
                </div>
            ) : (
                <div className="catalog-grid">
                    {filteredCourses.map(course => {
                        const isSelected = !!selectedCourses[course.id];
                        const periodLabels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
                        
                        const hasConflict = isSelected ? false : checkTimeConflict(course).length > 0;
                        
                        return (
                            <div key={course.id} className={`card course-card ${isSelected ? 'selected' : ''} ${hasConflict ? 'has-potential-conflict' : ''}`}>
                                <div className="course-card-header">
                                    <h3>{course.id}</h3>
                                    <span>{course.credits} Credits</span>
                                </div>
                                <p className="course-name">{course.name}</p>
                                <small>{course.professor}</small>
                                
                                {course.prerequisites && course.prerequisites.length > 0 && (
                                    <div className="prerequisites-info">
                                        <strong>✓ Prerequisites met:</strong> {course.prerequisites.join(', ')}
                                    </div>
                                )}
                                
                                {hasConflict && (
                                    <div className="conflict-warning-badge">
                                        ⚠️ Time conflict with selected courses
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
                                                        <span className="section-num">Section: {section.id}</span>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        );
                                    })}
                                </div>
                                
                                <div className="course-card-footer">
                                    <ProfessorRating rating={course.rating} />
                                    {isSelected ? (
                                        <button onClick={() => onRemoveCourse(course.id)} className="remove-catalog-btn">Remove</button>
                                    ) : (
                                        <button 
                                            onClick={() => handleAddCourse(course.id, course)} 
                                            className={`add-btn ${hasConflict ? 'conflict-btn' : ''}`}
                                        >
                                            {hasConflict ? 'Add (Conflict)' : 'Add'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CatalogPage;