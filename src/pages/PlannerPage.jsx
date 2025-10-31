import React, { useState } from 'react';
import { catalogData } from '../data/mockCourses';

const PlannerPage = ({ currentUser, plannedCourses, onUpdatePlannedCourses }) => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showCourseSelector, setShowCourseSelector] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const generateSemesters = () => {
    const semesters = [];
    const currentYear = new Date().getFullYear();
    const seasons = ['Spring', 'Summer', 'Fall'];
    for (let i = 0; i < 9; i++) {
      const seasonIndex = i % 3;
      const yearOffset = Math.floor(i / 3);
      semesters.push({
        id: `${seasons[seasonIndex]}-${currentYear + yearOffset}`,
        name: `${seasons[seasonIndex]} ${currentYear + yearOffset}`,
        season: seasons[seasonIndex],
        year: currentYear + yearOffset
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
    setShowCourseSelector(false);
    setSearchTerm('');
  };

  const removeCourseFromSemester = (courseId, semesterId) => {
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
          Plan any courses in any future semester.
        </p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', padding: '1rem', background: '#f9fafb', borderRadius: '8px' }}>
          <div><strong>Completed Credits:</strong> {currentUser?.credits || 0}</div>
          <div><strong>Planned Credits:</strong> {getTotalPlannedCredits()}</div>
          <div><strong>Total Credits:</strong> {(currentUser?.credits || 0) + getTotalPlannedCredits()}</div>
        </div>
      </div>

      <div className="planner-grid">
        {semesters.map((semester) => {
          const semesterCourses = plannedCourses[semester.id] || [];
          const credits = getSemesterCredits(semester.id);
          const isOverloaded = credits > 18;

          return (
            <div key={semester.id} className="planner-semester-card">
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
        })}
      </div>

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

                    <button
                      onClick={() => addCourseToSemester(course.id, selectedSemester)}
                      disabled={alreadyInThisSemester}
                      className="planner-selector-add-btn"
                      style={{ opacity: alreadyInThisSemester ? 0.6 : 1 }}
                      title={alreadyInThisSemester ? 'Already added to this semester' : 'Add to plan'}
                    >
                      {alreadyInThisSemester ? 'Added' : 'Add to Plan'}
                    </button>
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
