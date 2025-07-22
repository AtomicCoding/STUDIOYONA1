import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      id: 'malibu-residence',
      title: 'Malibu Residence',
      location: 'Malibu, CA',
      image: 'https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg',
      year: '2024'
    },
    {
      id: 'donna-residence-2',
      title: 'Donna Residence 2',
      location: 'Los Angeles, CA',
      image: 'https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg',
      year: '2024'
    },
    {
      id: 'lake-sherwood-residence',
      title: 'Lake Sherwood Residence',
      location: 'Lake Sherwood, CA',
      image: 'https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg',
      year: '2023'
    },
    {
      id: 'bentley-condo',
      title: 'Bentley Condo',
      location: 'West Hollywood, CA',
      image: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
      year: '2023'
    },
    {
      id: 'tennessee-airbnb',
      title: 'Tennessee Airbnb',
      location: 'Tennessee Mountains',
      image: 'https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg',
      year: '2023'
    },
    {
      id: 'cantara-residence',
      title: 'Cantara Residence',
      location: 'Studio City, CA',
      image: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
      year: '2023'
    },
    {
      id: 'fletcher',
      title: 'Fletcher',
      location: 'Silver Lake, CA',
      image: 'https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg',
      year: '2022'
    },
    {
      id: 'ingomar',
      title: 'Ingomar',
      location: 'Tarzana, CA',
      image: 'https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg',
      year: '2022'
    }
  ];

  return (
    <>
      <title>Projects - Studio Yona</title>
      
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-light text-sm tracking-[0.2em] text-black hover:opacity-70 transition-opacity">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-8 text-xs tracking-[0.15em] font-light">
                <Link to="/projects" className="text-black">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-black hover:opacity-70 transition-opacity">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-black hover:opacity-70 transition-opacity">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-thin tracking-tight text-black mb-6">
                Projects
              </h1>
              <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
                A curated selection of bespoke residential designs crafted 
                for discerning clients across California and beyond.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {projects.map((project, index) => (
                <Link 
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group"
                >
                  <div className="relative">
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-[4/3] mb-6">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-light tracking-wide text-black group-hover:opacity-70 transition-opacity">
                          {project.title}
                        </h2>
                        <span className="text-sm font-light text-gray-500 tracking-wide">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-base font-light text-gray-600 tracking-wide">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Footer Navigation */}
              <div className="flex space-x-8 text-xs tracking-[0.15em] font-light mb-8 md:mb-0">
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  HOME
                </Link>
                <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  CONTACT
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6 mb-8 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-xs tracking-[0.15em]">
                  INSTAGRAM
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-xs tracking-[0.15em]">
                  LINKEDIN
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 font-light tracking-wide">
                © Studio Yona. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
