import React from 'react';
import '../ProgressDial.css';

const ProgressDial = ({ label, unit, value, maxValue }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / maxValue) * circumference;

  return (
    <div className="progress-dial">
      <svg width="120" height="120">
        <circle
          className="progress-dial__background"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="progress-dial__progress"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="progress-dial__label">
        {label}: {value} {unit}
      </div>
    </div>
  );
};

export default ProgressDial;
