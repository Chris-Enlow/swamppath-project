import React, { useState, useEffect } from 'react';
import { catalogData } from '../data/mockCourses';
import ProfessorRating from '../components/ProfessorRating';

const CatalogPage = ({ onAddCourse, onRemoveCourse, selectedCourses }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(catalogData);

    useEffect(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const results = catalogData.filter(course =>
            course.name.toLowerCase().includes(lowercasedTerm) ||
            course.id.toLowerCase().includes(lowercasedTerm) ||
            course.professor.toLowerCase().includes(lowercasedTerm)
        );
        setFilteredCourses(results);
    }, [searchTerm]);

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

    return (
        <div className="page-container">
            <h2 className="page-title">Course Catalog</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <p>Selected Credits: <span className="credits-total">{totalSelectedCredits}</span></p>
                {totalSelectedCredits > 18 && <p style={{ color: 'red', margin: 0 }}>Warning: You have exceeded the credit limit of 18 credits!</p>}
            </div>
            <input
                type="text"
                placeholder="Search by course name, code, or professor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="catalog-grid">
                {filteredCourses.map(course => {
                    const isSelected = !!selectedCourses[course.id];
                    const periodLabels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];

                    return (
                        <div key={course.id} className={`card course-card ${isSelected ? 'selected' : ''}`}>
                            <div className="course-card-header">
                                <h3>{course.id}</h3>
                                <span>{course.credits} Credits</span>
                            </div>
                            <p>{course.name}</p>
                            <small>{course.professor}</small>
                            <div className="course-sections-preview">
                                {course.sections.map((section) => {
                                    const formattedTimes = formatSectionDisplay(section.times);
                                    return (
                                        <div key={section.id} className="section-preview">
                                            {formattedTimes.map((timeGroup, idx) => (
                                                <React.Fragment key={idx}>
                                                    <span>{timeGroup.days}</span>
                                                    <span>{periodLabels[timeGroup.start - 1]}</span>
                                                    <span className="section-num">Couse ID: {section.id}</span>
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
                                    <button onClick={() => onAddCourse(course.id)} className="add-btn">Add</button>
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
