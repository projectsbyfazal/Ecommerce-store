"use client";
import React, { useState, useEffect } from "react";

const SearchFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  useEffect(() => {
    const handler = setTimeout(() => {
      setGlobalFilter(value || undefined);
    }, 300);

    return () => clearTimeout(handler);
  }, [value, setGlobalFilter]);

  return (
    <div className="d-flex justify-content-end">
      <div className="search-box me-xxl-2 my-xxl-0 d-inline-block w-100">
        <div className="position-relative">
          <label htmlFor="search-bar-0" className="search-label"> 
            <input
              onChange={e => setValue(e.target.value)}
              id="search-bar-0"
              type="text" 
              placeholder="Search ..." 
              value={value || ""}
            />
          </label>
          <i className="bx bx-search-alt search-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
