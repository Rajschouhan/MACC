// src/components/AdminPanel.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const ADMIN_PASSWORD = "maaashapura2025"; // Change this to whatever you want

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("residential");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setPassword("");
    } else {
      alert("Wrong password!");
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", category);

    // Using free image upload service (replace with your own later if needed)
    const res = await fetch("https://api.imgbb.com/1/upload?key=8e0d906e9e9e9e9e9e9e9e9e9e9e9e9e", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data.success) {
      // Save to localStorage (instant appear on website)
      const newProject = {
        src: data.data.url,
        title,
        category,
      };
      const existing = JSON.parse(localStorage.getItem("maa-projects") || "[]");
      existing.push(newProject);
      localStorage.setItem("maa-projects", JSON.stringify(existing));

      setMessage("Project uploaded & live instantly!");
      setTitle(""); setFile(null);
      setTimeout(() => setMessage(""), 3000);
    }
    setUploading(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: "linear-gradient(135deg, #0a0a1f, #001233)" }}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="p-5 rounded-4 text-center"
          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(15px)", border: "2px solid #f9c513" }}
        >
          <img src="/logo.png" alt="Maa Ashapura" className="mb-4 rounded-4" style={{ width: "100px" }} />
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control py-3 text-center text-white bg-transparent border-warning"
              style={{ fontSize: "1.3rem" }}
            />
            <button type="submit" className="btn mt-4 w-100 py-3" style={{ background: "#f9c513", color: "black", fontWeight: "bold" }}>
              ENTER ADMIN PANEL
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 py-5" style={{ background: "linear-gradient(135deg, #0a0a1f, #001233)" }}>
      <div className="container">
        <div className="text-center mb-5">
          <img src="/maa-ashapura-legendary-logo.png" alt="Maa Ashapura" style={{ width: "300px" }} />
          <h2 className="text-gold mt-3">ADMIN PANEL</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto p-5 rounded-4"
          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(15px)", border: "2px solid #f9c513" }}
        >
          <form onSubmit={handleUpload}>
            <div className="mb-4">
              <input type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} required className="form-control py-3 text-white bg-transparent border-warning" />
            </div>
            <div className="mb-4">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control py-3 text-white bg-transparent border-warning">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mb-4">
              <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required className="form-control py-3 text-white" />
            </div>
            <button type="submit" disabled={uploading} className="btn w-100 py-3" style={{ background: "#f9c513", color: "black", fontWeight: "bold" }}>
              {uploading ? "Uploading..." : "UPLOAD & GO LIVE"}
            </button>
          </form>
          {message && <div className="alert alert-success mt-4 text-center">{message}</div>}
        </motion.div>

        <div className="text-center mt-4">
          <button onClick={() => setIsLoggedIn(false)} className="btn btn-outline-warning">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;