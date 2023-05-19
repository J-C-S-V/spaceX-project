import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  missionList: [],
};

export const missionSlice = createSlice({
  name: 'missions',
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

    missionJoinedByUser: (state, action) => {
      const missionId = action.payload;
      const mission = state.missionList.map((mission) => mission.mission_id === missionId);
      if (mission) {
        return {
          ...initialState,
          reserved: !mission.reserved,
        };
      }
      return mission;
    },
  },
});

export const {
  startLoading, setMissions, endLoading, reserveMission, missionJoinedByUser,
} = missionSlice.actions;

export default missionSlice.reducer;
