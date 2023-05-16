import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/missions.css';
import {
  startLoading, endLoading, setMissions, reserveMission,
} from '../redux/missionsSlice';
import { getMissionsApi } from '../redux/missionApi';

const Missions = () => {
  const { missionList } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  const fetchMissions = async () => {
    dispatch(startLoading());
    const missions = await getMissionsApi();
    dispatch(endLoading());
    dispatch(setMissions(missions));
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  const handleReservation = (missionId) => {
    console.log('click');
    dispatch(reserveMission(missionId));
    console.log(missionId);

  };

  if (missionList) {
    return (
      <div className="custom-container">
        {missionList.map((mission) => (
          <div key={mission.mission_id}>
            <Row className="mission-list">
              <Col xs={2} className="custom-col d-flex  align-items-center">
                <p>
                  {mission.mission_name}
                </p>
              </Col>
              <Col xs={8} className="custom-col">
                <p>
                  {mission.description}
                </p>
              </Col>

              <Col className=" d-flex align-items-center ">
                <Button
                  variant={mission.joinedMission ? 'warning' : 'outline-primary'}
                  size="sm"
                  onClick={() => handleReservation(mission.mission_id)}
                >
                  {mission.joinedMission
                    ? 'Cancel Reservation'
                    : 'Make your reservation'}
                </Button>
                <Button variant="success">
                  reserved

                </Button>

              </Col>

            </Row>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Missions;
