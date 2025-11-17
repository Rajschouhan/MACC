import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { BsTrophy, BsBuilding, BsClockHistory, BsPeople } from 'react-icons/bs';

const stats = [
  { icon: BsBuilding, number: 75, suffix: '+', label: 'Projects Completed', color: '#f9c513' },
  { icon: BsTrophy, number: 25, suffix: '+', label: 'Years of Excellence', color: '#00d4ff' },
  { icon: BsClockHistory, number: 4, label: 'Ongoing Mega Projects', color: '#ff6b6b' },
  { icon: BsPeople, number: 98, suffix: '%', label: 'Client Satisfaction', color: '#51cf66' },
];

const Hero2 = () => {
  return (
    <section
      className="position-relative py-5"
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #001833 100%)',
        minHeight: '90vh',
        overflow: 'hidden',
      }}
    >
      {/* Floating Logo Centerpiece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center mb-5"
        style={{ marginTop: '5rem' }}
      >
        <img
          src="/maa-ashapura-logo-full.png"
          alt="Maa Ashapura Full Logo"
          style={{ maxWidth: '650px', width: '90%', filter: 'drop-shadow(0 0 30px rgba(249,197,19,0.4))' }}
        />
      </motion.div>

      <Container className="position-relative z-2">
        <Row className="g-5 justify-content-center">
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card
                  className="text-center border-0 h-100"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '2rem 1.5rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="mb-3">
                    <stat.icon size={50} style={{ color: stat.color }} />
                  </div>
                  <h2 className="display-3 fw-bold text-white">
                    <CountUp
                      end={stat.number}
                      duration={3.5}
                      suffix={stat.suffix || ''}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </h2>
                  <p className="text-white fw-medium fs-5">{stat.label}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Tagline Below Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-5"
        >
          <h3 className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            "Excellence is not an act, but a habit."
          </h3>
          <p className="text-white opacity-75 mt-3 fs-5">
            — Maa Ashapura Construction Co.
          </p>
        </motion.div>
      </Container>

      {/* Subtle Background Pattern */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-5"
        style={{
          backgroundImage: 'url("/maa-ashapura-logo-full.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0) invert(1)',
        }}
      />
    </section>
  );
};

export default Hero2;