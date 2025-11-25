import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsCheckCircle, BsClock, BsLightbulb, BsPeople } from "react-icons/bs";

const features = [
  { icon: BsCheckCircle, title: "Unmatched Quality", text: "Craftsmanship guaranteed.", color: "text-success" },
  { icon: BsClock, title: "Timely Delivery", text: "Projects always on schedule.", color: "text-info" },
  { icon: BsLightbulb, title: "Innovative Designs", text: "Creative modern solutions.", color: "text-warning" },
  { icon: BsPeople, title: "Focused Service", text: "Client satisfaction always.", color: "text-primary" }
];

const Hero1 = () => (
  <section id="home"
    className="py-5 position-relative"
   style={{
  minHeight: "70vh",
  background: "linear-gradient(135deg, #0a0a1f, #001233)",
  backgroundImage: "url('/bgImg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundBlendMode: "overlay",
  paddingTop: "var(--navbar-height, 100px)",
}}
  >
    <Container className="pt-4 ">
      <Row className="align-items-center mt-5 gy-5 ">

        {/* LEFT CONTENT */}
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="fw-bold text-white mb-3" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
              Welcome to <span style={{ color: "#f9c513" }}>Maa Ashapura</span> Constructions
            </h1>

            <p className="text-white mb-4" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
              One of the fastest growing construction companies in India, delivering
              trust, quality, and excellence in every infrastructure project.
            </p>

            <Button
              style={{
                backgroundColor: "#f9c513",
                border: "none",
                fontWeight: 600,
                color: "#000",
                padding: "12px 28px",
                borderRadius: "10px",
                fontSize: "18px",
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </Col>

        {/* RIGHT IMAGE */}
        <Col md={6} className="pt-md-0 pt-3">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-4 overflow-hidden shadow-lg"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop"
              alt="Maa Ashapura Team"
              className="img-fluid"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Col>

      </Row>

      {/* FEATURES GRID */}
      <Row className="text-center mt-5 gy-4">
        {features.map((item, idx) => (
          <Col md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 , border: "1px solid #24231fff" }}
              
              transition={{ duration: 0.2 }}
              className="p-4 rounded-4 bg-white  shadow-sm border h-100"
            >
              <item.icon size={40} className={`${item.color} mb-2`} />
              <h6 className="fw-bold">{item.title}</h6>
              <p className="text-muted small mb-0">{item.text}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Hero1;
