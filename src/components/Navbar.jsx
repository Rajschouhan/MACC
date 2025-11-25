// src/components/NavbarComp.jsx → FINAL SINGLE-PAGE SCROLL VERSION
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';
import { color, motion } from 'framer-motion';

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

          <BsNavbar.Toggle aria-controls="navbar"  id='navicon'  />
<BsNavbar.Collapse id="navbar"  className="mobile-menu-custom">
  {/* MAIN LINKS */}
  <Nav className="mx-auto text-center mb-4 mb-lg-0">
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
        className="my-2 my-lg-0" // Add spacing on mobile
      >
        <Nav.Link
          as={HashLink}
          smooth
          to={`/#${item.id}`}
          scroll={scrollWithOffset}
          className="text-white mx-2 px-3 fw-medium"
          style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}
        >
          {item.text}
        </Nav.Link>
      </motion.div>
    ))}
  </Nav>

  {/* SOCIALS & BUTTON WRAPPER */}
  <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
    
    {/* Social Icons - Centered Row in Mobile */}
    <div className="d-flex gap-3 social-icons-mobile">
      <Nav.Link href="https://facebook.com" target="_blank" className="text-white p-0">
        <BsFacebook size={22} />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/maa_ashapura_construction_co_?igsh=MWZvdmk2eWhlazVqcA==" target="_blank" className="text-white p-0">
        <BsInstagram size={22} />
      </Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/ravindra-singh-chouhan-7b3a6a1ab" target="_blank" className="text-white p-0">
        <BsLinkedin size={22} />
      </Nav.Link>
      <Nav.Link href="https://youtube.com" target="_blank" className="text-white p-0">
        <BsYoutube size={22} />
      </Nav.Link>
    </div>

    {/* CTA Button */}
    <Button 
      variant="warning" 
      className="rounded-pill px-4  fw-bold mt-3 mt-lg-0"
      as={HashLink}
      smooth
      to="/#contact"
      scroll={scrollWithOffset}
      style={{ minWidth: '140px' }}
    >
      Get Quote
    </Button>
  </div>
</BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </motion.div>
  );
};

export default Navbar;