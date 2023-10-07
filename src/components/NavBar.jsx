import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return ( 
    <Navbar expand="lg" className="bg-body-tertiary py-4">
      <Container>
        <Navbar.Brand as={Link} to="/">React Authentication</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="login">
          <Button variant='outline-primary'>
            Login
          </Button>
        </Link>
      </Container>
    </Navbar>
    );
}
 


export default NavBar;