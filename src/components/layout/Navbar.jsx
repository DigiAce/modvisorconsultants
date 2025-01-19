import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Dropdown for "Our services"
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // React Router's navigation hook

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      // action: () =>
      //   document
      //     .getElementById("about-section")
      //     .scrollIntoView({ behavior: "smooth" }),
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (actionOrPath) => {
    setIsMenuOpen(false); // Close the mobile menu
    setIsServicesOpen(false); // Close the dropdown
    if (typeof actionOrPath === "function") {
      actionOrPath(); // Call the scroll action for About
    } else {
      navigate(actionOrPath); // Navigate to other pages
      window.scrollTo(0, 0); // Scroll to the top
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
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold">
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
            <ul className="flex flex-col space-y-4 text-center">
              {menuItems.map((item) =>
                item.subMenu ? (
                  <li key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-2 w-full text-left hover:underline"
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
                              className="w-full text-left hover:underline"
                            >
                              {sub.name}
                            </button>
                          </li>
                        ))}
                      </ul>
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
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
