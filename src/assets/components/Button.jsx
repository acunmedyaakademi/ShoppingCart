// Buttons.jsx
import React from "react";

const Buttons = ({ filters, selectedFilter, handleFilterClick }) => {
  const filterItems = filters.map((filter) => (
    <li key={filter.id}>
      <button
        className={filter.title === selectedFilter ? "active" : ""}
        onClick={() => handleFilterClick(filter.title)}
      >
        {filter.title}
      </button>
    </li>
  ));

  return <ul className="portfolio-control">{filterItems}</ul>;
};

export default Buttons;
