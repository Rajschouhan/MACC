// src/components/Portfolio.jsx → FINAL MOBILE-FIRST PORTFOLIO
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

const projects = [
  { src: "/projects/haveli.png", category: "residential", title: "The Patel's Haveli" },
  { src: "/projects/villa5.png", category: "residential", title: "Emerald Business Park" },
  { src: "/projects/p6.png", category: "ongoing", title: "Royal Heights" },
  { src: "/projects/bunglow.png", category: "completed", title: "Green Valley Villas" },
  { src: "/projects/p4.png", category: "commercial", title: "Sunshine Apartments" },
  { src: "/projects/p8.png", category: "residential", title: "Platinum Towers" },
  { src: "/projects/p7.png", category: "completed", title: "Diamond Enclave" },
  { src: "/projects/haveli.png", category: "completed", title: "The Patel's Haveli" },
];

const categories = ["all", "residential", "commercial", "ongoing", "completed"];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-5 position-relative" style={{ minHeight: "100vh" }}>
     

      <div className="container position-relative z-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-white">
            Our <span className="text-gold">Masterpieces</span>
          </h2>
          <p className="lead text-white opacity-90">Crafting landmarks across Central India</p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-pill fw-bold text-uppercase ${
                filter === cat
                  ? "bg-warning text-dark"
                  : "bg-white bg-opacity-10 text-white border border-warning"
              }`}
              style={{ minWidth: "120px" }}
            >
              {cat === "all" ? "All Projects" : cat}
            </motion.button>
          ))}
        </div>

        {/* MASONRY GRID */}
        <motion.div
          layout
          className="row g-3 g-md-4"
          style={{
            columnCount: 1,
            columnGap: "1rem",
          }}
          breakpoints={{ 768: 2, 992: 3 }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid mb-4 cursor-pointer"
              onClick={() => openLightbox(filtered.indexOf(project))}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="position-relative w-100 overflow-hidden rounded-3 shadow-lg"
                style={{ border: "2px solid rgba(249,197,19,0.3)" }}
              >
                
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-100 "
                  loading="lazy"
                  style={{
                    display: "block",
                    filter: "brightness(0.9)",
                    transition: "all 0.4s",
                  }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                  style={{
                    background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                  }}
                >
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="small text-gold text-uppercase">{project.category}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={filtered.map(p => ({ src: p.src }))}
          plugins={[Thumbnails]}
          thumbnails={{ width: 80, height: 60, border: 2, borderRadius: 8 }}
        />
      )}
    </section>
  );
};

export default Portfolio;