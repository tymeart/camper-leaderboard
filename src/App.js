import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>FCC Camper Leaderboard</h1>
      <Board username={'Brad'} recentPoints={20} allPoints={130}/>
    );
  }
}

export default App;
