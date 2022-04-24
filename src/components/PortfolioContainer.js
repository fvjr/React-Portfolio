import React, { useState } from "react";
import Navigation from "./Navigation";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Footer from "./Footer";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// export default function PortfolioContainer() {
//   return <Navigation />;
// }

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
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
      <Footer></Footer>
    </div>
  );
}
