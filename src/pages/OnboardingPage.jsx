import React, { useState } from 'react';

const OnboardingPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const profiles = {
        alex: {
            password: '123',
            data: {
                name: 'Alex Thompson',
                major: 'Computer Science',
                degree: 'B.S. in Computer Science',
                year: 'Sophomore',
                credits: 45,
                expectedGraduation: 'Spring 2027',
                onTrack: true,
                avatar: '💻',
                profileKey: 'alex' 
            }
        },
        jordan: {
            password: 'abc',
            data: {
                name: 'Jordan Rivera',
                major: 'Marine Science',
                degree: 'B.S. in Marine Science',
                year: 'Junior',
                credits: 72,
                expectedGraduation: 'Fall 2026',
                onTrack: true,
                avatar: '🌊',
                profileKey: 'jordan' 
            }
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        const user = profiles[username.toLowerCase()];
        
        if (!user) {
            setError('Invalid username');
            return;
        }
        
        if (user.password !== password) {
            setError('Invalid password');
            return;
        }
        
        onLogin(user.data);
    };

    return (
        <div className="onboarding-container">
            <div className="onboarding-hero">
                <div className="onboarding-logo">🐊</div>
                <h1 className="onboarding-title">Welcome to SwampPath</h1>
                <p className="onboarding-subtitle">Your intelligent course scheduling assistant for UF students</p>
            </div>

            <div className="onboarding-card">
                <h2>Student Login</h2>
                <p className="onboarding-instruction">Sign in to access your personalized course schedule</p>
                
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="login-input"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="login-input"
                            required
                        />
                    </div>
                    
                    {error && <div className="error-message">{error}</div>}
                    
                    <button type="submit" className="onboarding-login-btn">
                        Sign In
                    </button>
                </form>

                <div className="demo-credentials">
                    <p className="demo-title">Demo Accounts:</p>
                    <div className="demo-accounts">
                        <div className="demo-account">
                            <strong>💻 Computer Science (Sophomore)</strong>
                            <span>Username: alex</span>
                            <span>Password: 123</span>
                            <span className="demo-note">5 courses completed • 45 credits</span>
                        </div>
                        <div className="demo-account">
                            <strong>🌊 Marine Science (Junior)</strong>
                            <span>Username: jordan</span>
                            <span>Password: abc</span>
                            <span className="demo-note">9 courses completed • 72 credits</span>
                        </div>
                    </div>
                </div>

                <div className="onboarding-features">
                    <div className="onboarding-feature">
                        <span className="feature-icon-small">📅</span>
                        <span>Smart Scheduling</span>
                    </div>
                    <div className="onboarding-feature">
                        <span className="feature-icon-small">✅</span>
                        <span>Prerequisite Tracking</span>
                    </div>
                    <div className="onboarding-feature">
                        <span className="feature-icon-small">⭐</span>
                        <span>Professor Ratings</span>
                    </div>
                    <div className="onboarding-feature">
                        <span className="feature-icon-small">🎯</span>
                        <span>Major-Specific Courses</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingPage;