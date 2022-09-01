import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchAutoComplete } from "../../reducers/userInfoUpdate";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.userInfoUpdate;
  });

  const selectFoodItem = (e) => {
    console.log(e.target.innerHTML);
  };
  const debounce = (cb, delay = 1000) => {
    let timeout;
    return function (...args) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const handleChange = debounce((e) => {
    dispatch(fetchSearchAutoComplete(e.target.value));
  });
  const searchResultSuggestions = state.searchResultsSuggestions;
  return (
    <div className="dropdown">
      <input
        className="search-input"
        type="text"
        placeholder="Search Food Items"
        onChange={(e) => handleChange(e)}
      />

      <ul
        className={
          searchResultSuggestions.length === 0
            ? "dropdown-content dropdown-content-hidden"
            : "dropdown-content dropdown-content-visible"
        }>
        {searchResultSuggestions.map((e) => {
          return (
            <li className="li-style" key={e} onClick={(e) => selectFoodItem(e)}>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
