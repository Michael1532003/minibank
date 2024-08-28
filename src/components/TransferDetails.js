import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TransferDetail = () => {
  const { transactionId } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/transaction/${transactionId}`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error('Error fetching transaction details:', error));
  }, [transactionId]);

  if (!transaction) return <div>Loading...</div>;

  return (
    <div>
      <h1>Transaction Details</h1>
      <p>Transaction ID: {transaction.transaction_id}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>Credit Account: {transaction.credit_account}</p>
      <p>Debit Account: {transaction.debit_account}</p>
      <p>Created At: {transaction.created_at}</p>
    </div>
  );
};

export default TransferDetail;
