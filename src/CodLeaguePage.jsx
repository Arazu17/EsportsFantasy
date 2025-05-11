import { useState } from 'react';

function CodLeaguePage() {
  const [mode, setMode] = useState(''); // 'join' or 'create'
  

  const [joinCode, setJoinCode] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [numPlayers, setNumPlayers] = useState(4);
  const [scoring, setScoring] = useState({
    hardpoint: {
      kill: 0,
      death: 0,
      hillTimeSec: 0,
    },
    search: {
      kill: 0,
      death: 0,
      plantDefuse: 0,
      clutch1v2: 0,
      clutch1v3: 0,
      clutch1v4: 0,
      ace: 0,
    },
    control: {
      kill: 0,
      death: 0,
      tick: 0,
    }
  });
  
  const [roles, setRoles] = useState({
    mainAR: 1,
    mainSub: 1,
    flex: 1,
    subs: 0,
  });

  const handleCreateLeague = () => {
    const leagueData = {
      leagueName,
      numPlayers,
      roles,
      scoring,
    };
  
    fetch("http://localhost:5000/api/create-league", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(leagueData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("League created!");
      })
      .catch(err => {
        console.error(err);
        alert("Failed to create league.");
      });
  };  
  

  const handleJoinLeague = () => {
    console.log('Joining with code:', joinCode);
  };

  return (
    <div className="app">
      <h1>Call of Duty Fantasy League</h1>
      {!mode && (
        <>
          <button onClick={() => setMode('join')}>Join League</button>
          <button onClick={() => setMode('create')}>Create League</button>
        </>
      )}

      {mode === 'join' && (
        <div>
          <input
            type="text"
            placeholder="Enter League Code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
          />
          <button onClick={handleJoinLeague}>Join</button>
        </div>
      )}

      {mode === 'create' && (
        <div className="form">
          <input
            type="text"
            placeholder="League Name"
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of Players"
            value={numPlayers}
            onChange={(e) => setNumPlayers(e.target.value)}
          />

          <h3>Roles Configuration</h3>
          <label>Main AR:</label>
          <input
            type="number"
            value={roles.mainAR}
            onChange={(e) => setRoles({ ...roles, mainAR: parseInt(e.target.value) })}
          />
          <label>Main Sub:</label>
          <input
            type="number"
            value={roles.mainSub}
            onChange={(e) => setRoles({ ...roles, mainSub: parseInt(e.target.value) })}
          />
          <label>Flex:</label>
          <input
            type="number"
            value={roles.flex}
            onChange={(e) => setRoles({ ...roles, flex: parseInt(e.target.value) })}
          />
          <label>Substitutes:</label>
          <input
            type="number"
            value={roles.subs}
            onChange={(e) => setRoles({ ...roles, subs: parseInt(e.target.value) })}
          />

        <button onClick={handleCreateLeague}>Create League</button>
        <h4>Scoring Settings</h4>
        <h5>Scoring Setting</h5>
        <h5>Hardpoint</h5>
        <label>Points per Kill:</label>
        <input type="number" value={scoring.hardpoint.kill}
        onChange={(e) => setScoring({
            ...scoring,
            hardpoint: { ...scoring.hardpoint, kill: parseFloat(e.target.value) }
        })}
        />
        <label>Points per Death:</label>
        <input type="number" value={scoring.hardpoint.death}
        onChange={(e) => setScoring({
            ...scoring,
            hardpoint: { ...scoring.hardpoint, death: parseFloat(e.target.value) }
        })}
        />
        <label>Points per Second of Hill Time:</label>
        <input type="number" value={scoring.hardpoint.hillTimeSec}
        onChange={(e) => setScoring({
            ...scoring,
            hardpoint: { ...scoring.hardpoint, hillTimeSec: parseFloat(e.target.value) }
        })}
        />

        <h5>Search & Destroy</h5>
        <label>Points per Kill:</label>
        <input type="number" value={scoring.search.kill}
        onChange={(e) => setScoring({
            ...scoring,
            search: { ...scoring.search, kill: parseFloat(e.target.value) }
        })}
        />
        <label>Points per Death:</label>
        <input type="number" value={scoring.search.death}
        onChange={(e) => setScoring({
            ...scoring,
            search: { ...scoring.search, death: parseFloat(e.target.value) }
        })}
        />
        <label>Points per Plant/Defuse:</label>
        <input type="number" value={scoring.search.plantDefuse}
        onChange={(e) => setScoring({
            ...scoring,
            search: { ...scoring.search, plantDefuse: parseFloat(e.target.value) }
        })}
        />
        <label>Points per 1v2 Clutch:</label>
        <input type="number" value={scoring.search.clutch1v2}
        onChange={(e) => setScoring({
            ...scoring,
            search: { ...scoring.search, clutch1v2: parseFloat(e.target.value) }
        })}
        />
        <label>Points per 1v3 Clutch:</label>
        <input type="number" value={scoring.search.clutch1v3}
        onChange={(e) => setScoring({
            ...scoring,
            search: { ...scoring.search, clutch1v3: parseFloat(e.target.value) }
        })}
        />
        <label>Points per 1v4 Clutch:</label>
        <input type="number" value={scoring.search.clutch1v4}
        onChange={(e) => setScoring({
            ...scoring,
            search: { ...scoring.search, clutch1v4: parseFloat(e.target.value) }
        })}
        />
        <label>Points per Ace:</label>
        <input type="number" value={scoring.search.ace}
        onChange={(e) => setScoring({
            ...scoring,
            search: { ...scoring.search, ace: parseFloat(e.target.value) }
        })}
        />

        <h5>Control</h5>
        <label>Points per Kill:</label>
        <input type="number" value={scoring.control.kill}
        onChange={(e) => setScoring({
            ...scoring,
            control: { ...scoring.control, kill: parseFloat(e.target.value) }
        })}
        />
        <label>Points per Death:</label>
        <input type="number" value={scoring.control.death}
        onChange={(e) => setScoring({
            ...scoring,
            control: { ...scoring.control, death: parseFloat(e.target.value) }
        })}
        />
        <label>Points per Tick:</label>
        <input type="number" value={scoring.control.tick}
        onChange={(e) => setScoring({
            ...scoring,
            control: { ...scoring.control, tick: parseFloat(e.target.value) }
        })}
        />

        </div>
      )}
    </div>
  );
}

export default CodLeaguePage;
