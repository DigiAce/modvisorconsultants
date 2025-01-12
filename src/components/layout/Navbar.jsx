import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  // Sample menu data
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Blog", path: "/blog" },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to change navbar background and text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  h-16 sm:h-20 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-4xl xl:max-w-7xl mx-auto px-5 py-3 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/img/logo-trans.png" // Replace with the path to your logo image
              alt="Company Logo"
              className=" w-full h-8 sm:h-12 filter drop-shadow-2xl brightness-125"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul
              className={`flex space-x-10 text-base font-bold ${
                isScrolled ? "text-black/60" : "text-white"
              }`}
            >
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <button
              className={`flex items-center justify-center rounded-md px-6 py-2.5 font-semibold transition duration-200 ${
                isScrolled
                  ? "bg-[#ffc541] text-black"
                  : "bg-[#ffc541] text-white"
              } hover:shadow-lg`}
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-2xl text-black"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white text-black shadow-lg p-4 rounded-md">
            <ul className="flex flex-col space-y-4 text-center text-base font-bold">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="hover:underline hover:underline-offset-4"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center gap-x-2">
              <button className="flex items-center justify-center rounded-md bg-[#ffc541] text-black px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                Get in touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
