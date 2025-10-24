import React from 'react';

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

export default ProfilePage;
