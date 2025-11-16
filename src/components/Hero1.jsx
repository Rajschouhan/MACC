import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsCheckCircle, BsClock, BsLightbulb, BsPeople } from 'react-icons/bs';

const Hero1 = () => (
  <section className="py-5 bg-zinc-800">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <motion.img 
            src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="MACC Team" 
            className="img-fluid rounded" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          />
        </Col>
        <Col md={6}>
          <motion.h1 
            className="display-4 fw-bold text-primary mb-3" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
          >
            Building Your Vision, Crafting Your Future
          </motion.h1>
          <p className="lead mb-4">
            At MACC, we turn your ideas into reality with expert craftsmanship and innovative solutions. From concept to completion, we're dedicated to creating spaces that inspire and stand the test of time. Let's build a future you can be proud of. Based in Indore, M.P., with 25+ years serving premium residential & commercial dreams.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <div className="d-flex align-items-center"><BsCheckCircle className="text-success me-2" />Expert Craftsmanship</div>
            <div className="d-flex align-items-center"><BsClock className="text-info me-2" />On-Time, Within Budget</div>
            <div className="d-flex align-items-center"><BsLightbulb className="text-warning me-2" />Innovative Solutions</div>
            <div className="d-flex align-items-center"><BsPeople className="text-primary me-2" />Client-Centered Approach</div>
          </div>
          <Button variant="primary" size="lg">Learn More</Button>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col md={3}><BsCheckCircle size={40} className="text-success mb-2" /><h6>Unmatched Quality</h6><p>Craftsmanship guaranteed.</p></Col>
        <Col md={3}><BsClock size={40} className="text-info mb-2" /><h6>Timely Delivery</h6><p>Projects on schedule.</p></Col>
        <Col md={3}><BsLightbulb size={40} className="text-warning mb-2" /><h6>Innovative Designs</h6><p>Creative modern solutions.</p></Col>
        <Col md={3}><BsPeople size={40} className="text-primary mb-2" /><h6>Focused Service</h6><p>Client satisfaction always.</p></Col>
      </Row>
    </Container>
  </section>
);

export default Hero1;