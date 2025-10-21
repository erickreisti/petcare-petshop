import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-gray-700 hover:text-[#FD6E4C] font-medium text-lg px-4 py-2 rounded-lg transition-all duration-300 relative group nav-link-hover"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#FC7C4B] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">🐾</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 font-ubuntu">
                Petcare
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Centro Veterinário</p>
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="#home">Início</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#about">Sobre Nós</NavLink>
            <NavLink href="#prices">Planos</NavLink>
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+551199999999"
              className="flex items-center gap-2 text-gray-700 hover:text-[#FD6E4C] transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">(11) 9999-9999</span>
            </a>
            <button className="bg-[#FD6E4C] hover:bg-[#FC7C4B] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Agendar Consulta
            </button>
          </div>

          {/* Menu Mobile Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[#FC7C4B] transition-all duration-300 ${
                  isMenuOpen ? "top-3 rotate-45" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute left-0 top-3 w-6 h-0.5 bg-[#FC7C4B] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[#FC7C4B] transition-all duration-300 ${
                  isMenuOpen ? "top-3 -rotate-45" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="px-6 space-y-4">
            <NavLink href="#home">Início</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#about">Sobre Nós</NavLink>
            <NavLink href="#prices">Planos</NavLink>

            <div className="pt-4 border-t border-gray-200 space-y-4">
              <a
                href="tel:+551199999999"
                className="flex items-center gap-3 text-gray-700 font-semibold"
              >
                <svg
                  className="w-5 h-5 text-[#FC7C4B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (11) 9999-9999
              </a>
              <button className="w-full bg-[#FD6E4C] hover:bg-[#FC7C4B] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
