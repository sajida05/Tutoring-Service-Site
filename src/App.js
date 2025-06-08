import {Routes, Route } from 'react-router-dom';
import TutorNavbar from './components/TutorNavbar';
import Home from './pages/Home';
import Tutors from './pages/Tutors';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import TutorProfile from './pages/TutorProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterName from './components/FooterName'

function App() {
  return (
  <> 
      <TutorNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutor/:name" element={<TutorProfile />} />

      </Routes>
      <FooterName />
 </>



  );
}

export default App;
