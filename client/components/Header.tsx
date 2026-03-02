import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  bgColor?: string;
  invertLogo?: boolean;
}

export default function Header({ bgColor = 'white', invertLogo = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const getHeaderClass = () => {
    if (bgColor === 'white') {
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
        : 'bg-white';
    } else if (bgColor === 'black') {
      return isScrolled
        ? 'bg-black/90 backdrop-blur-sm border-b border-gray-900'
        : 'bg-black';
    } else if (bgColor === 'dark-gray') {
      return isScrolled
        ? 'bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800'
        : 'bg-zinc-900';
    }
    return 'bg-white';
  };

  const getTextColor = () => {
    if (bgColor === 'white') {
      return 'text-gray-500';
    } else {
      return 'text-zinc-400';
    }
  };

  const activeTextColor = bgColor === 'white' ? 'text-black' : 'text-white';
  const hoverTextColor = bgColor === 'white' ? 'hover:text-black' : 'hover:text-white';
  const transitionClass = 'transition-colors duration-200';
  const hamburgerColor = bgColor === 'white' ? 'text-black' : 'text-white';

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClass()}`}>
        <div className="w-full flex justify-center px-6">
          <div className="w-full max-w-[1600px]">
            <div className="py-4 flex justify-between items-center gap-8">
              {/* Logo */}
              <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                  alt="Studio Yona"
                  className={`h-20 md:h-28 w-auto ${invertLogo ? 'invert' : ''}`}
                />
              </Link>

              {/* Desktop Navigation Links - unchanged, hidden on mobile */}
              <div className="hidden md:flex gap-6 md:gap-7 text-sm md:text-base tracking-[0.02em] font-bold items-center">
                <Link
                  to="/"
                  className={`${activeTextColor} ${transitionClass} hover:opacity-70 py-2 ${
                    isActive('/') ? 'border-b border-current' : ''
                  }`}
                >
                  HOME
                </Link>
                <Link
                  to="/projects"
                  className={`${activeTextColor} ${transitionClass} hover:opacity-70 py-2 ${
                    isActive('/projects') ? 'border-b border-current' : ''
                  }`}
                >
                  WORK
                </Link>
                <Link
                  to="/about"
                  className={`${activeTextColor} ${transitionClass} hover:opacity-70 py-2 ${
                    isActive('/about') ? 'border-b border-current' : ''
                  }`}
                >
                  STUDIO
                </Link>
                <Link
                  to="/contact"
                  className={`${activeTextColor} ${transitionClass} hover:opacity-70 py-2 ${
                    isActive('/contact') ? 'border-b border-current' : ''
                  }`}
                >
                  CONTACT
                </Link>
              </div>

              {/* Mobile Hamburger Button - hidden on desktop */}
              <button
                className={`flex md:hidden p-2 ${hamburgerColor}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen
                  ? <X className="w-7 h-7" />
                  : <Menu className="w-7 h-7" />
                }
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay - only on mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black flex flex-col">
          {/* Spacer for header height */}
          <div style={{ height: '88px' }} />

          {/* Nav Links */}
          <nav className="flex flex-col items-start justify-center flex-1 px-10 gap-8">
            <Link
              to="/"
              className={`text-3xl font-bold tracking-widest text-white hover:opacity-70 transition-opacity ${isActive('/') ? 'border-b border-white pb-1' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/projects"
              className={`text-3xl font-bold tracking-widest text-white hover:opacity-70 transition-opacity ${isActive('/projects') ? 'border-b border-white pb-1' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              WORK
            </Link>
            <Link
              to="/about"
              className={`text-3xl font-bold tracking-widest text-white hover:opacity-70 transition-opacity ${isActive('/about') ? 'border-b border-white pb-1' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              STUDIO
            </Link>
            <Link
              to="/contact"
              className={`text-3xl font-bold tracking-widest text-white hover:opacity-70 transition-opacity ${isActive('/contact') ? 'border-b border-white pb-1' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>

          {/* Social links at bottom */}
          <div className="px-10 pb-12 flex gap-8 text-sm font-light tracking-widest text-zinc-400">
            <a
              href="https://www.instagram.com/studio.yona/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/in/adam-yona-962892156?trk=people-guest_people_search-card"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      )}
    </>
  );
}
