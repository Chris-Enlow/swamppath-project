import React, { useState, useEffect } from 'react';

// --- Mock Data ---
// In a real application, this would come from a database/API
const mockCourses = {
  'COP3502': {
    name: 'Programming Fundamentals 1',
    credits: 3,
    professor: 'Prof. Amanpreet Kapoor',
    rating: 4.5,
    sections: [
      {
        id: 3501,
        times: [
          { day: 'M', start: 3, end: 4 },
          { day: 'W', start: 3, end: 4 },
          { day: 'F', start: 3, end: 4 }
        ]
      },
      {
        id: 1,
        times: [
          { day: 'T', start: 5, end: 6 },
          { day: 'R', start: 5, end: 6 }
        ]
      },
      {
        id: 2,
        times: [
          { day: 'T', start: 2, end: 3 },
          { day: 'R', start: 2, end: 3 }
        ]
      },
    ]
  },
  'MAC2311': {
    name: 'Calculus 1',
    credits: 4,
    professor: 'Prof. Darryl Jacobs',
    rating: 4.2,
    sections: [
      {
        id: 0,
        times: [
          { day: 'T', start: 2, end: 3 },
          { day: 'R', start: 2, end: 3 }
        ]
      },
      {
        id: 1,
        times: [
          { day: 'M', start: 1, end: 2 },
          { day: 'W', start: 1, end: 2 },
          { day: 'F', start: 1, end: 2 }
        ]
      },
    ]
  },
  'ENC1101': {
    name: 'Expository and Argumentative Writing',
    credits: 3,
    professor: 'Prof. Amy Jung',
    rating: 4.8,
    sections: [
      {
        id: 0,
        times: [
          { day: 'M', start: 5, end: 6 },
          { day: 'W', start: 5, end: 6 }
        ]
      },
      {
        id: 1,
        times: [
          { day: 'T', start: 6, end: 7 },
          { day: 'R', start: 6, end: 7 }
        ]
      },
    ]
  },
  'PHY2048': {
    name: 'Physics with Calculus 1',
    credits: 3,
    professor: 'Prof. Selman Hershfield',
    rating: 3.9,
    sections: [
      {
        id: 0,
        times: [
          { day: 'T', start: 4, end: 5 },
          { day: 'R', start: 4, end: 5 }
        ]
      },
    ]
  },
  'CHM2045': {
    name: 'General Chemistry 1',
    credits: 3,
    professor: 'Prof. Melanie Veige',
    rating: 4.1,
    sections: [
      {
        id: 0,
        times: [
          { day: 'M', start: 7, end: 8 },
          { day: 'W', start: 7, end: 8 }
        ]
      },
    ]
  },
  'ECO2013': {
    name: 'Principles of Macroeconomics',
    credits: 3,
    professor: 'Prof. Mark Rush',
    rating: 4.6,
    sections: [
      {
        id: 0,
        times: [
          { day: 'F', start: 5, end: 6 }
        ]
      },
    ]
  },
  'COP3504': {
    name: 'Same time course',
    credits: 3,
    professor: 'loserman',
    rating: 4.5,
    sections: [
      {
        id: 0,
        times: [
          { day: 'M', start: 3, end: 4 },
          { day: 'W', start: 3, end: 4 },
          { day: 'F', start: 3, end: 4 }
        ]
      },
    ]
  },
};

const catalogData = Object.entries(mockCourses).map(([id, data]) => ({ id, ...data }));

// --- Helper Components ---

