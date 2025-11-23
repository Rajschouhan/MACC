// src/components/NavbarComp.jsx → FINAL SINGLE-PAGE SCROLL VERSION
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const navbarHeight = '80px';

const Navbar = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90; // Navbar height offset
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, height: navbarHeight }}
    >
      <BsNavbar expand="lg" className="py-3 glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Container>
          <BsNavbar.Brand as={HashLink} smooth to="/#home" className="d-flex align-items-center">
            <img src="logo.png" alt="MACC" height="50" className="me-2" />
            <span className="text-white fw-bold">MACC</span>
          </BsNavbar.Brand>

          <BsNavbar.Toggle aria-controls="navbar" />

          <BsNavbar.Collapse id="navbar">
            <Nav className="mx-auto">
              {[
                { text: 'Home', id: 'home' },
                { text: 'Services', id: 'services' },
                { text: 'Portfolio', id: 'portfolio' },
                { text: 'Testimonials', id: 'testimonials' },
                { text: 'Contact', id: 'contact' }
              ].map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Nav.Link
                    as={HashLink}
                    smooth
                    to={`/#${item.id}`}
                    scroll={scrollWithOffset}
                    className="text-white mx-2 px-3 rounded-pill"
                    style={{ transition: '0.3s' }}
                  >
                    {item.text}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>

            <Nav className="d-flex align-items-center">
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white"><BsFacebook size={20} /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/maa_ashapura_construction_co_?igsh=MWZvdmk2eWhlazVqcA==" target="_blank" className="text-white"><BsInstagram size={20} /></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/ravindra-singh-chouhan-7b3a6a1ab" target="_blank" className="text-white"><BsLinkedin size={20} /></Nav.Link>
              <Nav.Link href="https://youtube.com" target="_blank" className="text-white"><BsYoutube size={20} /></Nav.Link>
              <Button 
                variant="warning" 
                className="ms-3 rounded-pill px-4"
                as={HashLink}
                smooth
                to="/#contact"
                scroll={scrollWithOffset}
              >
                Get Quote
              </Button>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </motion.div>
  );
};

export default Navbar;