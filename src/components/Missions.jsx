import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../styles/missions.css';
import AOS from 'aos';
import {joinMission, getDataFecthed} from '../redux/missionsSlice'
import 'aos/dist/aos.css';

const Missions = () => {
  const { missionList } = useSelector((store) => store.mission); 
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getDataFecthed()) 
 }, [dispatch])
 

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleReservation = (missionId) => {
    console.log(missionId)
    dispatch(joinMission(missionId));
  };

  if (missionList) {
    return (
      <div className="custom-container">
        {missionList.map((mission) => (
          <div data-aos="fade-up" key={mission.mission_id}>
            <Row className="mission-list">
              <Col xs={2} className="custom-col mask d-flex  align-items-center">
                <h4 className="h4-name">{mission.mission_name}</h4>
              </Col>
              <Col xs={8} className="custom-col">
                <p className="p-name">{mission.description}</p>
              </Col>
              <Col className=" d-flex align-items-center ">
                <Button
                  variant={mission.reserved ? 'warning' : 'outline-primary'}
                  size="sm"
                  onClick={() => handleReservation(mission.mission_id)}
                  style={{ marginRight: '10px', padding: '10px' }}
                >
                  {mission.reserved ? 'Cancel Mission' : 'Join Mission'}
                </Button>
                <Badge
                  bg={mission.reserved ? 'success' : 'secondary'}
                  style={{ fontSize: '13px', padding: '13px' }}
                >
                  {mission.reserved ? 'Joined' : 'Not Joined'}
                </Badge>
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
