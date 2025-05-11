import { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <h1>Esports Fantasy League</h1>
      <p>Select a game to create or join a fantasy league:</p>
      <div className="button-container">
        <button onClick={() => navigate('/cod')}>Call of Duty</button>
        {/* Other game buttons */}
      </div>
    </div>
  );
}

export default App;
