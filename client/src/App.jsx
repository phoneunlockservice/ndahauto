import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ReservePage from './pages/ReservePage';
import GalleryPage from './pages/GalleryPage';
import RequirementsPage from './pages/RequirementsPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Track visitor (once per day)
    fetch('https://api.ndahauto.com/api/visitors', {
      method: 'POST',
    });

    // Track pageview per IP + path + date
    fetch('https://api.ndahauto.com/api/visitors/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: location.pathname })
    });

  }, [location.pathname]);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/requirements" element={<RequirementsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;