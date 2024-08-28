import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AccountDetail = () => {
  const { accountNo } = useParams();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/account/${accountNo}`)
      .then(response => setAccount(response.data))
      .catch(error => console.error('Error fetching account details:', error));
  }, [accountNo]);

  if (!account) return <div>Loading...</div>;

  return (
    <div>
      <h1>Account Details</h1>
      <p>Account No: {account.account_no}</p>
      <p>Name: {account.name}</p>
      <p>Balance: ${account.balance}</p>
      <p>Created At: {account.created_at}</p>
    </div>
  );
};

export default AccountDetail;
