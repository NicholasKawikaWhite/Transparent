import React from 'react';
import "./userProfile.css"


const UserDashboard = ({ user }) => {
  // Assuming 'user' is an object with properties: id, username, email, and profilePhoto
  const { username, email, profilePhoto } = user;

  return (
    <div className="user-dashboard">
      <div className="profile-photo">
        <img src={profilePhoto} alt="Profile" />
      </div>
      <div className="user-info">
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
