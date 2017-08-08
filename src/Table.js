import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Points in the Past 30 Days</th>
            <th>Total Points</th>
          </tr>
        </thead>

        <tbody>
            {this.props.users.map(user => {
              return (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.recent}</td>
                  <td>{user.alltime}</td>
                </tr>
                );
              })
            }
        </tbody>
      </table>
    );
  }
}

export default Table;
