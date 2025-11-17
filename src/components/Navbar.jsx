import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navbarHeight = '80px'; 

const NavbarComp = () => {
  return (
   <motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}
  style={{ 
    position: 'fixed', 
    top: 0, 
    width: '100%', 
    zIndex: 1000,
    height: navbarHeight 
  }}
>
      <BsNavbar expand="lg" className="py-3 glass " style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000  }}>
        <Container>
          <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/logo.png" alt="MACC" height="50" className="me-2" />
            <span className="text-white fw-bold">MACC</span>
          </BsNavbar.Brand>
          <BsNavbar.Toggle aria-controls="navbar" />
          <BsNavbar.Collapse id="navbar">
            <Nav className="mx-auto">
              {['About Us', 'Services', 'Portfolio', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <Nav.Link
                  key={item}
                  as={Link}
                  to={item === 'About Us' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white mx-2 px-3 rounded-pill"
                  style={{ transition: '0.3s' }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#" className="text-white"><BsFacebook size={20} /></Nav.Link>
              <Nav.Link href="#" className="text-white"><BsInstagram size={20} /></Nav.Link>
              <Nav.Link href="#" className="text-white"><BsLinkedin size={20} /></Nav.Link>
              <Nav.Link href="#" className="text-white"><BsYoutube size={20} /></Nav.Link>
              <Button variant="warning" className="ms-3 rounded-pill px-4">Get Quote</Button>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </motion.div>
  );
};

export default NavbarComp;