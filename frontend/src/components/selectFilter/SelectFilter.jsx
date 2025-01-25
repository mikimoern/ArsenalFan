import React from "react";
import "./SelectFilter.css"; 

const SelectFilter = ({ categories, onFilterChange }) => {
  const handleChange = (event) => {
    const category = event.target.value;
    onFilterChange(category); // We pass the selected category to the parent component
  };

  return (
    <div className="select-filter">
      <label htmlFor="category-select">Filter by category:</label>
      <select id="category-select" onChange={handleChange}>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
