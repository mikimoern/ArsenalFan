import React from "react";
import "./pagination.css";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage); 

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Back
      </button>
      <ul className="pagination__list">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li
              key={page}
              className={`pagination__item ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          )
        )}
      </ul>
      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
