import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import ListAccounts from './components/ListAccounts';
import AccountDetail from './components/AccountDetail';
import CreateAccount from './components/CreateAccount';
import ListTransactions from './components/ListTransactions';
import Transfer from './components/Transfer';
import TransferDetail from './components/TransferDetails';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/accounts" exact component={ListAccounts} />
        <Route path="/account/:accountNo" component={AccountDetail} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/transactions" exact component={ListTransactions} />
        <Route path="/transaction/:transactionId" component={TransferDetail} />
        <Route path="/transfer" component={Transfer} />
      </Routes>
    </div>
  </Router>
);

export default App;
