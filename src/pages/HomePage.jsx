import React from 'react';

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

export default HomePage;
