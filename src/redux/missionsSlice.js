import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/';
const endPoint = 'missions';

let missionsFetched = false;

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get(`${url}${endPoint}`);
  const missions = await response.data;
  missionsFetched = true;
  return missions;
});

const initialState = {
  missionList: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missionList = state.missionList.map((mission) => {
        if (mission.mission_id === missionId) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missionList = action.payload;
    });
  },
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;

export const getMissionsIfNeeded = () => async (dispatch, getState) => {
  const { missionList } = getState().missions;

  if (!missionsFetched && missionList.length === 0) {
    dispatch(getMissions());
  }
};
