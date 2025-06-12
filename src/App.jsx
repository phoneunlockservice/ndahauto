import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ReservePage from './pages/ReservePage';
import GalleryPage from './pages/GalleryPage';
import RequirementsPage from './pages/RequirementsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/requirements" element={<RequirementsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;