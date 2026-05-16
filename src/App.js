import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './features/taskSlice';

function App() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.taskList);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const firstFiveUsers = data.slice(0, 5);
        setUsers(firstFiveUsers);
    })
      .catch((err) => console.error('Failed to fetch users:', err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Simple User Directory</h1>

      <h2 style={styles.sectionTitle}>Users from API</h2>
      <h4>Name - Email - Company Name</h4>
      {users.length === 0 ? (
        <p style={styles.empty}>Loading users...</p>
      ) : (
        <ul style={styles.list}>
          {users.map((user) => (
            <li key={user.id} style={styles.listItem}>
              {user.name} — {user.email} — {user.company.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
  position: 'fixed',
  top: '50%',                  
  left: '50%',               
  transform: 'translate(-50%, -50%)', 
  width: 'calc(100% - 40px)', 
  maxWidth: '600px',           
  boxSizing: 'border-box',    
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  inputSection: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    fontSize: '14px',
  },
  sectionTitle: {
    borderBottom: '2px solid #ddd',
    paddingBottom: '6px',
    color: '#444',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '6px',
    border: '1px solid #ddd',
  },
  empty: {
    color: '#999',
    fontStyle: 'italic',
  },
};

export default App;