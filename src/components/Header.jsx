import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import log from '../assets/logo.png';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex">
        <Nav.Link className="pr-2">
          <img src={log} width="100px" alt="logo" />
        </Nav.Link>
        <Navbar.Brand className="justify-self-start" href="#home">Space Traveler&apos;s Hub</Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1">
          <Nav.Link href="#home">Rockets</Nav.Link>
          <Nav.Link href="#link">Missions</Nav.Link>
          <Nav.Link href="#link">My profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
