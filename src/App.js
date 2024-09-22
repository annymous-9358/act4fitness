import React, { useState } from "react";
import Header from "./Components/Header";
import ActivityLog from "./Components/ActivityLog";
import LogButtons from "./Components/LogButtons";
import Stats from "./Components/Stats";
import "./App.css";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);

  const logSteps = (newSteps) => {
    const stepsToCalories = newSteps * 0.04;
    setSteps(steps + newSteps);
    setCalories(calories + stepsToCalories);
  };

  const logActivity = (activity, duration) => {
    let caloriesBurned = 0;

    switch (activity.toLowerCase()) {
      case "bicycling":
        caloriesBurned = duration * 11.5;
        break;
      case "kickboxing":
        caloriesBurned = duration * 17.8;
        break;
      default:
        caloriesBurned = duration * 8.5;
        break;
    }

    setActivities([
      ...activities,
      {
        name: activity,
        duration,
        calories: caloriesBurned,
        time: new Date().toLocaleTimeString(),
      },
    ]);
    setCalories(calories + caloriesBurned);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="stats-section">
          <Stats steps={steps} calories={calories} weight={(calories / 2400) * 100} activities={activities} />
        </div>
        <div className="activity-section">
          <ActivityLog activities={activities} />
          <LogButtons logSteps={logSteps} logActivity={logActivity} />
        </div>
      </div>
    </div>
  );
};

export default App;