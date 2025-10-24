import React from 'react';
import ProfessorRating from '../components/ProfessorRating';

const SchedulePage = ({ selectedCourses, displayedCourses, onRemoveCourse, onSelectSection }) => {
    const days = ['M', 'T', 'W', 'R', 'F'];
    const periods = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
    const courseColors = ['course-blue', 'course-green', 'course-indigo', 'course-red', 'course-purple', 'course-yellow'];

    const getCoursesForSlot = (day, periodIndex) => {
        const courseEntries = Object.entries(displayedCourses).filter(([_, courseDisplay]) => {
            if (!courseDisplay.selectedSection) return false;
            const section = courseDisplay.selectedSection;
            return section.times.some(time => time.day === day && time.start === periodIndex + 1);
        });
        return courseEntries.map(([id, courseDisplay]) => ({
            id,
            ...courseDisplay,
            colorClass: courseColors[Object.keys(displayedCourses).indexOf(id) % courseColors.length]
        }));
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

    const totalCredits = Object.values(selectedCourses).reduce((sum, course) => sum + course.credits, 0);

    return (
        <div className="page-container schedule-page-container">
            <div className="card schedule-calendar">
                <h2 className="card-title">Weekly Schedule</h2>
                <div className="calendar-grid">
                    <div className="grid-header">Time</div>
                    {days.map(day => <div key={day} className="grid-header">{day}</div>)}
                    {periods.map((period, periodIndex) => (
                        <React.Fragment key={period}>
                            <div className="time-slot">{period}</div>
                            {days.map(day => {
                                const courses = getCoursesForSlot(day, periodIndex);
                                const hasConflict = courses.length > 1;
                                return (
                                    <div key={`${day}-${period}`} className={`calendar-cell ${hasConflict ? 'has-conflict' : ''}`}>
                                        <div className={`cell-content ${hasConflict ? 'conflict-grid' : ''}`}>
                                            {courses.map((course) => (
                                                <div key={course.id} className={`course-chip ${course.colorClass}`} title={`${course.id} — ${course.name}`}>
                                                    <strong>{course.id}</strong>
                                                    <span className="chip-name">{course.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                        {hasConflict && <div className="conflict-warning" title="Time conflict">⚠️</div>}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="card courses-sidebar">
                <h2 className="card-title">Wanted Courses</h2>
                <p>Total Credits: <span className="credits-total">{totalCredits}</span></p>
                {totalCredits > 18 && <p style={{ color: 'red' }}>Warning: You have exceeded the credit limit of 18 credits!</p>}
                <div className="selected-courses-list">
                    {Object.keys(selectedCourses).length === 0 ? (
                        <div className="placeholder-text">
                            <p>No courses added yet.</p>
                            <p>Go to the Catalog tab in the top right to add courses.</p>
                            <p>Once courses are added they will appear here.</p>
                        </div>
                    ) : (
                        Object.entries(selectedCourses)
                            .sort(([idA], [idB]) => idA.localeCompare(idB))
                            .map(([id, course]) => {
                                const selectedSectionId = displayedCourses[id]?.sectionId;
                                const sortedSections = [...course.sections].sort((a, b) => {
                                    const daysOrder = { 'M': 0, 'T': 1, 'W': 2, 'R': 3, 'F': 4 };
                                    const aFirstDay = a.times[0]?.day || 'Z';
                                    const bFirstDay = b.times[0]?.day || 'Z';
                                    if (daysOrder[aFirstDay] !== daysOrder[bFirstDay]) return daysOrder[aFirstDay] - daysOrder[bFirstDay];
                                    return (a.times[0]?.start || 0) - (b.times[0]?.start || 0);
                                });

                                const periodLabels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];

                                return (
                                    <div key={id} className="course-item">
                                        <div className="course-item-header">
                                            <div className="course-info-line">
                                                <h3>{id}</h3>
                                                <span className="separator">•</span>
                                                <p>{course.name}</p>
                                                <span className="separator">•</span>
                                                <small>{course.credits} Credits</small>
                                            </div>
                                            <button onClick={() => onRemoveCourse(id)} className="remove-btn">&times;</button>
                                        </div>
                                        <div className="course-item-body">
                                            <p className="section-label">Select a time slot:</p>
                                            <div className="section-options">
                                                {sortedSections.map((section) => {
                                                    const isSelected = selectedSectionId === section.id;
                                                    const formattedTimes = formatSectionDisplay(section.times);
                                                    return (
                                                        <button
                                                            key={section.id}
                                                            onClick={() => onSelectSection(id, section.id)}
                                                            className={`section-btn ${isSelected ? 'selected' : ''}`}
                                                        >
                                                            <div className="section-time-display">
                                                                {formattedTimes.map((timeGroup, idx) => (
                                                                    <div key={idx} className="time-group">
                                                                        <span className="section-days">{timeGroup.days}</span>
                                                                        <span className="section-time">{periodLabels[timeGroup.start - 1]}</span>
                                                                        <span className="section-num">ID: {section.id}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="course-item-footer">
                                            <div>
                                                <p>{course.professor}</p>
                                                <ProfessorRating rating={course.rating} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                    )}
                </div>
            </div>
        </div>
    );
};

export default SchedulePage;
