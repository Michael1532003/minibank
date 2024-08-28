import React, { useState } from 'react';
import axios from 'axios';

const Transfer = () => {
  const [creditAccountNo, setCreditAccountNo] = useState('');
  const [debitAccountNo, setDebitAccountNo] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/transfer', { creditAccountNo, debitAccountNo, amount })
      .then(response => {
        setMessage('Transfer successful');
      })
      .catch(error => setMessage(`Error: ${error.message}`));
  };

  return (
    <div>
      <h1>Transfer Money</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Credit Account No:</label>
          <input type="text" value={creditAccountNo} onChange={(e) => setCreditAccountNo(e.target.value)} required />
        </div>
        <div>
          <label>Debit Account No:</label>
          <input type="text" value={debitAccountNo} onChange={(e) => setDebitAccountNo(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Transfer;
