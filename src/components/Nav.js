import React from 'react';
import SearchBox from './SearchBox.js';

function Nav({ handleSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleSearch={handleSearch} />
      </div>
    </nav>
  );
}

export default Nav;
