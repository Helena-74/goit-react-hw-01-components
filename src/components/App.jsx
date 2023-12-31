import React from 'react';
import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';
import TransactionHistory from './Transactions/TransactionHistory.jsx';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      // justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }} >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
