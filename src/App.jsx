import React, { useState, useEffect } from 'react';
import './styles/global.css';
import { mockCourses } from './data/mockCourses';
import SchedulePage from './pages/SchedulePage';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import PlannerPage from './pages/PlannerPage';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState('home');
  const [selectedCourses, setSelectedCourses] = useState({});
  const [displayedCourses, setDisplayedCourses] = useState({});
  const [plannedCourses, setPlannedCourses] = useState({});


useEffect(() => {
  const savedUser = localStorage.getItem('swamppath_user');
  if (savedUser) {
    const userData = JSON.parse(savedUser);
    setCurrentUser(userData);
    setIsAuthenticated(true);
    
    const savedCourses = localStorage.getItem(`swamppath_courses_${userData.profileKey}`);
    const savedDisplayed = localStorage.getItem(`swamppath_displayed_${userData.profileKey}`);
    const savedPlanned = localStorage.getItem(`swamppath_planned_${userData.profileKey}`);
    
    if (savedCourses) setSelectedCourses(JSON.parse(savedCourses));
    if (savedDisplayed) setDisplayedCourses(JSON.parse(savedDisplayed));
    if (savedPlanned) setPlannedCourses(JSON.parse(savedPlanned));
  }
}, []);

useEffect(() => {
  if (currentUser) {
    localStorage.setItem(`swamppath_courses_${currentUser.profileKey}`, JSON.stringify(selectedCourses));
    localStorage.setItem(`swamppath_displayed_${currentUser.profileKey}`, JSON.stringify(displayedCourses));
    localStorage.setItem(`swamppath_planned_${currentUser.profileKey}`, JSON.stringify(plannedCourses));
  }
}, [selectedCourses, displayedCourses, plannedCourses, currentUser]);

const handleLogin = (userData) => {
  setCurrentUser(userData);
  setIsAuthenticated(true);
  localStorage.setItem('swamppath_user', JSON.stringify(userData));
  
  const savedCourses = localStorage.getItem(`swamppath_courses_${userData.profileKey}`);
  const savedDisplayed = localStorage.getItem(`swamppath_displayed_${userData.profileKey}`);
  const savedPlanned = localStorage.getItem(`swamppath_planned_${userData.profileKey}`);
  
  if (savedCourses) setSelectedCourses(JSON.parse(savedCourses));
  if (savedDisplayed) setDisplayedCourses(JSON.parse(savedDisplayed));
  if (savedPlanned) setPlannedCourses(JSON.parse(savedPlanned));
  
  setPage('home');
};

const handleLogout = () => {
  setIsAuthenticated(false);
  setCurrentUser(null);
  setSelectedCourses({});
  setDisplayedCourses({});
  setPlannedCourses({});
  setPage('home');
  localStorage.removeItem('swamppath_user');
};

const updatePlannedCourses = (newPlanned) => {
  setPlannedCourses(newPlanned);
};

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
    setDisplayedCourses(prev => {
      const newDisplayed = { ...prev };
      delete newDisplayed[courseId];
      return newDisplayed;
    });
  };

  const selectSection = (courseId, sectionId) => {
    setDisplayedCourses(prev => {
      if (prev[courseId]?.sectionId === sectionId) {
        const newCourses = { ...prev };
        delete newCourses[courseId];
        return newCourses;
      } else {
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

  if (!isAuthenticated) {
    return <OnboardingPage onLogin={handleLogin} />;
  }

const renderPage = () => {
  switch (page) {
    case 'home': return <HomePage currentUser={currentUser} />;
    case 'schedule': return (
      <SchedulePage
        selectedCourses={selectedCourses}
        displayedCourses={displayedCourses}
        onRemoveCourse={removeCourse}
        onSelectSection={selectSection}
      />
    );
    case 'catalog': return (
      <CatalogPage
        onAddCourse={addCourse}
        onRemoveCourse={removeCourse}
        selectedCourses={selectedCourses}
        currentUser={currentUser}
      />
    );
    case 'planner': return (
      <PlannerPage
        currentUser={currentUser}
        plannedCourses={plannedCourses}
        onUpdatePlannedCourses={updatePlannedCourses}
      />
    );
    case 'profile': return <ProfilePage currentUser={currentUser} />;
    default: return <HomePage currentUser={currentUser} />;
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
      <header className="app-header">
        <nav className="main-nav">
          <div className="logo">SwampPath</div>
          <div className="nav-links">
            <NavLink pageName="home">Home</NavLink>
            <NavLink pageName="schedule">Schedule</NavLink>
            <NavLink pageName="planner">Planner</NavLink>
            <NavLink pageName="catalog">Catalog</NavLink>
            <NavLink pageName="profile">Profile</NavLink>
            <button onClick={handleLogout} className="nav-link logout-btn">
              Logout
            </button>
          </div>
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}