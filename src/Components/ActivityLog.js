import React from 'react';
import '../ActivityLog.css';

const ActivityLog = ({ activities }) => (
  <table className="activity-log">
    <thead>
      <tr>
        <th>Activity</th>
        <th>Duration</th>
        <th>Calories Burnt</th>
        <th>When</th>
      </tr>
    </thead>
    <tbody>
      {activities.map((activity, index) => (
        <tr key={index}>
          <td>{activity.name}</td>
          <td>{activity.duration} minutes</td>
          <td>{activity.calories.toFixed(2)} Cal</td>
          <td>{activity.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ActivityLog;
