import React, { useState } from 'react';
import { catalogData } from '../data/mockCourses';

const PlannerPage = ({ currentUser, plannedCourses, onUpdatePlannedCourses }) => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showCourseSelector, setShowCourseSelector] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSemester, setExpandedSemester] = useState(null);

  const generateSemesters = () => {
    const semesters = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-11

    const seasons = ['Spring', 'Summer', 'Fall'];
    // Determine current/next semester
    // Spring: Jan-Apr (0-3), Summer: May-Jul (4-6), Fall: Aug-Dec (7-11)
    let startSeasonIndex;
    let startYear = currentYear;

    if (currentMonth >= 0 && currentMonth <= 3) {
      startSeasonIndex = 0; // Spring
    } else if (currentMonth >= 4 && currentMonth <= 6) {
      startSeasonIndex = 1; // Summer
    } else {
      startSeasonIndex = 2; // Fall
    }
    startSeasonIndex++; // Move to next semester

    for (let i = 0; i < 8; i++) {
      const seasonIndex = (startSeasonIndex + i) % 3;
      const yearOffset = Math.floor((startSeasonIndex + i) / 3);
      semesters.push({
        id: `${seasons[seasonIndex]}-${startYear + yearOffset}`,
        name: `${seasons[seasonIndex]} ${startYear + yearOffset}`,
        season: seasons[seasonIndex],
        year: startYear + yearOffset
      });
    }
    return semesters;
  };

  const semesters = generateSemesters();

  const addCourseToSemester = (courseId, semesterId) => {
    const newPlanned = { ...plannedCourses };
    const list = newPlanned[semesterId] || [];
    if (!list.includes(courseId)) {
      newPlanned[semesterId] = [...list, courseId];
      onUpdatePlannedCourses(newPlanned);
    }
  };

  const removeCourseFromSemester = (courseId, semesterId, e) => {
    if (e) {
      e.stopPropagation();
    }
    const newPlanned = { ...plannedCourses };
    newPlanned[semesterId] = (newPlanned[semesterId] || []).filter(id => id !== courseId);
    if (newPlanned[semesterId].length === 0) delete newPlanned[semesterId];
    onUpdatePlannedCourses(newPlanned);
  };

  const getSemesterCredits = (semesterId) => {
    const courseIds = plannedCourses[semesterId] || [];
    return courseIds.reduce((sum, id) => {
      const course = catalogData.find(c => c.id === id);
      return sum + (course?.credits || 0);
    }, 0);
  };

  const getTotalPlannedCredits = () => {
    return Object.keys(plannedCourses).reduce((sum, sid) => sum + getSemesterCredits(sid), 0);
  };

  const filteredCourses = catalogData.filter(course => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return (
      course.name.toLowerCase().includes(q) ||
      course.id.toLowerCase().includes(q) ||
      course.professor.toLowerCase().includes(q)
    );
  });

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h2 className="page-title">Academic Planner</h2>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          Plan any courses in any future semester. {expandedSemester && 'Click the semester name to collapse.'}
        </p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', padding: '1rem', background: '#f9fafb', borderRadius: '8px' }}>
          <div><strong>Completed Credits:</strong> {currentUser?.credits || 0}</div>
          <div><strong>Planned Credits:</strong> {getTotalPlannedCredits()}</div>
          <div><strong>Total Credits:</strong> {(currentUser?.credits || 0) + getTotalPlannedCredits()}</div>
        </div>
      </div>

      {expandedSemester ? (
        // Expanded single semester view
        <div>
          <button
            onClick={() => setExpandedSemester(null)}
            className="planner-back-btn"
            style={{
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            ← Back to All Semesters
          </button>

          {(() => {
            const semester = semesters.find(s => s.id === expandedSemester);
            const semesterCourses = plannedCourses[semester.id] || [];
            const credits = getSemesterCredits(semester.id);
            const isOverloaded = credits > 18;

            return (
              <div className="planner-semester-card" style={{ maxWidth: '100%' }}>
                <div className="planner-semester-header">
                  <h3 style={{ fontSize: '1.5rem' }}>{semester.name}</h3>
                  <div className="semester-credits" style={{ color: isOverloaded ? '#dc2626' : '#059669', fontSize: '1.125rem' }}>
                    {credits} credits {isOverloaded && '⚠️'}
                  </div>
                </div>

                <div className="planner-course-list">
                  {semesterCourses.length === 0 ? (
                    <div className="planner-empty-state">No courses planned</div>
                  ) : (
                    semesterCourses.map(courseId => {
                      const course = catalogData.find(c => c.id === courseId);
                      if (!course) return null;
                      return (
                        <div key={courseId} className="planner-course-item">
                          <div className="planner-course-info">
                            <strong>{course.id}</strong>
                            <span className="planner-course-name">{course.name}</span>
                            <span className="planner-course-credits">{course.credits} cr</span>
                          </div>
                          <button
                            onClick={() => removeCourseFromSemester(courseId, semester.id)}
                            className="planner-remove-btn"
                            title="Remove from plan"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>

                <button
                  onClick={() => { setSelectedSemester(semester.id); setShowCourseSelector(true); }}
                  className="planner-add-course-btn"
                >
                  + Add Course
                </button>
              </div>
            );
          })()}
        </div>
      ) : (
        // Grid view of all semesters
        <div className="planner-grid">
          {semesters.map((semester) => {
            const semesterCourses = plannedCourses[semester.id] || [];
            const credits = getSemesterCredits(semester.id);
            const isOverloaded = credits > 18;

            return (
              <div
                key={semester.id}
                className="planner-semester-card"
                onClick={() => setExpandedSemester(semester.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="planner-semester-header">
                  <h3>{semester.name}</h3>
                  <div className="semester-credits" style={{ color: isOverloaded ? '#dc2626' : '#059669' }}>
                    {credits} credits {isOverloaded && '⚠️'}
                  </div>
                </div>

                <div className="planner-course-list">
                  {semesterCourses.length === 0 ? (
                    <div className="planner-empty-state">No courses planned</div>
                  ) : (
                    semesterCourses.map(courseId => {
                      const course = catalogData.find(c => c.id === courseId);
                      if (!course) return null;
                      return (
                        <div key={courseId} className="planner-course-item">
                          <div className="planner-course-info">
                            <strong>{course.id}</strong>
                            <span className="planner-course-name">{course.name}</span>
                            <span className="planner-course-credits">{course.credits} cr</span>
                          </div>
                          <button
                            onClick={(e) => removeCourseFromSemester(courseId, semester.id, e)}
                            className="planner-remove-btn"
                            title="Remove from plan"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>

                <div style={{ fontSize: '0.875rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>
                  Click to expand
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showCourseSelector && (
        <div className="modal-overlay" onClick={() => setShowCourseSelector(false)}>
          <div className="modal-content planner-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Course to {semesters.find(s => s.id === selectedSemester)?.name}</h3>
              <button onClick={() => setShowCourseSelector(false)} className="modal-close">×</button>
            </div>

            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ marginBottom: '1rem' }}
            />

            <div className="planner-course-selector-list">
              {filteredCourses.map(course => {
                const alreadyInThisSemester = (plannedCourses[selectedSemester] || []).includes(course.id);
                return (
                  <div key={course.id} className="planner-selector-item">
                    <div className="planner-selector-info">
                      <div>
                        <strong>{course.id}</strong> — {course.name}
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          {course.credits} credits • {course.professor}
                        </div>
                      </div>
                    </div>

                    {alreadyInThisSemester ? (
                      <button
                        onClick={(e) => removeCourseFromSemester(course.id, selectedSemester, e)}
                        className="planner-selector-add-btn"
                        style={{ background: '#dc2626' }}
                        title="Remove from plan"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => addCourseToSemester(course.id, selectedSemester)}
                        className="planner-selector-add-btn"
                        title="Add to plan"
                      >
                        Add to Plan
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlannerPage;
