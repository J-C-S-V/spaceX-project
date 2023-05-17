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

    reserveMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missionList.find(
        (mission) => mission.mission_id === missionId,
      );
      if (mission) {
        mission.joinedMission = !mission.joinedMission;
      }
    },
  },
});

export const {
  startLoading, setMissions, endLoading, reserveMission,
} = missionSlice.actions;

export default missionSlice.reducer;
