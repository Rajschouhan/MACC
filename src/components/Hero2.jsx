import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { useState } from 'react';

const Hero2 = () => {
  const [index, setIndex] = useState(0);
const cards = [
     {
    type: 'logo',
    img: '/logo.png',  // ← Your reflection logo (the one you just sent)
    title: 'MAA ASHAPURA',
    subtitle: 'CONSULTANT & CONSTRUCTION CO.',
    tagline: 'YOU DREAM IT, WE BUILD IT',
  },
  {
    type: 'project',
    img: '/projects/c1.png',
    title: 'MODERN CONSTRUCTION',
    location: 'Indore',
    tag: 'Completed 2024',
  },
 
  {
    type: 'project',
    img: '/projects/interior2.png',
    title: 'MODERN INTERIORS',
    location: 'Indore',
    tag: 'Under Construction',
  },
];

  // For infinite loop
  const prevIndex = index === 0 ? cards.length - 1 : index - 1;
  const nextIndex = index === cards.length - 1 ? 0 : index + 1;

  const goPrev = () => setIndex(prevIndex);
  const goNext = () => setIndex(nextIndex);

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a1f 0%, #001233 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Background Logo */}
     

      <Container className="position-relative z-3">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-white mb-5"
          style={{ fontSize: '3rem', fontWeight: 800 }}
        >
          <span style={{ color: '#f9c513' }}>Crafting</span> Landmarks of Tomorrow
        </motion.h2>

        {/* Carousel Container */}
        <div className="position-relative" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="d-flex align-items-center justify-content-center gap-4 position-relative">
            {/* LEFT CARD */}
            <motion.div
              layout
              initial={{ opacity: 0, x: -100, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 0.9 }}
              exit={{ opacity: 0, x: 100, scale: 0.85 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex-shrink-0"
              onClick={goPrev}
              style={{ cursor: 'pointer' }}
            >
              <CardItem card={cards[prevIndex]} isSide />
            </motion.div>

            {/* CENTER CARD (MAIN) */}
            <motion.div
              layout
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex-shrink-0 z-10"
            >
              <CardItem card={cards[index]} isCenter />
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              layout
              initial={{ opacity: 0, x: 100, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 0.9 }}
              exit={{ opacity: 0, x: -100, scale: 0.85 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex-shrink-0"
              onClick={goNext}
              style={{ cursor: 'pointer' }}
            >
              <CardItem card={cards[nextIndex]} isSide />
            </motion.div>
          </div>

          {/* ARROWS */}
 <button
  onClick={goPrev}
  className="position-absolute top-50 start-0 translate-middle-y btn rounded-circle p-0 shadow-lg"
  style={{
    width: '80px', height: '80px',
    background: 'rgba(249,197,19,0.15)',
    border: '4px solid #f9c513',
    left: '14%',
    zIndex: 30,
  }}
  whileHover={{ scale: 1.3, background: '#f9c513' }}
  whileTap={{ scale: 0.9 }}
>
  <BsArrowLeftCircle size={48} color="#f9c513" />
</button>

<button
  onClick={goNext}
  className="position-absolute top-50 end-0 translate-middle-y btn rounded-circle p-0 shadow-lg"
  style={{
    width: '80px', height: '80px',
    background: 'rgba(249,197,19,0.15)',
    border: '4px solid #f9c513',
    right: '3%',
    zIndex: 30,
  }}
  whileHover={{ scale: 1.3, background: '#f9c513' }}
  whileTap={{ scale: 0.9 }}
>
  <BsArrowRightCircle size={48} color="#f9c513" />
</button>

        </div>
      </Container>
    </section>
  );
};

// Reusable Card Component
const CardItem = ({ card, isCenter = false }) => {
  return (
    <motion.div
      className="rounded-4 overflow-hidden position-relative"
      style={{
        width: isCenter ? '460px' : '380px',
        height: '620px',
        boxShadow: isCenter
          ? '0 0 80px rgba(249,197,19,0.6), 0 30px 60px rgba(0,0,0,0.7)'
          : '0 20px 40px rgba(0,0,0,0.5)',
        border: isCenter ? '4px solid #f9c513' : '2px solid rgba(249,197,19,0.3)',
        transition: 'all 0.4s',
      }}
      whileHover={{ scale: isCenter ? 1.05 : 1.08 }}
    >
      <img
        src={card.img}
        alt={card.title}
        className="w-100 h-100 object-fit-cover"
        style={{ filter: isCenter ? 'brightness(1.1)' : 'brightness(0.9)' }}
      />

      <div
        className="position-absolute bottom-0 start-0 w-100 p-5"
        style={{
          background: 'linear-gradient(transparent, rgba(0,0,0,0.95))',
        }}
      >
        {card.type === 'logo' ? (
          <>
            <h3 className="fw-bold mb-1" style={{ fontSize: '2.4rem', color: '#f9c513' }}>
              {card.title}
            </h3>
            <p className="mb-1" style={{ fontSize: '1.3rem', color: '#fff' }}>{card.subtitle}</p>
            <p className="fw-bold" style={{ color: '#00eeff', fontSize: '1.4rem' }}>
              {card.tagline}
            </p>
          </>
        ) : (
          <>
            <h4 className="fw-bold text-white mb-1">{card.title}</h4>
            <p className="text-white opacity-80 mb-2">{card.location}</p>
            <span className="badge bg-warning text-dark fs-6 px-4 py-2">{card.tag}</span>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Hero2;