import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>
          Click to filter by name or use the search box to narrow your results.
        </p>
      </div>
    );
  }
}

export default Header;
