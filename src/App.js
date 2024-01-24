import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [users,setUsers]= useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleAddUser = () => {
    if (!username.trim() || !age.trim() || +age <=0 ){
      setShowWarning(true);
      return ;
    }

    const newUser = {
      username: username,
      age : age,
    }
    setUsers((prevUsers) => [...prevUsers,newUser]);

    setUsername('');
    setAge('');
    setShowWarning(false);
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <button onClick={handleAddUser}>Add User</button>
      {showWarning && (
        <div style ={{color: 'red',marginTop: '10px'}} >
          Please enter both username and a valid age (above 0).
        </div>
      )}
      <div>
        <h2>User:</h2>
        <ul>
          {users.map((user,index)=>(
            <li key ={index} >
              {user.username},Age: {user.age}
            </li>

          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
