import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Adjust the import path as needed
import { HiHome, HiUser, HiMail } from "react-icons/hi";
import Home from "./pages/Home"; // Adjust the path to your actual page components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer"; // Adjust the import path as needed
// import Services from "./pages/Services";
import ModelBuild from "./pages/services/ModelBuild"; // Page for Model Build service
import ModelReview from "./pages/services/ModelReview"; // Page for Model Review service
import Training from "./pages/services/Training"; // Page for Training service
import Team from "./pages/Team"; // Page for "Our Team"
import Blog from "./pages/Blog"; // Page for Blog
import FloatingButton from "./components/layout/FloatingButton";

function App() {
  // Define the routes array, including dropdown items
  const routes = [
    { name: "Home", path: "/", icon: HiHome },
    { name: "About", path: "/about-section", icon: HiUser },
    {
      name: "Our services",
      path: "/services",
      subMenu: [
        { name: "Model Build", path: "/services/modelbuild" },
        { name: "Model Review", path: "/services/modelreview" },
        { name: "Training", path: "/services/training" },
      ],
    },
    { name: "Our Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact", icon: HiMail },
  ];

  return (
    <div className="">
      <Router>
        {/* Pass routes as a prop to the Navbar component */}
        <Navbar routes={routes} />

        <Routes>
          {/* Define routes for the main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-section" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/services" element={<Services />} /> */}

          {/* Define routes for the "Our services" dropdown */}
          <Route path="/services/modelbuild" element={<ModelBuild />} />
          <Route path="/services/modelreview" element={<ModelReview />} />
          <Route path="/services/training" element={<Training />} />

          {/* Define routes for other main menu items */}
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {/* Footer added here */}
        <Footer />
        {/*floating button*/}
        <FloatingButton />
      </Router>
    </div>
  );
}

export default App;
