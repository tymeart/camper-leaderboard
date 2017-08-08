import React, { Component } from 'react';

class SortButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Sort by {this.props.name}</button>
    );
  }
}

export default SortButton;
