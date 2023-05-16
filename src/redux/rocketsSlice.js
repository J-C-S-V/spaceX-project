import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/';
const endPoint = 'rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(`${url}${endPoint}`);
  const rockets = await response.json();
  // console.log('data', rockets[0]);
  return rockets;
});

const initialState = {
  // id: '',
  // name: '',
  // type: '',
  // flickrImages: [],
  rocketList: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      // state.id = action.payload[0].id;
      // state.name = action.payload[0].rocket_name;
      // state.type = action.payload[0].description;
      // state.flickrImages = action.payload[0].flickr_images;
      // state.id = action.payload.id;
      // state.name = action.payload.rocket_name;
      // state.type = action.payload.description;
      // state.flickrImages = action.payload.flickr_images;
      state.rocketList = action.payload;
    });
  },
});

export default rocketSlice.reducer;
