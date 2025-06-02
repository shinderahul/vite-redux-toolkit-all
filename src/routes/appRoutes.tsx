import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/notFound";
import CrudReduxtoolkit from '../pages/crud-redux-toolkit';
import Navbar from '../components/common/navbar';
import DebounceAutocomplate from '../pages/debounce-autocomplate';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crud-redux-toolkit" element={<CrudReduxtoolkit />} />
        <Route path="/debounce-autocomplate" element={<DebounceAutocomplate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
