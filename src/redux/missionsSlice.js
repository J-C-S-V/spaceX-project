import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/missions';

export const getDataFecthed = createAsyncThunk('missions/getDataFecthed', async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

const initialState = {
  isLoading: false,
  missionList: [],
};

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missionList = state.missionList.map((mission) =>
        mission.mission_id === missionId
          ? { ...mission, reserved: !mission.reserved }
          : mission
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataFecthed.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missionList = action.payload;
    });
  },
});

export const {
 
  joinMission,

} = missionSlice.actions;

export default missionSlice.reducer;