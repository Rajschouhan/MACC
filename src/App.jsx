import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
// Removed App.css import
import './index.css';

// Create a simple component to group the Home Page sections
const Home = () => (
  <>
    <Hero1 />
    <Hero2 />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          {/* The "/" path now renders the grouped Home component */}
          <Route path="/" element={<Home />} />
          
          {/* Admin route is now clean */}
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;