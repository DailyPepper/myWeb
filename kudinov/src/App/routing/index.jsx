import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../page/About';
import Contacts from '../../page/Contacts';
import Main from '../../page/Main';
import Portfolio from '../../page/Portfolio';

const MainRouter = () => {
  return ( 
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="main" element={<Main />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default MainRouter;
