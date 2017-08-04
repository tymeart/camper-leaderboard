import React, { Component} from 'react';

class Board extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              Username
            </th>
            <th>
              Points in the Past 30 Days
            </th>
            <th>
              All Time Points
            </th>
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

export default Board;
