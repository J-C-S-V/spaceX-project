import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../styles/missions.css';
import AOS from 'aos';
import Table from 'react-bootstrap/Table';
import { joinMission, getDataFecthed } from '../redux/missionsSlice';
import 'aos/dist/aos.css';

const Missions = () => {
  const { missionList } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFecthed());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleReservation = (missionId) => {
    dispatch(joinMission(missionId));
  };

  if (missionList) {
    return (
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {missionList.map((mission) => (
              <tr key={mission.mission_id}>
                <td><strong>{mission.mission_name}</strong></td>
                <td>{mission.description}</td>
                <td className="align-middle">
                  <Badge
                    bg={mission.reserved ? 'info' : 'secondary'}
                  >
                    {mission.reserved ? 'Active member' : 'NOT A MEMBER'}
                  </Badge>
                </td>
                <td className="align-middle">
                  <Button
                    className="m-3 join-button"
                    variant={mission.reserved ? 'outline-danger' : 'outline-secondary'}
                    size="sm"
                    onClick={() => handleReservation(mission.mission_id)}

                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  return null;
};

export default Missions;
