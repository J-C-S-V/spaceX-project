import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';

const SpaceRoutes = () => (
  <>
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  </>
);

export default SpaceRoutes;
