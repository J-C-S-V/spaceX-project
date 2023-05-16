import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  missionList: [],
  joinedMission: false,
};

export const missionSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },

    endLoading: (state) => {
      state.isLoading = false;
    },

    setMissions: (state, action) => {
      state.missionList = action.payload;
    },
    
    reserveMission: (state) => {
      state.joinedMission = true
    }

  },
});

export const {
  startLoading, setMissions, endLoading,
} = missionSlice.actions;

export default missionSlice.reducer;
