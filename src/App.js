import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
import SortButton from './SortButton';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
      .then(res => {
        this.setState({users: res.data});
      });
  }

  updateUsers = (option) => {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${option}`)
      .then(res => {
        this.setState({users: res.data});
      });
  }

  render() {
    return (
      <div className="container">
        <h1>FCC Camper Leaderboard</h1>
        <div className="buttons">
          <SortButton onClick={this.updateUsers.bind(this, 'recent')} name={'Recently Earned Points'}/>
          <SortButton onClick={this.updateUsers.bind(this, 'alltime')} name={'Total Points'}/>
        </div>
        <Table users={this.state.users}/>
      </div>
    );
  }
}

export default App;
