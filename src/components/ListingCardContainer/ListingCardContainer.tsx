import React, { useState } from "react";
import ListingCard from "../ListingCard/ListingCard";

interface ListingCardContainerProps {
  csvData: any[]; // An array of objects representing CSV rows
}

export default function ListingCardContainer(props: ListingCardContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust the number of items per page as needed

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the rows for the current page
  const currentRows = props.csvData.slice(startIndex, endIndex);
  console.log("currentRows", currentRows);

  // Function to handle page navigation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayCurrentRows = currentRows.map((rowData, index) => (
    <ListingCard key={index} csvRow={rowData} />
  ));

  return (
    <div>
      {displayCurrentRows}

      {/* Page navigation buttons */}
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}
        {endIndex < props.csvData.length && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
