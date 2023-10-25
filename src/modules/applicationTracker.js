import React from 'react';
import "./applicationTracker.css"

const JobApplicationContent = () => {
  // Sample profile information
  const profileInfo = {
    workExperience: '5 years',
    skills: [
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Node.js', level: 'Beginner' },
      // Add more skills here
    ],
    education: 'Bachelor of Computer Science',
    // Add more profile-related information
  };

  // Sample application data
  const applications = [
    {
      companyName: 'Google',
      role: 'Software Engineer',
      appliedDate: '2023-10-15',
      currentStatus: 'In Review',
      nextSteps: 'Technical Interview',
    },
    {
      companyName: 'Amazon',
      role: 'Business Intelligence Engineer',
      appliedDate: '2023-10-20',
      currentStatus: 'Pending',
      nextSteps: 'Resume Screening',
    },
    // Add more application items
  ];

  return (
    <div className="job-application-content">
      <div className="column">
        <h2>Your Profile</h2>
        <div className="profile-info">
          <p><strong>Work Experience:</strong> {profileInfo.workExperience}</p>
          <p><strong>Education:</strong> {profileInfo.education}</p>
          <div className="skills-progress">
            <h3>Skill Builder</h3>
            <div className="skill-list">
              {profileInfo.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <p><strong>{skill.name}:</strong> {skill.level}</p>
                  <div className="progress">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="learn-box">
              <h3>Learn</h3>
              <p><strong>Visit LeetCode:</strong> <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">LeetCode</a></p>
              <p><strong>Skill Suggestions:</strong> JavaScript, React, Algorithms, Data Structures</p>
              {/* Add more learning resources and suggestions */}
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <h2>Your Applications</h2>
        <div className="applications-list">
          {applications.map((app, index) => (
            <div key={index} className="application-item">
              <p><strong>Company Name:</strong> {app.companyName}</p>
              <p><strong>Role:</strong> {app.role}</p>
              <p><strong>Applied Date:</strong> {app.appliedDate}</p>
              <p><strong>Current Status:</strong> {app.currentStatus}</p>
              <p><strong>Next Steps:</strong> {app.nextSteps}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobApplicationContent;
