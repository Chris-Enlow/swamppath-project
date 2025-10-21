import React, { useState, useEffect } from 'react';

// --- Mock Data ---
// In a real application, this would come from a database/API
const mockCourses = {
  'COP3502': { name: 'Programming Fundamentals 1', credits: 3, professor: 'Prof. Amanpreet Kapoor', rating: 4.5, schedule: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
  'MAC2311': { name: 'Calculus 1', credits: 4, professor: 'Prof. Darryl Jacobs', rating: 4.2, schedule: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
  'ENC1101': { name: 'Expository and Argumentative Writing', credits: 3, professor: 'Prof. Amy Jung', rating: 4.8, schedule: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] },
  'PHY2048': { name: 'Physics with Calculus 1', credits: 3, professor: 'Prof. Selman Hershfield', rating: 3.9, schedule: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
  'CHM2045': { name: 'General Chemistry 1', credits: 3, professor: 'Prof. Melanie Veige', rating: 4.1, schedule: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] },
  'ECO2013': { name: 'Principles of Macroeconomics', credits: 3, professor: 'Prof. Mark Rush', rating: 4.6, schedule: [{ day: 'F', start: 5, end: 6 }] },
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

const SchedulePage = ({ selectedCourses, onRemoveCourse }) => {
  const days = ['M', 'T', 'W', 'R', 'F'];
  const periods = ['8:30 AM', '9:35 AM', '10:40 AM', '11:45 AM', '12:50 PM', '1:55 PM', '3:00 PM', '4:05 PM'];
  const courseColors = ['course-blue', 'course-green', 'course-indigo', 'course-red', 'course-purple', 'course-yellow'];

  const getCourseForSlot = (day, periodIndex) => {
    const courseEntry = Object.entries(selectedCourses).find(([id, course]) =>
      course.schedule.some(slot => slot.day === day && slot.start === periodIndex + 1)
    );
    if (courseEntry) {
      const [id, course] = courseEntry;
      const colorClass = courseColors[Object.keys(selectedCourses).indexOf(id) % courseColors.length];
      return { id, ...course, colorClass };
    }
    return null;
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
                const course = getCourseForSlot(day, periodIndex);
                return (
                  <div key={`${day}-${period}`} className={`calendar-cell ${course ? course.colorClass : ''}`}>
                    {course && (
                      <div className="course-info">
                        <strong>{course.id}</strong>
                        <span>{course.name}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="card courses-sidebar">
        <h2 className="card-title">My Courses</h2>
        <p>Total Credits: <span className="credits-total">{totalCredits}</span></p>
        <div className="selected-courses-list">
          {Object.keys(selectedCourses).length === 0 ? (
            <p className="placeholder-text">No courses added yet.</p>
          ) : (
            Object.entries(selectedCourses).map(([id, course]) => (
              <div key={id} className="course-item">
                <div className="course-item-header">
                  <div>
                    <h3>{id}</h3>
                    <p>{course.name}</p>
                    <small>{course.credits} Credits</small>
                  </div>
                  <button onClick={() => onRemoveCourse(id)} className="remove-btn">&times;</button>
                </div>
                <div className="course-item-footer">
                  <p>{course.professor}</p>
                  <ProfessorRating rating={course.rating} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const CatalogPage = ({ onAddCourse, selectedCourses }) => {
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

  const checkConflict = (newCourse) => {
    for (const selectedCourse of Object.values(selectedCourses)) {
      for (const newSlot of newCourse.schedule) {
        for (const selectedSlot of selectedCourse.schedule) {
          if (newSlot.day === selectedSlot.day && newSlot.start === selectedSlot.start) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Course Catalog</h2>
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
          const hasConflict = !isSelected && checkConflict(course);
          return (
            <div key={course.id} className={`card course-card ${isSelected ? 'selected' : ''} ${hasConflict ? 'conflict' : ''}`}>
              <div className="course-card-header">
                <h3>{course.id}</h3>
                <span>{course.credits} Credits</span>
              </div>
              <p>{course.name}</p>
              <small>{course.professor}</small>
              <div className="course-card-footer">
                <ProfessorRating rating={course.rating} />
                <button
                  onClick={() => onAddCourse(course.id)}
                  disabled={isSelected || hasConflict}
                  className="add-btn"
                >
                  {isSelected ? 'Added' : hasConflict ? 'Conflict' : 'Add'}
                </button>
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

// --- App Component (Main) ---

export default function App() {
  const [page, setPage] = useState('schedule');
  const [selectedCourses, setSelectedCourses] = useState({
    'COP3502': mockCourses['COP3502'],
    'MAC2311': mockCourses['MAC2311'],
  });

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
  };

  const renderPage = () => {
    switch (page) {
      case 'schedule': return <SchedulePage selectedCourses={selectedCourses} onRemoveCourse={removeCourse} />;
      case 'catalog': return <CatalogPage onAddCourse={addCourse} selectedCourses={selectedCourses} />;
      case 'profile': return <ProfilePage />;
      default: return <SchedulePage selectedCourses={selectedCourses} onRemoveCourse={removeCourse} />;
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
          max-width: 1200px;
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

        .courses-sidebar .credits-total {
            color: var(--primary-color);
            font-weight: bold;
        }
        .selected-courses-list {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .course-item {
            background-color: var(--light-gray);
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid var(--medium-gray);
        }
        .course-item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        .course-item-header h3 { margin: 0; }
        .course-item-header p, .course-item-header small { margin: 0; color: var(--dark-gray); }
        .remove-btn {
            border: none;
            background: none;
            color: #ef4444; /* red-500 */
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        .course-item-footer {
            margin-top: 0.5rem;
            padding-top: 0.5rem;
            border-top: 1px solid var(--medium-gray);
            font-size: 0.8rem;
            color: var(--dark-gray);
        }
        .placeholder-text {
            text-align: center;
            padding: 2rem 0;
            color: var(--dark-gray);
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
        .course-card.conflict {
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
        .course-card.conflict .add-btn {
            background-color: #dc2626; /* red-600 */
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

        /* --- Responsive Adjustments --- */
        @media (min-width: 768px) {
            .schedule-page-container {
                flex-direction: row;
                align-items: flex-start;
            }
            .schedule-calendar {
                flex-grow: 1;
            }
            .courses-sidebar {
                width: 320px;
                flex-shrink: 0;
            }
            .course-info span {
                display: inline; /* Show full course name on larger screens */
            }
        }
      `}</style>
      <header className="app-header">
        <nav className="main-nav">
          <h1 className="logo">SwampPath</h1>
          <div className="nav-links">
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

