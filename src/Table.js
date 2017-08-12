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
                  <td><a href={`https://www.freecodecamp.com/${user.username}`}>{user.username}</a></td>
                  <td className="recent">{user.recent}</td>
                  <td className="alltime">{user.alltime}</td>
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
