import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

const categories = ["all", "residential", "commercial", "ongoing", "completed"];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading projects:", error);
      } else {
        const projectsWithUrls = data.map((p) => ({
          ...p,
          display_url: p.image_url, // already full URL from Supabase
        }));

        setProjects(projectsWithUrls);
        setFiltered(projectsWithUrls);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFiltered(projects);
    } else {
      setFiltered(projects.filter((p) => p.category === filter));
    }
  }, [filter, projects]);

  if (loading) {
    return (
      <section className="py-5 text-center text-white">
        <h2 className="display-3 fw-bold text-gold">Loading Your Empire...</h2>
      </section>
    );
  }

  return (
    <section className="py-5 position-relative" style={{ minHeight: "100vh" }}>
      <div className="container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-white">
            Our{" "}
            <span style={{ color: "#f9c513", textShadow: "0 0 40px rgba(249,197,19,0.8)" }}>
              Masterpieces
            </span>
          </h2>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-pill fw-bold text-uppercase ${
                filter === cat
                  ? "bg-warning text-dark"
                  : "bg-dark bg-opacity-50 text-white border border-warning"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* ONE CARD PER ROW */}
        <div className="d-flex flex-column  gap-4">
          {filtered.map((project, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.03, y: -12 }}
  transition={{ duration: 0.4 }}
  className="mx-auto"
  style={{
    width: "100%",
    
    Width: "1200px", // bigger card width
    cursor: "pointer",
  }}
>
  <div
    className="position-relative overflow-hidden rounded-4 shadow-lg"
    style={{
      border: "3px solid #f9c513",
      height: "550px", // increased card height
    }}
  >
    <img
      src={project.display_url}
      alt={project.name}
      className="w-100 h-100"
      style={{
        objectFit: "cover",   // fills entire card
        objectPosition: "center",
        transition: "transform 0.4s ease",
      }}
      loading="lazy"
    />

    <div
      className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
      style={{
        background: "linear-gradient(transparent, rgba(0,0,0,0.95))",
      }}
    >
      <h4 className="fw-bold">{project.name}</h4>
      <p className="text-warning text-uppercase">{project.category}</p>
    </div>
  </div>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
