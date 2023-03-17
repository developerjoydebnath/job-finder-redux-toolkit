import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { search, sort } from '../features/filter/filterSlice';

const Header = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSorting = (sorting) => {
    dispatch(sort(sorting));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        submitInputValue();
      }
    };

    inputRef.current.addEventListener('keydown', handleKeyDown);

    return () => {
      inputRef.current.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const submitInputValue = () => {
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    dispatch(search(inputValue));
  };

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            ref={inputRef}
          />
        </div>
        <select
          onChange={(e) => handleSorting(e.target.value)}
          id="lws-sort"
          name="sort"
          autoComplete="sort"
          className="flex-1"
        >
          <option>Default</option>
          <option>Salary (Low to High)</option>
          <option>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
