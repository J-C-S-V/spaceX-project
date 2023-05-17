import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Profile = () => {
  const joinedMissions = JSON.parse(localStorage.getItem('joinedMissions')) || [];
  const { missionList } = useSelector((store) => store.mission);
  const filteredMissions = missionList.filter((mis) => joinedMissions.includes(mis.mission_id));

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
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Profile;
