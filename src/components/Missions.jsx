import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/missions.css';
import { startLoading, endLoading, setMissions } from '../redux/missionsSlice';
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

  if (missionList) {
    return (
      <Container className="custom-container">
        {missionList.map((mission) => (
          <div key={mission.mission_id}>
            <Row>
              <Col xs={2} className="custom-col">
                {mission.mission_name}
              </Col>
              <Col className="custom-col">
                {mission.description}
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Button variant="outline-primary" size="sm">Make your reservation</Button>
              </Col>
              <Col xs={2}>
                <Button variant="success">
                  reserved
                  <span className="visually-hidden">unread messages</span>
                </Button>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    );
  }

  return null;
};

export default Missions;
