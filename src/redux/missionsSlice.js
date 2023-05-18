import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  missionList: [],
  joinedMission: false,
  ArrayOfMissionsJoined: [],
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

    // reserveMission: (state, action) => {
    //   const missionId = action.payload;
    //   const mission = state.missionList.find(
    //     (mission) => mission.mission_id === missionId,
    //   );
    //   if (mission) {
    //     mission.joinedMission = !mission.joinedMission;
    //   }
    // },
    reserveMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missionList.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.joinedMission = !mission.joinedMission;
      }
    },

    missionJoinedByUser: (state, action) => {
      const missionId = action.payload;
  const mission = state.missionList.find((mission) => mission.mission_id === missionId);
  if (mission) {
    mission.joinedMission = !mission.joinedMission;
    if (mission.joinedMission) {
      state.ArrayOfMissionsJoined.push(mission.mission_id);
    } else {
      state.ArrayOfMissionsJoined = state.ArrayOfMissionsJoined.filter((id) => id !== mission.mission_id);
    }
  }
    },
  },
});

export const {
  startLoading, setMissions, endLoading, reserveMission, missionJoinedByUser
} = missionSlice.actions;

export default missionSlice.reducer;
