import React from 'react';
import '../CircularProgress.css';

const CircularProgress = ({ label, value, max, color }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="circular-progress">
      <div className="circle">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{ stroke: color }}
          />
          <text x="18" y="20.35" className="percentage">
            {percentage.toFixed(2)}%
          </text>
        </svg>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default CircularProgress;
