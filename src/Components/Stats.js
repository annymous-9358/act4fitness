import React from 'react';
import ProgressDial from './ProgressDial';
import '../Stats.css';

const Stats = ({ steps, calories, weight, activities }) => (
  <div className="stats">
    <div className="stat-item">
      <h3>10K Steps</h3>
      <ProgressDial label="Steps" unit="steps" value={steps} maxValue={10000} />
    </div>
    <div className="stat-item">
      <h3>Cals Burnt</h3>
      <ProgressDial label="Cals Burnt" unit="Cals" value={calories} maxValue={2400} />
    </div>
    <div className="stat-item">
      <h3>Goal Weight</h3>
      <ProgressDial label="Goal Weight" unit="%" value={weight} maxValue={100} />
    </div>
    <div className="activity-log">
      <h3>Activity Log</h3>
      <table>
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
    </div>
  </div>
);

export default Stats;