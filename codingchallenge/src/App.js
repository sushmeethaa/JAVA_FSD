import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import './App.css';
import BookDashboard from './BookDashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<HomePage onLogin={handleLogin} />} />
          ) : (
            <Route path="/" element={<BookDashboard open={true} onClose={() => setIsLoggedIn(false)} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};
export default App;
