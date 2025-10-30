import React from 'react';
import { profileCourseData } from '../data/mockCourses';

const ProfilePage = ({ userProfile }) => {
    if (!userProfile) return null;

    const profileData = profileCourseData[userProfile.profileKey];
    const completedCourses = profileData?.completedCourses || [];
    const allCourses = profileData?.courses || {};

    return (
        <div className="page-container">
            <div className="card profile-card">
                <h2 className="card-title">Profile</h2>
                <div className="profile-info">
                    <div className="profile-avatar">{userProfile.avatar}</div>
                    <h3>{userProfile.name}</h3>
                    <p>{userProfile.major} Major</p>
                </div>
                <div className="profile-details">
                    <div><span>Name</span><span>{userProfile.name}</span></div>
                    <div><span>Degree</span><span>{userProfile.degree}</span></div>
                    <div><span>Year</span><span>{userProfile.year}</span></div>
                    <div><span>Credits</span><span>{userProfile.credits}</span></div>
                    <div><span>Expected Graduation</span><span>{userProfile.expectedGraduation}</span></div>
                    <div><span>On Track</span><span className="on-track">{userProfile.onTrack ? '✓ Yes' : '✗ No'}</span></div>
                </div>
            </div>

            <div className="card completed-courses-card">
                <h2 className="card-title">Completed Courses ({completedCourses.length})</h2>
                <div className="completed-courses-grid">
                    {completedCourses.map(courseId => {
                        const course = allCourses[courseId];
                        return (
                            <div key={courseId} className="completed-course-item">
                                <div className="completed-check">✓</div>
                                <div className="completed-course-info">
                                    <strong>{courseId}</strong>
                                    <span>{course?.name || 'Course Name'}</span>
                                    <small>{course?.credits || 3} Credits</small>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;