const StarIcon = ({ filled }) => (
  <svg className={`star-icon ${filled ? 'filled' : ''}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const ProfessorRating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < Math.round(rating)} />
      ))}
      <span className="rating-text">{rating.toFixed(1)}</span>
    </div>
  );
};

// --- Main Page Components ---

const SchedulePage = ({ selectedCourses, displayedCourses, onRemoveCourse, onSelectSection }) => {
  const days = ['M', 'T', 'W', 'R', 'F'];
  const periods = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
  const courseColors = ['course-blue', 'course-green', 'course-indigo', 'course-red', 'course-purple', 'course-yellow'];

  const getCoursesForSlot = (day, periodIndex) => {
    const courseEntries = Object.entries(displayedCourses).filter(([id, courseDisplay]) => {
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

  // Helper function to format section times for display
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
                  <div
                    key={`${day}-${period}`}
                    className={`calendar-cell ${hasConflict ? 'has-conflict' : ''}`}
                  >
                    <div className={`cell-content ${hasConflict ? 'conflict-grid' : ''}`}>
                      {courses.map((course) => (
                        <div
                          key={course.id}
                          className={`course-chip ${course.colorClass}`}
                          title={`${course.id} — ${course.name}`}
                        >
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

                // Sort sections by first time slot
                const sortedSections = [...course.sections].sort((a, b) => {
                  const daysOrder = { 'M': 0, 'T': 1, 'W': 2, 'R': 3, 'F': 4 };
                  const aFirstDay = a.times[0]?.day || 'Z';
                  const bFirstDay = b.times[0]?.day || 'Z';

                  if (daysOrder[aFirstDay] !== daysOrder[bFirstDay]) {
                    return daysOrder[aFirstDay] - daysOrder[bFirstDay];
                  }
                  return (a.times[0]?.start || 0) - (b.times[0]?.start || 0);
                });

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
                          const periodLabels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
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

  // Helper function to format section times for display
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
                  const periodLabels = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
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
                  <button
                    onClick={() => onRemoveCourse(course.id)}
                    className="remove-catalog-btn"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => onAddCourse(course.id)}
                    className="add-btn"
                  >
                    Add
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

const ProfilePage = () => {
  return (
    <div className="page-container">
      <div className="card profile-card">
        <h2 className="card-title">Profile</h2>
        <div className="profile-info">
          <div className="profile-avatar">👤</div>
          <h3>Albert Gator</h3>
          <p>Computer Science Major</p>
        </div>
        <div className="profile-details">
          <div><span>Name</span><span>Albert Gator</span></div>
          <div><span>Degree</span><span>B.S. in Computer Science</span></div>
          <div><span>Credits</span><span>72</span></div>
          <div><span>On Track</span><span className="on-track">✓ Yes</span></div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="home-hero">
        <h1 className="home-title">Welcome to SwampPath</h1>
        <p className="home-subtitle">Your intelligent course scheduling assistant for UF students</p>
      </div>

      <div className="home-features">
        <div className="card feature-card">
          <div className="feature-icon">📅</div>
          <h3>Smart Scheduling</h3>
          <p>Build your perfect class schedule with our intuitive weekly calendar view</p>
        </div>

        <div className="card feature-card">
          <div className="feature-icon">📚</div>
          <h3>Course Catalog</h3>
          <p>Browse and search through available courses with professor ratings</p>
        </div>

        <div className="card feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Conflict Detection</h3>
          <p>Automatically detect and highlight scheduling conflicts</p>
        </div>

        <div className="card feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Track Progress</h3>
          <p>Monitor your credit hours and stay on track for graduation</p>
        </div>
      </div>

      <div className="card home-cta">
        <h2>Get Started</h2>
        <p>Ready to build your schedule? Head to the Catalog to add courses, then view your Schedule to select time slots.</p>
      </div>
    </div>
  );
};

// --- App Component (Main) ---

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedCourses, setSelectedCourses] = useState({});
  const [displayedCourses, setDisplayedCourses] = useState({});

  const addCourse = (courseId) => {
    if (mockCourses[courseId]) {
      setSelectedCourses(prev => ({ ...prev, [courseId]: mockCourses[courseId] }));
    }
  };

  const removeCourse = (courseId) => {
    setSelectedCourses(prev => {
      const newCourses = { ...prev };
      delete newCourses[courseId];
      return newCourses;
    });
    // Also remove from displayed courses if it was showing
    setDisplayedCourses(prev => {
      const newDisplayed = { ...prev };
      delete newDisplayed[courseId];
      return newDisplayed;
    });
  };

  const selectSection = (courseId, sectionId) => {
    setDisplayedCourses(prev => {
      if (prev[courseId]?.sectionId === sectionId) {
        // Deselect if clicking the same section
        const newCourses = { ...prev };
        delete newCourses[courseId];
        return newCourses;
      } else {
        // Select new section
        const course = selectedCourses[courseId];
        const section = course.sections.find(s => s.id === sectionId);
        return {
          ...prev,
          [courseId]: {
            ...course,
            sectionId,
            selectedSection: section
          }
        };
      }
    });
  };

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage />;
      case 'schedule': return (
        <SchedulePage
          selectedCourses={selectedCourses}
          displayedCourses={displayedCourses}
          onRemoveCourse={removeCourse}
          onSelectSection={selectSection}
        />
      );
      case 'catalog': return <CatalogPage onAddCourse={addCourse} onRemoveCourse={removeCourse} selectedCourses={selectedCourses} />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  const NavLink = ({ children, pageName }) => (
    <button
      onClick={() => setPage(pageName)}
      className={`nav-link ${page === pageName ? 'active' : ''}`}
    >
      {children}
    </button>
  );

  return (
    <div id="app-root">
      <style>{`
        /* --- Global Styles --- */
        :root {
          --primary-color: #00529b; /* UF Blue */
          --secondary-color: #fa4616; /* UF Orange */
          --light-gray: #f4f4f5;
          --medium-gray: #e4e4e7;
          --dark-gray: #52525b;
          --text-color: #18181b;
          --card-bg: #ffffff;
          --border-radius: 12px;
          --box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: var(--light-gray);
          color: var(--text-color);
        }

        #app-root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex-grow: 1;
        }

        .card {
          background-color: var(--card-bg);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          padding: 1.5rem;
        }

        .page-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
        }

        .page-title {
            font-size: 2rem;
            font-weight: bold;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }

        .card-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 1rem;
        }

        /* --- Header & Navigation --- */
        .app-header {
          background-color: var(--card-bg);
          box-shadow: var(--box-shadow);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .main-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 4rem;
        }

        .logo {
          font-size: 1.75rem;
          font-weight: bold;
          color: var(--primary-color);
        }

        .nav-links {
          display: flex;
          gap: 0.5rem;
        }

        .nav-link {
          padding: 0.5rem 1rem;
          border: none;
          background: none;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s;
        }

        .nav-link:hover {
          background-color: var(--light-gray);
        }

        .nav-link.active {
          background-color: var(--primary-color);
          color: white;
        }

        /* --- Star Rating Component --- */
        .rating {
          display: flex;
          align-items: center;
        }
        .star-icon {
          width: 1rem;
          height: 1rem;
          color: var(--medium-gray);
        }
        .star-icon.filled {
          color: #facc15; /* yellow-400 */
        }
        .rating-text {
          margin-left: 0.5rem;
          font-size: 0.875rem;
          color: var(--dark-gray);
        }

        /* --- Schedule Page --- */
        .schedule-page-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: calc(100vh - 4rem - 4rem); /* viewport height minus header and padding */
        }

        .schedule-calendar {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .schedule-calendar .calendar-grid {
          flex: 1;
          overflow-y: auto;
        }

        .courses-sidebar {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: 60px repeat(5, 1fr);
          gap: 4px;
          text-align: center;
        }
        .grid-header {
          font-weight: bold;
          font-size: 0.875rem;
        }
        .time-slot {
          font-size: 0.75rem;
          color: var(--dark-gray);
          align-self: center;
        }
        .calendar-cell {
          height: 4rem;
          border-radius: 8px;
          border: 1px solid var(--light-gray);
          transition: background-color 0.2s;
          padding: 4px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
        }
        .course-info {
          font-size: 0.75rem;
          text-align: left;
        }
        .course-info strong {
            display: block;
        }
        .course-info span {
            display: none; /* Hidden on small view */
        }

        /* Course Colors */
        .course-blue { background-color: #bfdbfe; }
        .course-green { background-color: #bbf7d0; }
        .course-indigo { background-color: #c7d2fe; }
        .course-red { background-color: #fecaca; }
        .course-purple { background-color: #e9d5ff; }
        .course-yellow { background-color: #fef08a; }

        .courses-sidebar {
          display: flex;
          flex-direction: column;
          max-height: 85vh;
        }

        .courses-sidebar .card-title {
          margin-bottom: 0.5rem;
        }

        .courses-sidebar > p {
          margin-bottom: 0.5rem;
        }

        .selected-courses-list {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          padding-right: 0.5rem;
          flex: 1;
        }

        .selected-courses-list::-webkit-scrollbar {
          width: 8px;
        }

        .selected-courses-list::-webkit-scrollbar-track {
          background: var(--light-gray);
          border-radius: 4px;
        }

        .selected-courses-list::-webkit-scrollbar-thumb {
          background: var(--medium-gray);
          border-radius: 4px;
        }

        .selected-courses-list::-webkit-scrollbar-thumb:hover {
          background: var(--dark-gray);
        }

        /* --- Catalog Page --- */
        .search-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--medium-gray);
            border-radius: 8px;
            font-size: 1rem;
            margin-bottom: 1.5rem;
            box-sizing: border-box;
        }

        .catalog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .course-card {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            border: 2px solid transparent;
            transition: border-color 0.2s;
        }
        .course-card.selected {
            border-color: var(--primary-color);
        }
        .course-card.has-conflict {
            opacity: 0.6;
            background-color: var(--light-gray);
        }
        .course-card-header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
        }
        .course-card-header h3 { margin: 0; }
        .course-card p, .course-card small { margin: 0; }
        .course-card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            padding-top: 0.5rem;
            border-top: 1px solid var(--light-gray);
        }

        .add-btn {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            color: white;
            background-color: var(--primary-color);
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .add-btn:hover {
            background-color: #003e7b;
        }
        .add-btn:disabled {
            background-color: var(--dark-gray);
            cursor: not-allowed;
        }
        .course-card.has-conflict .add-btn {
            background-color: #dc2626; /* red-600 */
        }

        .remove-btn {
          border: none;
          background: none;
          color: var(--secondary-color);
          font-size: 1.25rem;
          font-weight: bold;
          cursor: pointer;
          padding: 0;
          line-height: 1;
          transition: color 0.2s;
        }

        .remove-btn:hover {
          color: #e03d12;
        }

        .course-item {
        background-color: var(--light-gray);
        padding: 0.5rem;
        border-radius: 8px;
        border: 1px solid var(--medium-gray);
      }

      .course-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      }

      .course-info-line {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
        min-width: 0;
      }

      .course-info-line h3 { 
        margin: 0;
        font-size: 1rem;
        flex-shrink: 0;
      }

      .course-info-line p {
        margin: 0;
        color: var(--dark-gray);
        font-size: 0.8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
        min-width: 0;
      }

      .course-info-line small { 
        margin: 0; 
        color: var(--dark-gray);
        font-size: 0.75rem;
        flex-shrink: 0;
      }

      .separator {
        color: var(--medium-gray);
        font-size: 0.8rem;
        flex-shrink: 0;
      }

      .course-item-body {
        margin: 0.35rem 0;
      }

      .section-label {
        font-size: 0.7rem;
        color: var(--dark-gray);
        margin: 0 0 0.25rem 0;
        font-weight: 500;
      }

      .section-options {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .section-btn {
        display: inline-flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0.35rem 0.5rem;
        background-color: var(--primary-color);
        border: 2px solid var(--primary-color);
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        font-family: inherit;
        color: white;
        font-weight: 500;
        width: auto;
      }

      .section-btn:hover {
        background-color: #003e7b;
        border-color: #003e7b;
      }

      .section-btn.selected {
        background-color: var(--secondary-color);
        border-color: var(--secondary-color);
      }

      .section-btn.selected:hover {
        background-color: #e03d12;
        border-color: #e03d12;
      }

      .section-time-display {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        white-space: nowrap;
      }

      .time-group {
        display: flex;
        gap: 0.35rem;
        align-items: center;
      }

      .section-days {
        font-weight: bold;
        font-size: 0.75rem;
      }

      .section-time {
        font-size: 0.75rem;
      }

      .remove-btn {
        border: none;
        background: none;
        color: var(--secondary-color);
        font-size: 1.25rem;
        font-weight: bold;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        transition: color 0.2s;
      }

      .remove-btn:hover {
        color: #e03d12;
      }

      .course-item-footer {
        margin-top: 0.35rem;
        padding-top: 0.35rem;
        border-top: 1px solid var(--medium-gray);
        font-size: 0.7rem;
        color: var(--dark-gray);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .course-item-footer p {
        margin: 0;
        font-size: 0.7rem;
      }

      .placeholder-text {
        text-align: center;
        padding: 2rem 1rem;
        color: var(--dark-gray);
      }

      .placeholder-text p {
        margin: 0.75rem 0;
        line-height: 1.5;
      }

      .placeholder-text p:first-child {
        font-weight: 600;
        font-size: 1rem;
        color: var(--text-color);
      }

      .credits-total {
        color: var(--primary-color);
        font-weight: bold;
      }

      .calendar-cell.has-conflict {
        border: 1px solid #fecaca; /* light red border */
        background-color: #fff7f7; /* very light red bg */
      }

      .conflict-item {
        /* keep items readable */
        opacity: 1;
      }

      .conflict-warning {
        position: absolute;
        top: 2px;
        right: 4px;
        font-size: 12px;
        opacity: 0.9;
      }

      /* Weekly schedule: improve overlapping item layout */
      .calendar-cell {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
      }

      .cell-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .conflict-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        align-items: stretch;
        gap: 4px;
        height: 100%;
      }

      .course-chip {
        padding: 4px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        overflow: hidden;
      }
      .course-chip strong {
        font-size: 0.75rem;
        line-height: 1;
      }
      .chip-name {
        font-size: 0.7rem;
        line-height: 1.1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 0.9;
      }

      /* soften conflict styling */
      .calendar-cell.has-conflict {
        border: 1px solid #fecaca;
        background-color: #fff7f7;
      }

      .conflict-warning {
        position: absolute;
        top: 2px;
        right: 4px;
        font-size: 12px;
        opacity: 0.9;
      }

        /* --- Profile Page --- */
        .profile-card {
            max-width: 600px;
            margin: 0 auto;
        }
        .profile-info {
            text-align: center;
            margin-bottom: 2rem;
        }
        .profile-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: var(--light-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            margin: 0 auto 1rem;
        }
        .profile-info h3 { margin: 0.5rem 0 0.25rem; }
        .profile-info p { margin: 0; color: var(--dark-gray); }

        .profile-details div {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--light-gray);
        }
        .profile-details div:last-child {
            border-bottom: none;
        }
        .profile-details span:first-child {
            font-weight: 500;
        }
        .on-track {
            color: #16a34a; /* green-600 */
            font-weight: bold;
        }

        /* --- Home Page --- */
        .home-hero {
          text-align: center;
          padding: 3rem 1rem;
          margin-bottom: 3rem;
        }

        .home-title {
          font-size: 3rem;
          font-weight: bold;
          color: var(--primary-color);
          margin: 0 0 1rem 0;
        }

        .home-subtitle {
          font-size: 1.25rem;
          color: var(--dark-gray);
          margin: 0;
        }

        .home-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          text-align: center;
          padding: 2rem 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin: 0 0 0.5rem 0;
          color: var(--primary-color);
        }

        .feature-card p {
          margin: 0;
          color: var(--dark-gray);
          line-height: 1.6;
        }

        .home-cta {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, var(--primary-color) 0%, #003e7b 100%);
          color: white;
        }

        .home-cta h2 {
          margin: 0 0 1rem 0;
          font-size: 1.75rem;
        }

        .home-cta p {
          margin: 0;
          font-size: 1.1rem;
          opacity: 0.95;
        }

        /* --- Responsive Adjustments --- */
        @media (min-width: 768px) {
          .schedule-page-container {
              flex-direction: row;
              align-items: stretch;
              height: calc(100vh - 4rem - 4rem);
              justify-content: center;
              gap: 2rem;
          }
          .schedule-calendar {
              flex: 2;
              min-width: 0;
              max-width: 1000px;
          }
          .courses-sidebar {
              width: 350px;
              flex-shrink: 0;
          }
          .course-info span {
              display: inline; /* Show full course name on larger screens */
          }
        }

        .course-sections-preview {
        margin: 0.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .section-preview {
        display: grid;
        grid-template-columns: 110px auto auto;
        gap: 0.5rem;
        padding: 0.25rem 0.5rem;
        background-color: var(--light-gray);
        border-radius: 4px;
        font-size: 0.75rem;
        color: var(--dark-gray);
        align-items: center;
      }

      .section-preview span:nth-child(1) {
        font-weight: 700;
        color: var(--primary-color);
        text-align: left;
      }

      .section-preview span:nth-child(2) {
        font-weight: 600;
        text-align: left;
      }

      .section-preview span:nth-child(3) {
        text-align: left;
      }

      .remove-catalog-btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        color: white;
        background-color: var(--secondary-color);
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .remove-catalog-btn:hover {
        background-color: #e03d12;
      }

      .conflict-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 4px;
      }

      .course-chip {
        position: relative;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
        color: white;
        font-size: 0.75rem;
        border-radius: 4px;
        padding: 0.5rem;
      }

      .conflict-warning {
        color: #dc2626; /* red-600 */
        font-size: 0.875rem;
        right: 4px;
        top: 4px;
        position: absolute;
      }

      .calendar-cell.has-conflict .course-chip {
        opacity: 0.7;
      }

      .chip-name {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        font-size: 0.65rem;
      }

      .course-chip strong {
        margin-bottom: 2px;
        font-weight: 600;
      }

      /* High-contrast readable chips in Weekly Schedule */
  .course-info,
  .course-chip {
    color: #ffffff;                 /* white text for contrast */
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 6px;
    padding: 2px 6px;
    font-weight: 600;
    text-shadow: 0 1px 0 rgba(0,0,0,0.25); /* improve readability on dark bg */
  }

  /* Darker, higher-contrast palettes (override previous) */
  .course-blue   { background-color: #1e3a8a; border-color: #1d4ed8; } /* blue-800 bg, blue-600 border */
  .course-green  { background-color: #166534; border-color: #15803d; } /* green-800 bg, green-600 border */
  .course-indigo { background-color: #3730a3; border-color: #4f46e5; } /* indigo-800 bg, indigo-600 border */
  .course-red    { background-color: #991b1b; border-color: #dc2626; } /* red-800 bg, red-600 border */
  .course-purple { background-color: #6b21a8; border-color: #9333ea; } /* purple-800 bg, purple-500 border */
  .course-yellow { background-color: #92400e; border-color: #d97706; } /* amber-800 bg, amber-600 border */

  /* Keep chips readable when there is a conflict */
  .calendar-cell.has-conflict .course-info,
  .calendar-cell.has-conflict .course-chip {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.15);
  }

  /* Truncate long names inside chips */
  .course-info span,
  .chip-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

        `}</style>
      <header className="app-header">
        <nav className="main-nav">
          <div className="logo">SwampPath</div>
          <div className="nav-links">
            <NavLink pageName="home">Home</NavLink>
            <NavLink pageName="schedule">Schedule</NavLink>
            <NavLink pageName="catalog">Catalog</NavLink>
            <NavLink pageName="profile">Profile</NavLink>
          </div>
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

