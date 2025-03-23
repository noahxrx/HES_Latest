import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import MissionSection from './components/MissionSection/MissionSection';
import TeamSection from './components/TeamSection/TeamSection';
import FAQSection from './components/FAQSection/FAQSection';
import SearchEnginePage from './components/SearchEnginePage/SearchEnginePage';

const HomePage = () => (
  <div>
    <MainSection />
    <ServiceSection />
    <MissionSection />
    <TeamSection />
    <FAQSection />
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/healthcare-search" element={<SearchEnginePage />} />
      </Routes>
    </Router>
  );
};

export default App;