import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Rockets from '../components/Rockets';
import store from '../redux/store';

describe('Testing component rendering properly', () => {
  test('renders Rockets component', () => {
    const missions = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(missions).toMatchSnapshot();
  });
});

// import { render, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Missions from '../components/Missions';
// import { joinMission, getMissions } from '../redux/missionsSlice';

// const mockStore = configureStore([]);
// describe('Missions Component', () => {
//   let store;
//   beforeEach(() => {
//     store = mockStore({
//       mission: {
//         missionList: [
//           {
//             mission_id: 1,
//             mission_name: 'Mission 1',
//             description: 'Mission 1 description',
//             reserved: false,
//           },
//           {
//             mission_id: 2,
//             mission_name: 'Mission 2',
//             description: 'Mission 2 description',
//             reserved: true,
//           },
//         ],
//       },
//     });
//     store.dispatch = jest.fn();
//     store.dispatch(getMissions());
//   });
//   it('renders mission table correctly', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Missions />
//       </Provider>,
//     );
//     // Assertions for table headers
//     expect(getByText('Mission')).toBeInTheDocument();
//     expect(getByText('Description')).toBeInTheDocument();
//     expect(getByText('Status')).toBeInTheDocument();
//     // Assertions for mission names and descriptions
//     expect(getByText('Mission 1')).toBeInTheDocument();
//     expect(getByText('Mission 1 description')).toBeInTheDocument();
//     expect(getByText('Mission 2')).toBeInTheDocument();
//     expect(getByText('Mission 2 description')).toBeInTheDocument();
//     // Assertions for badge texts
//     expect(getByText('NOT A MEMBER')).toBeInTheDocument();
//     expect(getByText('Active member')).toBeInTheDocument();
//     // Assertions for join/leave mission buttons
//     expect(getByText('Join Mission')).toBeInTheDocument();
//     expect(getByText('Leave Mission')).toBeInTheDocument();
//   });
//   it('dispatches joinMission action on button click', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Missions />
//       </Provider>,
//     );
//     // Find the join/leave mission button for Mission 1
//     const joinButton = getByText('Join Mission');
//     fireEvent.click(joinButton);
//     // Ensure that joinMission action is dispatched with the correct mission ID
//     expect(store.dispatch).toHaveBeenCalledWith(joinMission(1));
//   });
// });
