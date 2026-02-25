import React from 'react';

function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by Name"
      className="border p-2 rounded"
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar;