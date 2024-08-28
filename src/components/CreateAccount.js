import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/account', { name, balance })
      .then(response => {
        Navigate(`/account/${response.data.account_no}`);
      })
      .catch(error => console.error('Error creating account:', error));
  };

  return (
    <div>
      <h1>Create New Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Initial Balance:</label>
          <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} required />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
