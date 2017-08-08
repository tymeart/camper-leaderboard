import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
import SortButton from './SortButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  updateUsers(option) {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${option}`)
      .then(res => {
        this.setState({users: res.data});
      });
  }

  render() {
    return (
      <div>
        <h1>FCC Camper Leaderboard</h1>
        <SortButton onClick={this.updateUsers.bind(this, 'recent')} option={'Recently Earned Points'}/>
        <SortButton onClick={this.updateUsers.bind(this, 'alltime')} option={'Total Points'}/>
        <Table users={this.state.users}/>
      </div>
    );
  }
}

export default App;
