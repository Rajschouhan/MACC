// src/components/Admin.jsx → FINAL 100% WORKING VERSION
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("residential");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // CHECK LOGIN STATUS ON EVERY LOAD
  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for any auth changes (magic link click, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  const signIn = async () => {
    const email = prompt("Enter your admin email:");
    if (!email) return;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin + "/admin",  // THIS IS THE KEY LINE
      },
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Magic link sent! Check your email & click it → you will be redirected back here.");
    }
  };

  const signOut = () => {
    supabase.auth.signOut();
    setUser(null);
  };

  // Inside handleUpload function — replace from upload to insert
const handleUpload = async (e) => {
  e.preventDefault();
  if (!file || !title) return;

  setUploading(true);
  setMessage("");

  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;

    // Upload image
    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(fileName, file, { upsert: false });

    if (uploadError) throw uploadError;

    // GET FULL PUBLIC URL (THIS IS THE KEY LINE)
    const { data: { publicUrl } } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);

    // Save FULL URL to database
    const { error: dbError } = await supabase
      .from("projects")
      .insert({
        name: title,
        category: category,
        image_url: publicUrl,   // ← Now full working URL
        description: "",
        owner_name: "Maa Ashapura Construction",
        owner_address: "Vijay Nagar, Indore"
      });

    if (dbError) throw dbError;

    setMessage("PROJECT UPLOADED & VISIBLE INSTANTLY!");
    setTitle("");
    setFile(null);
  } catch (err) {
    setMessage("Error: " + err.message);
  }
  setUploading(false);
};

  // LOGIN SCREEN
  if (!user) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center flex-column gap-5" style={{ background: "linear-gradient(135deg, #0a0a1f, #001233)" }}>
        <img src="/maa-ashapura-eternal-logo.png" alt="Maa Ashapura" style={{ width: "320px" }} />
        <h1 className="text-gold display-5 fw-bold">ADMIN PANEL</h1>
        <button onClick={signIn} className="btn px-5 py-4 rounded-pill" style={{ background: "#f9c513", color: "black", fontSize: "1.3rem", fontWeight: "bold" }}>
          Login with Email Magic Link
        </button>
      </div>
    );
  }

  // DASHBOARD AFTER LOGIN
  return (
    <div className="min-vh-100 py-5" style={{ background: "linear-gradient(135deg, #0a0a1f, #001233)" }}>
      <div className="container">
        <div className="text-center mb-5">
          <img src="/maa-ashapura-eternal-logo.png" alt="Maa Ashapura" style={{ width: "350px" }} />
          <h2 className="text-gold mt-3">WELCOME BACK, BOSS</h2>
          <p className="text-white">Logged in as: {user.email}</p>
          <button onClick={signOut} className="btn btn-outline-warning">Logout</button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto p-5 rounded-4"
          style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(15px)", border: "3px solid #f9c513" }}
        >
          <form onSubmit={handleUpload}>
            <input
              type="text"
              placeholder="Project Title (e.g. Royal Paradise)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control mb-4 py-4 text-white bg-transparent border-warning"
              style={{ fontSize: "1.2rem" }}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control mb-4 py-4 text-white bg-transparent border-warning"
              style={{ fontSize: "1.2rem" }}
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
              className="form-control mb-4 py-4"
            />
            <button
              type="submit"
              disabled={uploading}
              className="btn w-100 py-4 rounded-pill"
              style={{ background: "#f9c513", color: "black", fontSize: "1.4rem", fontWeight: "bold" }}
            >
              {uploading ? "Uploading..." : "UPLOAD & GO LIVE"}
            </button>
          </form>
          {message && (
            <div className={`alert mt-4 text-center py-3 ${message.includes("Error") ? "alert-danger" : "alert-success"}`}>
              {message}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;