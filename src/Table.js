import React, { Component} from 'react';

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
          <tr>
            <td>{this.props.username}</td>
            <td>{this.props.recentPoints}</td>
            <td>{this.props.allPoints}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
