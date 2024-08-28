import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div>
      <h1>List of Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.transaction_id}>
            <Link to={`/transaction/${transaction.transaction_id}`}>Transaction ID: {transaction.transaction_id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTransactions;
