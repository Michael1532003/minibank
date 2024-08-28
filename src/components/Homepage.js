import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to MiniBank</h1>
    <nav>
      <ul>
        <li><Link to="/accounts">List Accounts</Link></li>
        <li><Link to="/create-account">Create Account</Link></li>
        <li><Link to="/transactions">List Transactions</Link></li>
        <li><Link to="/transfer">Transfer</Link></li>
      </ul>
    </nav>
  </div>
);

export default HomePage;
