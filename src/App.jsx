import React, { useState, useEffect } from 'react';
import './styles/global.css';
import { mockCourses } from './data/mockCourses';
import SchedulePage from './pages/SchedulePage';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

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
      case 'catalog': return (
        <CatalogPage
          onAddCourse={addCourse}
          onRemoveCourse={removeCourse}
          selectedCourses={selectedCourses}
        />
      );
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

