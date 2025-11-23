// src/components/Contact.jsx → COPY-PASTE FULL
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsWhatsapp, BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="py-5 position-relative" style={{ minHeight: "100vh" }}>
      

      <Container className="position-relative z-3">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white">
            Let's Build Your <span className="text-gold">Dream</span>
          </h2>
          <p className="lead text-white">Get your free consultation today</p>
        </motion.div>

        <div className="row g-5 justify-content-center">
          <div className="col-lg-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-4"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(15px)",
                border: "2px solid rgba(249,197,19,0.4)"
              }}
            >
             <Form action="https://formspree.io/f/your-email-here" method="POST">
  <Form.Group className="mb-4 position-relative">
    <Form.Control
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="py-3 bg-transparent text-white border-warning"
      style={{ 
        border: "2px solid rgba(249,197,19,0.6)",
        borderRadius: "12px",
        fontSize: "1.1rem",
        paddingLeft: "1rem"
      }}
    />
  </Form.Group>

  <Form.Group className="mb-4 position-relative">
    <Form.Control
      type="tel"
      name="phone"
      placeholder="Phone Number"
      required
      className="py-3 bg-transparent text-white border-warning"
      style={{ 
        border: "2px solid rgba(249,197,19,0.6)",
        borderRadius: "12px",
        fontSize: "1.1rem"
      }}
    />
  </Form.Group>

  <Form.Group className="mb-4 position-relative">
    <Form.Control
      as="textarea"
      rows={5}
      name="message"
      placeholder="Tell us about your project..."
      className="py-3 bg-transparent text-white border-warning"
      style={{ 
        border: "2px solid rgba(249,197,19,0.6)",
        borderRadius: "12px",
        fontSize: "1.1rem",
        resize: "none"
      }}
    />
  </Form.Group>

  <Button 
    type="submit" 
    className="w-100 py-3 fw-bold text-dark rounded-pill shadow-lg"
    style={{ 
      background: "#f9c513", 
      border: "none",
      fontSize: "1.2rem",
      letterSpacing: "1px"
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Send Message
  </Button>
</Form>
            </motion.div>
          </div>

          <div className="col-lg-6 text-white">
            <h3 className="text-gold mb-4">Contact Info</h3>
            <div className="mb-4 d-flex align-items-center gap-3">
              <BsTelephoneFill size={24} className="text-gold" />
              <div>
                <p className="mb-0">+91 9617547071</p>
                <p className="mb-0">+91 7828300306</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-center gap-3">
              <BsEnvelopeFill size={24} className="text-gold" />
              <p>maaashapuraconstruction22@gmail.com</p>
            </div>
            <div className="mb-4 d-flex align-items-center gap-3">
              <BsGeoAltFill size={24} className="text-gold" />
              <p>Vijay Nagar, Indore, Madhya Pradesh</p>
            </div>
          </div>
        </div>
      </Container>

      {/* WHATSAPP FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/9617547071"
        target="_blank"
        className="position-fixed bottom-0 end-0 m-4 z-50 d-flex align-items-center justify-content-center rounded-circle text-white shadow-lg"
        style={{ width: "70px", height: "70px", background: "#25D366" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsWhatsapp size={40} />
      </motion.a>
    </section>
  );
};

export default Contact;