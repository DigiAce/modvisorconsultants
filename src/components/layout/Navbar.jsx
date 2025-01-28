import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to the section
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Navigate and scroll to section
  const handleNavigationWithScroll = (path, sectionId) => {
    if (location.pathname === path) {
      handleScrollToSection(sectionId);
    } else {
      navigate(path, { state: { sectionId } });
    }
  };

  useEffect(() => {
    if (location.state?.sectionId) {
      handleScrollToSection(location.state.sectionId);
    }
  }, [location]);

  // Detect scroll for background color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/",
      action: () => handleNavigationWithScroll("/", "about"),
    },
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
    { name: "Join Us", path: "/join" },
  ];

  const handleNavigation = (actionOrPath) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    if (typeof actionOrPath === "function") {
      actionOrPath();
    } else {
      navigate(actionOrPath);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 h-16 sm:h-20 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-4xl xl:max-w-7xl mx-auto px-5 py-3 lg:py-5">
        <div className="flex items-center justify-between">
          <img
            src="/img/logo-trans.png"
            alt="Company Logo"
            className="h-8 sm:h-12"
          />
          <div className="hidden lg:flex justify-between items-center w-full">
            <ul className="flex-1 flex justify-center space-x-10 text-base font-bold">
              {menuItems.map((item) =>
                item.subMenu ? (
                  <li key={item.name} className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-2 focus:outline-none"
                    >
                      <span>{item.name}</span>
                      {isServicesOpen ? (
                        <FiChevronUp className="text-lg" />
                      ) : (
                        <FiChevronDown className="text-lg" />
                      )}
                    </button>
                    {isServicesOpen && (
                      <div className="absolute right-0 mt-2 w-48 py-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 z-10">
                        {item.subMenu.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={() => handleNavigation(sub.path)}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.action || item.path)}
                      className="hover:underline"
                    >
                      {item.name}
                    </button>
                  </li>
                )
              )}
            </ul>
            <div className="ml-4">
              <button
                onClick={() => handleNavigationWithScroll("/", "contact")}
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 bg-white text-black shadow-lg p-4 rounded-md">
            <ul className="flex flex-col items-center space-y-4 text-center">
              {menuItems.map((item) =>
                item.subMenu ? (
                  <li key={item.name} className="w-full">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-center space-x-2 w-full text-center hover:underline"
                    >
                      <span>{item.name}</span>
                      {isServicesOpen ? (
                        <FiChevronUp className="text-lg" />
                      ) : (
                        <FiChevronDown className="text-lg" />
                      )}
                    </button>
                    {isServicesOpen && (
                      <ul className="mt-2 space-y-2">
                        {item.subMenu.map((sub) => (
                          <li key={sub.name}>
                            <button
                              onClick={() => handleNavigation(sub.path)}
                              className="block w-full text-center hover:underline"
                            >
                              {sub.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.name} className="w-full">
                    <button
                      onClick={() => handleNavigation(item.action || item.path)}
                      className="w-full text-center hover:underline"
                    >
                      {item.name}
                    </button>
                  </li>
                )
              )}
            </ul>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => handleNavigationWithScroll("/", "contact")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
