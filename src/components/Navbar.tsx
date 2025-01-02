import * as React from "react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

const navItems = [
  { label: "Home", isHighlighted: false },
  { label: "Languages", isHighlighted: false },
  { label: "Subjects", isHighlighted: false },
  { label: "About Us", isHighlighted: false },
  { label: "Contact Us", isHighlighted: true }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-1 bg-neutral-900/95 backdrop-blur-lg' : 'py-3 bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Logo
            imageUrl="https://cdn.builder.io/api/v1/image/assets/fa4132ae96b74be98ebea8ccbef58b81/f97096619879b9bb974b1d3321e3e5a9268b9b643dd7987cd5ce3bfec8fe55bf?apiKey=d7cd1c2741e34af9a21b86c09b36aa85&"
            title="CuriousOzzy"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-200 hover:text-primary-coral focus:outline-none focus:ring-2 focus:ring-primary-coral"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                isHighlighted={item.isHighlighted}
              />
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full bg-neutral-900/95 backdrop-blur-lg transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-3 space-y-2 border-t border-white/10">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                isHighlighted={item.isHighlighted}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}; 