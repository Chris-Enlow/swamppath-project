import React, { useState, useEffect } from 'react';
import './styles/global.css';
import { getAvailableCourses } from './data/mockCourses';
import SchedulePage from './pages/SchedulePage';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import OnboardingPage from './pages/OnboardingPage';

export default function App() {
  const [page, setPage] = useState('onboarding');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState({});
  const [displayedCourses, setDisplayedCourses] = useState({});
  const [availableCourses, setAvailableCourses] = useState({});

  const handleLogin = (profile) => {
    setUserProfile(profile);
    setIsLoggedIn(true);
    const courses = getAvailableCourses(profile.profileKey);
    setAvailableCourses(courses);
    setPage('schedule');
  };

  const addCourse = (courseId) => {
    if (availableCourses[courseId]) {
      setSelectedCourses(prev => ({ ...prev, [courseId]: availableCourses[courseId] }));
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
    if (!isLoggedIn) {
      return <OnboardingPage onLogin={handleLogin} />;
    }

    switch (page) {
      case 'schedule': return (
        <SchedulePage
          selectedCourses={selectedCourses}
          displayedCourses={displayedCourses}
          onRemoveCourse={removeCourse}
          onSelectSection={selectSection}
          userProfile={userProfile}
        />
      );
      case 'catalog': return (
        <CatalogPage
          onAddCourse={addCourse}
          onRemoveCourse={removeCourse}
          selectedCourses={selectedCourses}
          userProfile={userProfile}
        />
      );
      case 'profile': return <ProfilePage userProfile={userProfile} />;
      default: return (
        <SchedulePage
          selectedCourses={selectedCourses}
          displayedCourses={displayedCourses}
          onRemoveCourse={removeCourse}
          onSelectSection={selectSection}
          userProfile={userProfile}
        />
      );
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
      {isLoggedIn && (
        <header className="app-header">
          <nav className="main-nav">
            <div className="logo">SwampPath</div>
            <div className="nav-links">
              <NavLink pageName="schedule">Schedule</NavLink>
              <NavLink pageName="catalog">Catalog</NavLink>
              <NavLink pageName="profile">Profile</NavLink>
            </div>
          </nav>
        </header>
      )}
      <main>
        {renderPage()}
      </main>
    </div>
  );
}