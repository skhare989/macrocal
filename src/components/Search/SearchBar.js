import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSearchAutoComplete,
  fetchFoodItemDetails,
  updateSuggestionAfterClick,
} from "../../reducers/userInfoUpdate";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.userInfoUpdate;
  });

  const [searchInput, setSearchInput] = useState("");

  const selectFoodItem = (e) => {
    setSearchInput(e.target.innerHTML);
    dispatch(fetchFoodItemDetails(e.target.innerHTML));
    dispatch(updateSuggestionAfterClick());
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
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          handleChange(e);
        }}
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
