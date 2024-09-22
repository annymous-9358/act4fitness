import React from 'react';
import '../Header.css';

const Header = ({ onStatsClick }) => (
  <header className="header">
    <h1>ACT4 FITNESS</h1>
    <button className="stats-link" onClick={onStatsClick}>My Stats</button>
  </header>
);

export default Header;