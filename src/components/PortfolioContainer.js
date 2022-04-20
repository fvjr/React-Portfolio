import React, { useState } from "react";
import Navigation from "./Navigation";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";

// export default function PortfolioContainer() {
//   return <Navigation />;
// }

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
