import React from 'react';
import Home from './views/pages/Home';
import Story from './views/pages/Story';
import Contact from './views/pages/Contact';
import Service from './views/pages/Service';
import { Routes, Route } from 'react-router';

import NavBar from './views/components/NavBar';


const App = () => {
  return (
    <div>


      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/story" element={<Story />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>




    </div>
  );
}

export default App;
