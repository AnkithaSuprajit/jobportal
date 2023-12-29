import React from "react";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div>
      <div className="search-container">
        <div className="input-container">
          <div className="entry-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="serach-icon" />

            <input
              type="text"
              placeholder="Search job title , company, skills"
              className="input-box"
            />
          </div>
          <div className="btn">
            <button className="search-btn">Find a job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
