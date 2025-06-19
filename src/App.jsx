import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop.";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
