import React from 'react';
import '../styles/SearchBox.css';

function SearchBox(props) {
  return (
    <div className="searchbox box">
      <form className="form-inline ">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.handleSearch}
        />
      </form>
    </div>
  );
}

export default SearchBox;
