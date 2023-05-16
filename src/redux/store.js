import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionsSlice';

const store = configureStore({
  reducer: {

    mission: missionReducer,

  },
});

export default store;
