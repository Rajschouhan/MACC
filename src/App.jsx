import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 1 created 1
import Hero1 from './components/Hero1'; //2
import Hero2 from './components/Hero2';
import Services from './components/Services';
import Portfolio from './components/Portfolio'; //3
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'; //4
import Footer from './components/Footer';
import Admin from './components/Admin';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero1 />} /> {/* Home = Hero1 first */}
         <Route path="/admin" element={<Admin />} />
          {/* Later: /projects, /admin */}
        </Routes>
      <Hero2/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact/>
      <Footer />
      </div>
    </Router>
  );
}

export default App;