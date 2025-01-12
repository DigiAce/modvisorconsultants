import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Adjust the import path as needed
import { HiHome, HiUser, HiMail } from "react-icons/hi";
import Home from "./pages/Home"; // Adjust the path to your actual page components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer"; // Adjust the import path as needed
import { div } from "framer-motion/client";

function App() {
  // Define the routes array
  const routes = [
    { name: "Home", path: "/", icon: HiHome },
    { name: "About", path: "/about", icon: HiUser },
    { name: "Contact", path: "/contact", icon: HiMail },
  ];

  return (
    <div className="">
      <Router>
        <Navbar routes={routes} />{" "}
        {/* Pass routes as a prop to the Navbar component */}
        <Routes>
          {/* Define the routes for your pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Footer added here */}
      </Router>
    </div>
  );
}

export default App;
