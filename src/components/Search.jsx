"use client";
import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      try {
        const response = await fetch(`/api/search?query=${value}`);
        const data = await response.json();

        if (response.ok) {
          setResult(data);
          setError(null);
        } else {
          setError(data.error);
          setResult(null);
        }
      } catch (error) {
        setError('An error occurred while fetching data');
        setResult(null);
      }
    } else {
      setResult(null);
      setError(null);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded text-black"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {result && (
        <div className="mt-4 p-4 border border-gray-200 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-2">{result.title}</h2>
          <p className="text-sm mb-1"><strong>Company:</strong> {result.company}</p>
          <p className="text-sm mb-1"><strong>Location:</strong> {result.location}</p>
          <p className="text-sm"><strong>Salary:</strong> {result.salary}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
