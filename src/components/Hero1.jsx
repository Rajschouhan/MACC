import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsCheckCircle, BsClock, BsLightbulb, BsPeople } from "react-icons/bs";

const Hero1 = () => (
  <section
    className="py-5  position-relative"
   style={{
    minHeight: "90vh",
    background: "linear-gradient(to right, #1a1a1a, #111)",
    backgroundImage: "url('/bgImg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: '100px', // THIS FIXES IT
    marginTop: '0'
  }}
  >
    <Container className="pt-5 ">
      <Row className="align-items-center pt-32 gy-4">
        {/* LEFT SIDE */}
        <Col md={6}>
          <motion.h1
            className="fw-bold mb-3 text-white"
            style={{ fontSize: "3rem", lineHeight: "1.2" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to{" "}
            <span style={{ color: "#f9c513" }}>Maa Ashapura</span> Constructions
          </motion.h1>

          <motion.p
            className="text-white mb-4"
            style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            One of the fast growing construction companies in India, delivering
            trust, quality & satisfaction in every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              style={{
                backgroundColor: "#f9c513",
                border: "none",
                fontWeight: 600,
                color: "#000",
                padding: "10px 25px",
                borderRadius: "8px",
                fontSize: "18px",
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </Col>

        {/* RIGHT SIDE HERO IMAGE + BADGES */}
        <Col md={6} className="pt-5 position-relative ">
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
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Overlay Text + Badges on Image */}
          {/* <div
            className="position-absolute bottom-0 start-0 w-100 p-3"
            style={{
              background: "rgba(0,0,0,0.45)",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <h5 className="text-white mb-2">Building Your Vision</h5>
            <p className="text-white small mb-2">
              Crafting Your Future with expertise & innovation.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <span className="d-flex align-items-center bg-white px-2 py-1 rounded-pill shadow-sm">
                <BsCheckCircle className="text-success me-1" /> Expert Craftsmanship
              </span>
              <span className="d-flex align-items-center bg-white px-2 py-1 rounded-pill shadow-sm">
                <BsClock className="text-info me-1" /> On-Time Delivery
              </span>
              <span className="d-flex align-items-center bg-white px-2 py-1 rounded-pill shadow-sm">
                <BsLightbulb className="text-warning me-1" /> Innovative Solutions
              </span>
              <span className="d-flex align-items-center bg-white px-2 py-1 rounded-pill shadow-sm">
                <BsPeople className="text-primary me-1" /> Client First Approach
              </span>
            </div>
          </div> */}
        </Col>
      </Row>
    </Container>

    {/* OPTIONAL BOTTOM FEATURES */}
    <Container className="mt-5">
      <Row className="text-center gy-4">
        {[
          {
            icon: BsCheckCircle,
            title: "Unmatched Quality",
            text: "Craftsmanship guaranteed.",
            color: "text-success",
          },
          {
            icon: BsClock,
            title: "Timely Delivery",
            text: "Projects always on schedule.",
            color: "text-info",
          },
          {
            icon: BsLightbulb,
            title: "Innovative Designs",
            text: "Creative modern solutions.",
            color: "text-warning",
          },
          {
            icon: BsPeople,
            title: "Focused Service",
            text: "Client satisfaction always.",
            color: "text-primary",
          },
        ].map((item, idx) => (
          <Col md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-4 rounded-4 bg-white shadow-sm border h-100"
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
