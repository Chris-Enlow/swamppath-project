import React, { useState } from 'react';
import ProfessorRating from '../components/ProfessorRating';

const SchedulePage = ({ selectedCourses, displayedCourses, onRemoveCourse, onSelectSection, userProfile }) => {
    const [notification, setNotification] = useState(null);
    const days = ['M', 'T', 'W', 'R', 'F'];
    const periods = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
    const courseColors = ['course-blue', 'course-green', 'course-indigo', 'course-red', 'course-purple', 'course-yellow'];

    const showNotification = (message, type = 'info') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 4000);
    };

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

    const checkSectionConflict = (courseId, section) => {
        const conflicts = [];
        
        Object.entries(displayedCourses).forEach(([existingCourseId, existingCourse]) => {
            if (existingCourseId === courseId) return; // Skip self
            
            const existingSection = existingCourse.selectedSection;
            if (!existingSection) return;
            
            section.times.forEach(newTime => {
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
                                courseId: existingCourseId,
                                courseName: existingCourse.name,
                                day: newTime.day,
                                period: existingStart
                            });
                        }
                    }
                });
            });
        });
        
        return conflicts;
    };

    const handleSelectSection = (courseId, sectionId) => {
        const course = selectedCourses[courseId];
        const section = course.sections.find(s => s.id === sectionId);
        
        // Check if deselecting
        if (displayedCourses[courseId]?.sectionId === sectionId) {
            onSelectSection(courseId, sectionId);
            showNotification(`✓ Removed ${courseId} section from schedule`, 'success');
            return;
        }
        
        // Check for conflicts before selecting
        const conflicts = checkSectionConflict(courseId, section);
        
        if (conflicts.length > 0) {
            const conflictList = conflicts.map(c => 
                `${c.courseId} (${c.day} at ${periods[c.period - 1]})`
            ).join(', ');
            
            showNotification(
                `⚠️ Time conflict! This section conflicts with: ${conflictList}. Please change or remove the conflicting section first.`,
                'error'
            );
            return;
        }
        
        onSelectSection(courseId, sectionId);
        showNotification(`✓ Added ${courseId} - ${course.name} to your schedule`, 'success');
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
    const scheduledCredits = Object.values(displayedCourses).reduce((sum, course) => sum + course.credits, 0);

    return (
        <div className="page-container schedule-page-container">
            {/* Notification Banner */}
            {notification && (
                <div className={`notification-banner notification-${notification.type}`}>
                    <div className="notification-content">
                        <span>{notification.message}</span>
                        <button 
                            className="notification-close" 
                            onClick={() => setNotification(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <div className="card schedule-calendar">
                <div className="schedule-page-header">
                    <h2 className="card-title">Weekly Schedule</h2>
                    <div className="schedule-major-badge">{userProfile?.major}</div>
                </div>
                <div className="schedule-stats">
                    <span>Scheduled: {scheduledCredits} credits</span>
                    <span className="separator">•</span>
                    <span>Pending: {totalCredits - scheduledCredits} credits</span>
                </div>
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
                <div className="credits-summary">
                    <p>Total Selected: <span className="credits-total">{totalCredits}</span> / 18 credits</p>
                    <p>On Schedule: <span className="credits-scheduled">{scheduledCredits}</span> credits</p>
                </div>
                {totalCredits > 18 && <p className="credit-warning">⚠️ Warning: Credit limit exceeded!</p>}
                
                <div className="selected-courses-list">
                    {Object.keys(selectedCourses).length === 0 ? (
                        <div className="placeholder-text">
                            <p>No courses added yet.</p>
                            <p>Go to the Catalog tab to add courses.</p>
                            <p>Once courses are added, select time slots here.</p>
                        </div>
                    ) : (
                        Object.entries(selectedCourses)
                            .sort(([idA], [idB]) => idA.localeCompare(idB))
                            .map(([id, course]) => {
                                const selectedSectionId = displayedCourses[id]?.sectionId;
                                const isScheduled = !!selectedSectionId;
                                const sortedSections = [...course.sections].sort((a, b) => {
                                    const daysOrder = { 'M': 0, 'T': 1, 'W': 2, 'R': 3, 'F': 4 };
                                    const aFirstDay = a.times[0]?.day || 'Z';
                                    const bFirstDay = b.times[0]?.day || 'Z';
                                    if (daysOrder[aFirstDay] !== daysOrder[bFirstDay]) return daysOrder[aFirstDay] - daysOrder[bFirstDay];
                                    return (a.times[0]?.start || 0) - (b.times[0]?.start || 0);
                                });

                                const periodLabels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];

                                return (
                                    <div key={id} className={`course-item ${isScheduled ? 'course-scheduled' : 'course-unscheduled'}`}>
                                        <div className="course-item-header">
                                            <div className="course-info-line">
                                                <h3>{id}</h3>
                                                <span className="separator">•</span>
                                                <p>{course.name}</p>
                                                <span className="separator">•</span>
                                                <small>{course.credits} Credits</small>
                                                {isScheduled && <span className="scheduled-badge">✓</span>}
                                            </div>
                                            <button onClick={() => onRemoveCourse(id)} className="remove-btn" title="Remove course">&times;</button>
                                        </div>
                                        <div className="course-item-body">
                                            <p className="section-label">
                                                {isScheduled ? 'Selected section:' : 'Select a time slot:'}
                                            </p>
                                            <div className="section-options">
                                                {sortedSections.map((section) => {
                                                    const isSelected = selectedSectionId === section.id;
                                                    const formattedTimes = formatSectionDisplay(section.times);
                                                    const conflicts = checkSectionConflict(id, section);
                                                    const hasConflict = conflicts.length > 0 && !isSelected;
                                                    
                                                    return (
                                                        <button
                                                            key={section.id}
                                                            onClick={() => handleSelectSection(id, section.id)}
                                                            className={`section-btn ${isSelected ? 'selected' : ''} ${hasConflict ? 'section-conflict' : ''}`}
                                                            title={hasConflict ? `Conflicts with ${conflicts.map(c => c.courseId).join(', ')}` : ''}
                                                        >
                                                            <div className="section-time-display">
                                                                {formattedTimes.map((timeGroup, idx) => (
                                                                    <div key={idx} className="time-group">
                                                                        <span className="section-days">{timeGroup.days}</span>
                                                                        <span className="section-time">{periodLabels[timeGroup.start - 1]}</span>
                                                                        <span className="section-num">ID: {section.id}</span>
                                                                    </div>
                                                                ))}
                                                                {hasConflict && <span className="conflict-icon">⚠️</span>}
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