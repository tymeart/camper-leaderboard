import React, { Component } from 'react';
import Table from './Table';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>FCC Camper Leaderboard</h1>
        <Table username={'Brad'} recentPoints={20} allPoints={130}/>
      </div>
    );
  }
}

export default App;
