import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionsSlice';
import rocketReducer from './rocketsSlice';

const store = configureStore({
  reducer: {

    missions: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
