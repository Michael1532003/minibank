import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/accounts')
      .then(response => setAccounts(response.data))
      .catch(error => console.error('Error fetching accounts:', error));
  }, []);

  return (
    <div>
      <h1>List of Accounts</h1>
      <ul>
        {accounts.map(account => (
          <li key={account.account_no}>
            <Link to={`/account/${account.account_no}`}>{account.name} (Account No: {account.account_no})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAccounts;
