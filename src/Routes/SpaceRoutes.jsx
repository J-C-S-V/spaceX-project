import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';

const SpaceRoutes = () => (
  <>
    <div className="container">
      <Header />
      <Routes>
        <Route path="rockets" element={<Rockets />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Missions" element={<Missions />} />
      </Routes>
    </div>
  </>
);

export default SpaceRoutes;
