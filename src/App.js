import React, { Component } from 'react';
import Table from './Table';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => {
        this.setState({users: res.data});
      });
  }

  render() {
    return (
      <div>
        <h1>FCC Camper Leaderboard</h1>
        <Table users={this.state.users}/>
      </div>
    );
  }
}

export default App;
