import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/';
const endPoint = 'rockets';

let rocketsFetched = false;

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(`${url}${endPoint}`);
  const rockets = await response.json();
  rocketsFetched = true;
  return rockets;
});

const initialState = {
  rocketList: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reservation: (state, action) => {
      const rocketId = action.payload;
      state.rocketList = state.rocketList.map((rocket) => {
        if (rocket.id === rocketId) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.rocketList = action.payload;
    });
  },
});

export const { reservation } = rocketSlice.actions;

export default rocketSlice.reducer;

export const getRocketsIfNeeded = () => async (dispatch, getState) => {
  const { rocketList } = getState().rockets;

  if (!rocketsFetched && rocketList.length === 0) {
    dispatch(getRockets());
  }
};
