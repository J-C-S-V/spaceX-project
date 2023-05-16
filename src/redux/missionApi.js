/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const MissionsApi = axios.create({
  baseUrl:
    'https://api.spacexdata.com/v3/missions',
});

export const getMissionsApi = async () => {
  try {
    const response = await axios.get(
      'https://api.spacexdata.com/v3/missions',
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export default MissionsApi;
