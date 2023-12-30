import React from "react";
import "./Content.css";
import Select from "react-select";

const department = [
  { value: "Select All", label: "Select All" },
  { value: "Strategy & Controls", label: "Strategy & Controls" },
  { value: "Finance & Accounts", label: "Finance & Accounts" },
  { value: "Purchase", label: "Purchase" },
  { value: "Quality Assurance", label: "Quality Assurance" },
  { value: "Production", label: "Production" },
  { value: "Marketing", label: "Marketing" },
  { value: "PPC", label: "PPC" },
  { value: "HR & Administration", label: "HR & Administration" },
  { value: "R & D", label: "R & D" },
  { value: "Electronics", label: "Electronics" },
  { value: "Aftermarket", label: "Aftermarket" },
  { value: "Maintenance", label: "Maintenance" },
  { value: "Stores", label: "Stores" },
];

export const location = [
  { value: "Select All", label: "Select All" },
  { value: "Bhiwadi-Rajasthan", label: "Bhiwadi-Rajasthan" },
  {
    value: "Bommasandra - Bengaluru - Karnataka",
    label: "Bommasandra - Bengaluru - Karnataka",
  },
  {
    value: "Chakan - Pune - Maharashtra",
    label: "Chakan - Pune - Maharashtra",
  },
  { value: "Chennai - Tamil Nadu", label: "Chennai - Tamil Nadu" },
  { value: "Doddaballapur - Bengaluru", label: "Doddaballapur - Bengaluru" },
  { value: "Haridwar - Uttarakhand", label: "Haridwar - Uttarakhand" },
  { value: "Maluru - Bengaluru", label: "Maluru - Bengaluru" },
  { value: "Manesar - Haryana", label: "Manesar - Haryana" },
  { value: "Noida - Uttar Pradesh", label: "Noida - Uttar Pradesh" },
  { value: "Pantnagar - Uttarakhand", label: "Pantnagar - Uttarakhand" },
  { value: "Sanand - Gujarat", label: "Sanand - Gujarat" },
  { value: "Vapi - Gujarat", label: "Vapi - Gujarat" },
  { value: "Other", label: "Other" },
];

const Search = () => (
  <div>
    <div className="search-container">
      <div className="input-container">
        <div className="entry-box">
          <form className="select-data ">
            <Select
              options={department}
              // onChange={handleChange}
              // value={value}
              // isMulti
            />
          </form>
          <form className="select-data ">
            <Select
              options={location}
              // onChange={handleChange}
              // value={value}
              // isMulti
            />
          </form>
        </div>
        <div className="btn">
          <button className="search-btn">Find a job</button>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
