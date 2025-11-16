import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavbarComp = () => (
  <BsNavbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-2">
    <Container>
      <BsNavbar.Brand as={Link} to="/"> 
        MACC {/* Add <img src="/logo.png" alt="MACC" height="40" className="me-2" /> later */}
      </BsNavbar.Brand>
      <BsNavbar.Toggle />
      <BsNavbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/team">Team</Nav.Link>
          <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#"><BsFacebook size={20} /></Nav.Link>
          <Nav.Link href="#"><BsInstagram size={20} /></Nav.Link>
          <Nav.Link href="#"><BsLinkedin size={20} /></Nav.Link>
          <Nav.Link href="#"><BsYoutube size={20} /></Nav.Link>
        </Nav>
        <Button variant="warning" className="ms-2" as={Link} to="/contact">Get a Quote</Button>
      </BsNavbar.Collapse>
    </Container>
  </BsNavbar>
);

export default NavbarComp;