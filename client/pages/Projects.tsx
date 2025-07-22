import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      id: 'malibu-residence',
      title: 'Malibu Residence',
      location: 'Malibu, CA',
      year: '2024',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbf94ab26c7844f828d801d72e56d3d51?format=webp&width=1200'
    },
    {
      id: 'donna-residence-2',
      title: 'Donna Residence 2',
      location: 'Los Angeles, CA',
      year: '2024',
      image: 'https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg'
    },
    {
      id: 'fletcher',
      title: 'Fletcher',
      location: 'Silver Lake, CA',
      year: '2022',
      image: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg'
    },
    {
      id: 'lake-sherwood-residence',
      title: 'Lake Sherwood Residence',
      location: 'Lake Sherwood, CA',
      year: '2023',
      image: 'https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg'
    },
    {
      id: 'ingomar',
      title: 'Ingomar',
      location: 'Tarzana, CA',
      year: '2022',
      image: 'https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg'
    },
    {
      id: 'cantara-residence',
      title: 'Cantara Residence',
      location: 'Studio City, CA',
      year: '2023',
      image: 'https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg'
    }
  ];

  return (
    <>
      <title>Projects - Studio Yona</title>
      
      <div className="min-h-screen relative bg-stone-100">
        {/* Background Image - Second Image */}
        <div className="fixed inset-0 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F834b90160d2445338477337a330243a7?format=webp&width=1920"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-100/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-light text-sm tracking-[0.3em] text-black hover:text-gray-600 transition-colors">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-10 text-xs tracking-[0.2em] font-light">
                <Link to="/projects" className="text-black">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-20 pt-12">
              <h1 className="text-6xl md:text-8xl font-thin tracking-tight text-black mb-8 font-serif">
                Projects
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed font-serif" style={{ color: '#EDEDED', textShadow: '0 2px 4px rgba(0,0,0,0.3)', lineHeight: '1.7' }}>
                A curated selection of bespoke residential designs crafted
                for discerning clients across California and beyond.
              </p>
            </div>

            {/* Projects Grid - Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group relative overflow-hidden aspect-[3/2] transition-all duration-500 hover:scale-[1.02] mb-8"
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                    style={{ filter: 'contrast(125%) brightness(110%) saturate(130%)' }}
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-1 font-serif">
                        {project.title}
                      </h2>
                      <p className="text-sm tracking-[0.15em] uppercase text-white/80">
                        {project.location} {project.year && `• ${project.year}`}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black border-t border-zinc-800 py-12">
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
