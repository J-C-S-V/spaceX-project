import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/';
const endPoint = 'rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(`${url}${endPoint}`);
  const rockets = await response.json();
  console.log(rockets);
  return rockets;
});

const initialState = {
  id: '',
  name: '',
  type: '',
  flickrImages: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.id = action.payload[0].id;
      state.name = action.payload[0].rocket_name;
      state.type = action.payload[0].rocket_type;
      state.flickrImages = action.payload[0].flickr_images;
    });
  },
});

export default rocketSlice.reducer;
