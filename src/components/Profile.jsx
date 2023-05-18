import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/profile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import {
  startLoading,
  endLoading,
  setMissions,
} from '../redux/missionsSlice';
import { getMissionsApi } from '../redux/missionApi';

const Profile = () => {
  const { missionList, joinedIds } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  const fetchMissions = async () => {
    dispatch(startLoading());
    const missions = await getMissionsApi();
    dispatch(endLoading());
    dispatch(setMissions(missions));
  };

  useEffect(() => {
    fetchMissions();
  }, [dispatch]);

  const filteredMissions = missionList.filter((mission) => joinedIds.includes(mission.mission_id));

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={6}>
            <h2>Rockets</h2>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>1</td>
                  <td colSpan={2}>Larry the Bird</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td colSpan={2}>Larry the Bird</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={6}>
            <h2>Missions</h2>
            {filteredMissions.length ? (
              <Table striped bordered hover>
                <tbody>
                  {filteredMissions.map((mission, index) => (
                    <tr key={mission.mission_id}>
                      <td>{index + 1}</td>
                      <td colSpan={2}>{mission.mission_name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Alert variant="info">
                <Alert.Heading>No missions selected</Alert.Heading>
                <p>Please select a mission before starting your journey</p>
                <hr />
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
