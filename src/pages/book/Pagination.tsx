import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePrevious, handleNext }) => {
  return (
    <div className="flex justify-between items-center mt-6 p-10">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Previous
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
