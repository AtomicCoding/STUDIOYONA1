import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'vista-ridge-residence',
      title: 'Vista Ridge Residence',
      location: 'Beverly Hills, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6075aa98e58e4e8ab515b72283788bc6?format=webp&width=1200'
    },
    {
      id: 'pacific-modern-residence',
      title: 'Pacific Modern Residence',
      location: 'Manhattan Beach, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200'
    },
    {
      id: 'sculptural-modern-estate',
      title: 'Sculptural Modern Estate',
      location: 'Bel Air, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fdad90f77fff549209726ceaffd0070dc?format=webp&width=1200'
    },
    {
      id: 'modern-farmhouse-estate',
      title: 'Modern Farmhouse Estate',
      location: 'Montecito, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0ab0e4828dab4ed98d07468046290137?format=webp&width=1200'
    },
    {
      id: 'contemporary-curve-residence',
      title: 'Contemporary Curve Residence',
      location: 'Santa Barbara, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200'
    },
    {
      id: 'classical-estate-pavilion',
      title: 'Classical Estate Pavilion',
      location: 'Pasadena, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F61a87c373e2b40e19a476563cd2b425d?format=webp&width=1200'
    },
    {
      id: 'desert-contemporary-residence',
      title: 'Desert Contemporary Residence',
      location: 'Palm Springs, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc8a9ada427c446d7990b3d28801e1531?format=webp&width=1200'
    },
    {
      id: 'modular-container-retreat',
      title: 'Modular Container Retreat',
      location: 'Big Sur, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe8caa55f02bc40609e1e62e78f6eeac4?format=webp&width=1200'
    },
    {
      id: 'contemporary-twin-homes',
      title: 'Contemporary Twin Homes',
      location: 'Venice, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8235235c11594480b4e40970683ee6bd?format=webp&width=1200'
    }
  ];

  return (
    <>
      <title>Projects - Studio Yona</title>
      
      <div className="min-h-screen bg-black">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                  alt="Studio Yona"
                  className="h-12 w-auto invert"
                />
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-12 text-xs tracking-[0.2em] font-light">
                <Link to="/projects" className="text-white">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-stone-300 hover:text-white transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-stone-300 hover:text-white transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Header Section - Using First Uploaded Image */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Image - New Uploaded Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9ef4521d25b84eb1bf116b560df731b2?format=webp&width=1920"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'contrast(120%) brightness(110%) saturate(130%)' }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Header Content with Blur Background */}
          <div className="relative z-10 h-full flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
            <div className="bg-black/40 backdrop-blur-md px-12 py-10 rounded-sm border border-white/10">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-tight text-white mb-6 font-serif">
                Projects
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed text-white/90 max-w-2xl font-serif">
                A curated selection of bespoke residential designs crafted for discerning clients across California and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid - Full Width, No Gaps */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'
                }`}
                style={{
                  height: '70vh',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                  loading="lazy"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>
                
                {/* Project Info with Blur Background */}
                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                  <div className="bg-black/40 backdrop-blur-md px-8 py-6 rounded-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-2 font-serif">
                      {project.title}
                    </h2>
                    <p className="text-sm md:text-base tracking-[0.15em] uppercase text-white/80">
                      {project.location}
                    </p>
                  </div>
                </div>
                
                {/* Fade Effect for Scroll */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 transition-opacity duration-1000"
                  style={{
                    opacity: isScrolled ? 0 : 0.3
                  }}
                ></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-zinc-800 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Logo */}
              <div>
                <Link to="/" className="font-light text-sm tracking-[0.3em] text-zinc-400 hover:text-white transition-colors">
                  STUDIO YONA
                </Link>
              </div>
              
              {/* Center: Navigation */}
              <div className="flex justify-center space-x-8 text-xs tracking-[0.15em] font-light">
                <Link to="/" className="text-zinc-400 hover:text-white transition-colors">HOME</Link>
                <Link to="/projects" className="text-zinc-400 hover:text-white transition-colors">PROJECTS</Link>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">ABOUT</Link>
                <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">CONTACT</Link>
              </div>
              
              {/* Right: Social */}
              <div className="flex justify-end space-x-6 text-xs tracking-[0.15em] font-light">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">LINKEDIN</a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center pt-8 mt-8 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 font-light tracking-wide">
                © Studio Yona. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
