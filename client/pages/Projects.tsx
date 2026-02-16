import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

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
      id: 'dumaine-ave-residence',
      title: 'Dumaine Ave Residence',
      location: 'Oak Park, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0de45d8040df45ea9b3cc57eb27d41eb?format=webp&width=1200'
    },
    {
      id: 'sculptural-modern-estate',
      title: 'Westwood condo',
      location: 'Westwood, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fdad90f77fff549209726ceaffd0070dc?format=webp&width=1200'
    },
    {
      id: 'vista-ridge-residence',
      title: 'Malibu Residence',
      location: 'Malibu, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6075aa98e58e4e8ab515b72283788bc6?format=webp&width=1200'
    },
    {
      id: 'modular-container-retreat',
      title: 'Tennessee Airbnb',
      location: 'Tennessee',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe8caa55f02bc40609e1e62e78f6eeac4?format=webp&width=1200'
    },
    {
      id: 'stafford-road-residence',
      title: 'Stafford Road Residence',
      location: 'Thousand Oaks, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffecc4596708c45f38a593ff0ccf9eb68?format=webp&width=1200'
    },
    {
      id: 'altadena-project-1',
      title: 'Altadena project 1',
      location: 'Altadena, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1e4c493f101949e789ddc9e75d5f594a?format=webp&width=1200'
    },
    {
      id: 'classical-estate-pavilion',
      title: 'Lake Sherwood Residence',
      location: 'Lake Sherwood, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F61a87c373e2b40e19a476563cd2b425d?format=webp&width=1200'
    },
    {
      id: 'modern-farmhouse-estate',
      title: 'Old Agoura Residence',
      location: 'Old Agoura, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0ab0e4828dab4ed98d07468046290137?format=webp&width=1200'
    },
    {
      id: 'desert-contemporary-residence',
      title: 'Donna Residence 1',
      location: 'Tarzana, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc8a9ada427c446d7990b3d28801e1531?format=webp&width=1200'
    },
    {
      id: 'pacific-modern-residence',
      title: 'Cantara Residence',
      location: 'Moorpark, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200'
    },
    {
      id: 'contemporary-curve-residence',
      title: 'Oak Park Residence',
      location: 'Oak Park, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200'
    },
    {
      id: 'contemporary-twin-homes',
      title: 'The Ingomar Residence',
      location: 'Reseda, CA',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8235235c11594480b4e40970683ee6bd?format=webp&width=1200'
    }
  ];

  return (
    <>
      <title>Projects - Studio Yona</title>

      <Header bgColor="black" invertLogo={true} />

      <div className="min-h-screen bg-black">
        {/* Projects Grid - Full Width, No Gaps */}
        <section className="relative pt-20 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div key={project.id} className="p-3 md:p-4">
                <Link
                  to={`/projects/${project.id}`}
                  className={`group relative overflow-hidden transition-all duration-700 block rounded-[14px] ${
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
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.01]"
                    style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                    loading="lazy"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>

                  {/* Project Info with Blur Background */}
                  <div className="absolute inset-0 flex items-end p-8 md:p-12">
                    <div className="bg-black/40 backdrop-blur-md px-8 py-6 rounded-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white mb-2 font-serif">
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
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-zinc-800 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Logo */}
              <div>
                <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                    alt="Studio Yona"
                    className="h-14 md:h-16 w-auto invert"
                  />
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
                <a
                  href="https://www.instagram.com/studio.yona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-yona-962892156?trk=people-guest_people_search-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  LINKEDIN
                </a>
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
