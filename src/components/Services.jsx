// src/components/Services.jsx
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const services = [
  { icon: "/services/Consultancy.png", title: "Construction Consultancy", desc: "Expert guidance from concept to completion" },
  { icon: "/services/Architecture.png", title: "Architectural Design", desc: "Innovative & sustainable modern designs" },
  { icon: "/services/Construction.png", title: "Turnkey Construction", desc: "Complete residential & commercial projects" },
  { icon: "/services/Interior.png", title: "Luxury Interiors", desc: "Premium finishing with world-class materials" },
  { icon: "/services/image.png", title: "Renovation & Remodeling", desc: "Transform old spaces into modern marvels" },
  { icon: "/services/project.png", title: "Project Management", desc: "On-time, on-budget, zero stress delivery" },
];

const cardAnimation = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Services = () => { 
  return (
    <section id="services" className="py-5 position-relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #0a0a1f 0%, #001233 100%)",
      paddingTop: "var(--navbar-height, 100px)",
      minHeight: "60vh"
    }} >

      <Container className="position-relative z-3">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 px-3"
        >
          <h2 className="display-4 fw-bold">
            Our <span className="text-gold">Premium Services</span>
          </h2>
          <p className="lead mt-2">End-to-end solutions with unmatched quality</p>
        </motion.div>

        {/* Service Cards */}
        <Row className="g-4 g-md-5 justify-content-center"   >
          {services.map((service, i) => (
            // ADDED: d-flex align-items-stretch ensures the column stretches to max height
            <Col style={{ zoom: '90%' }} xs={11} sm={9} md={6} lg={4} key={i} className="d-flex align-items-stretch">
              <motion.div
                {...cardAnimation}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -12 }}
                className="w-100" // ADDED: Ensures motion div takes full width
              >
                {/* UPDATED CLASS NAMES BELOW: 
                   1. h-100: Forces the card to take full height of the column.
                   2. d-flex flex-column: Enables flexbox for vertical alignment.
                   3. justify-content-between: Pushes content apart if needed (optional).
                */}
                <div className="service-card text-center p-4 rounded-4 h-100 d-flex flex-column">
                  
                  {/* Top Content Group (to keep icon/title/desc together) */}
                  <div className="flex-grow-1">
                      {/* Icon */}
                      <motion.img
                        src={service.icon}
                        alt={service.title}
                        width={95}
                        height={95}
                        loading="lazy"
                        className="mb-3"
                        style={{ filter: "drop-shadow(0 0 25px rgba(249,197,19,0.6))" }}
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      />

                      {/* Title */}
                      <h4 className="fw-bold mb-2">{service.title}</h4>

                      {/* Description */}
                      <p className="service-desc">{service.desc}</p>
                  </div>

                  {/* Divider - ADDED mt-3 to ensure spacing at bottom */}
                  <div className="gold-line mx-auto mt-3"></div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;