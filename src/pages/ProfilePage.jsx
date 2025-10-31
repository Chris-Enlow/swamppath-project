import React from 'react';

const ProfilePage = ({ currentUser }) => {
    return (
        <div className="page-container">
            <div className="card profile-card">
                <h2 className="card-title">Profile</h2>
                <div className="profile-info">
                    <div className="profile-avatar">{currentUser.avatar}</div>
                    <h3>{currentUser.name}</h3>
                    <p>{currentUser.major} Major</p>
                </div>
                <div className="profile-details">
                    <div><span>Name</span><span>{currentUser.name}</span></div>
                    <div><span>Degree</span><span>{currentUser.degree}</span></div>
                    <div><span>Year</span><span>{currentUser.year}</span></div>
                    <div><span>Credits</span><span>{currentUser.credits}</span></div>
                    <div><span>GPA</span><span>{currentUser.gpa}</span></div>
                    <div><span>Expected Graduation</span><span>{currentUser.expectedGraduation}</span></div>
                    <div><span>On Track</span><span className="on-track">✓ {currentUser.onTrack ? 'Yes' : 'No'}</span></div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Completed Courses</h3>
                    <div className="completed-courses-grid">
                        {currentUser.completedCourses.map((courseId) => (
                            <div key={courseId} className="completed-course-chip">
                                {courseId}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;