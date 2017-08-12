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
      })
      .then(() => this.showSortedColumn('recent'));
  }

  showSortedColumn = (selectedSortOption) => {
    var recentPoints = document.getElementsByClassName('recent');
    var alltimePoints = document.getElementsByClassName('alltime');
    if (selectedSortOption === 'recent') {
      for (let i = 0; i < 100; i++) {
        alltimePoints[i].classList.remove('sorted');
        recentPoints[i].classList.add('sorted');
      }
    } else {
      for (let i = 0; i < 100; i++) {
        recentPoints[i].classList.remove('sorted');
        alltimePoints[i].classList.add('sorted');
      }
    }
  }

  updateUsers = (option) => {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${option}`)
      .then(res => {
        this.setState({users: res.data});
      })
      .then(() => this.showSortedColumn(option));
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
