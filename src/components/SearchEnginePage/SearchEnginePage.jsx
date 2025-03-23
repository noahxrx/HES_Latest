import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FaSearch } from 'react-icons/fa';
import './SearchEnginePageStyles.css';

const SearchEnginePage = () => {
  return (
    <div className="search-engine-page">
      <Navbar />
      <section className="search-page">
        <h1 className="page-title">Search for Local Healthcare Providers</h1>
        <div className="search-buttons">
          <button>Search by Disease Category</button>
          <button>Search by Disease Name</button>
        </div>
        <div className="search-tab">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="what is bothering you?" />
          </div>
          <p className="search-description">
            type in your symptoms in the search bar and it will give you options of hospitals you can go to according to the symptoms you're having
          </p>
        </div>
        <div className="search-results">
          {/* Placeholder for search results */}
        </div>
      </section>
      <div className="hospital-link">
        <a href="/hospital-list" target="_blank" rel="noopener noreferrer">
          See all hospital lists
        </a>
      </div>
    </div>
  );
};

export default SearchEnginePage;