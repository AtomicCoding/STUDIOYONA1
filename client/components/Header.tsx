import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface HeaderProps {
  bgColor?: string;
  invertLogo?: boolean;
}

export default function Header({ bgColor = 'white', invertLogo = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scrolled state after 20-40px (using 30px as midpoint)
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header styling based on background and scroll state
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

  // Determine text color based on background
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

  // Helper function to determine if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
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

            {/* Navigation Links */}
            <div className="flex gap-6 md:gap-7 text-sm md:text-base tracking-[0.02em] font-bold items-center">
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
                className={`${isActive('/about') ? activeTextColor : getTextColor()} ${hoverTextColor} ${transitionClass} hover:opacity-70 py-2 ${
                  isActive('/about') ? 'border-b border-current' : ''
                }`}
              >
                STUDIO
              </Link>
              <Link
                to="/contact"
                className={`${isActive('/contact') ? activeTextColor : getTextColor()} ${hoverTextColor} ${transitionClass} hover:opacity-70 py-2 ${
                  isActive('/contact') ? 'border-b border-current' : ''
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
