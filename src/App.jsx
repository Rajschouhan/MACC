import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 1 created 1
import Hero1 from './components/Hero1'; //2

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero1 />} /> {/* Home = Hero1 first */}
          {/* Later: /projects, /admin */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;