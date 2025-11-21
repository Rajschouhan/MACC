// src/components/Testimonials.jsx  → COPY-PASTE FULL
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "Mr. Rajesh Singh", project: "Skyline Residency", text: "Maa Ashapura delivered our dream home 2 months before deadline with perfect finishing.", rating: 5 },
  { name: "Mrs. Priya Malhotra", project: "Emerald Heights", text: "Best construction quality I’ve seen in Indore. Truly premium experience from day one.", rating: 5 },
  { name: "Vijay Group", project: "Platinum Commercial Tower", text: "Professional team, transparent pricing, and world-class execution. Highly recommended!", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-5 position-relative" style={{ minHeight: "90vh" }}>
      

      <Container className="position-relative z-3">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white">
            Happy Clients, <span className="text-gold">Happy Homes</span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -15 }}
                className="h-100 p-4"
              >
                <div className="h-100 bg-white bg-opacity-10 backdrop-blur-lg rounded-4 p-5 text-center border border-warning border-opacity-30">
                  <div className="mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-gold fs-3">★</span>
                    ))}
                  </div>
                  <p className="text-white italic mb-4" style={{ minHeight: "100px" }}>
                    "{t.text}"
                  </p>
                  <h5 className="text-gold fw-bold">{t.name}</h5>
                  <p className="text-white opacity-80 small">{t.project}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;