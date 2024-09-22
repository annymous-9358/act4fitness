import React, { useState } from 'react';
import '../LogButtons.css';

const LogButtons = ({ logSteps, logActivity }) => {
  const [steps, setSteps] = useState('');
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  const handleLogSteps = () => {
    if (steps) {
      logSteps(parseInt(steps));
      setSteps('');
    }
  };

  const handleLogActivity = () => {
    if (activity && duration) {
      logActivity(activity, parseInt(duration));
      setActivity('');
      setDuration('');
    }
  };

  return (
    <div className="log-buttons">
      <div className="log-step-form">
        <input
          type="number"
          placeholder="Enter steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <button onClick={handleLogSteps}>LOG STEPS</button>
      </div>
      <div className="log-activity-form">
        <input
          type="text"
          placeholder="Activity name"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button onClick={handleLogActivity}>LOG ACTIVITY</button>
      </div>
    </div>
  );
};

export default LogButtons;
