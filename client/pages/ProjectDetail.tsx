import { Link, useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const projects: { [key: string]: any } = {
    'vista-ridge-residence': {
      title: 'Vista Ridge Residence',
      location: 'Beverly Hills, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '6,800 SF',
      materials: 'White oak, natural stone, steel, glass',
      services: 'Architecture, Interior Design, Landscape Coordination',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6075aa98e58e4e8ab515b72283788bc6?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Vista Ridge Residence represents the pinnacle of contemporary luxury living. This architectural masterpiece seamlessly blends indoor and outdoor spaces through carefully orchestrated material choices and spatial relationships that celebrate both privacy and panoramic city views.',
        'The design strategy embraces a sophisticated material palette of warm white oak, natural stone, and precision steel detailing. Floor-to-ceiling glazing dissolves traditional boundaries while custom millwork and integrated storage solutions maintain the clean aesthetic throughout. Each space is designed as a curated experience, from the dramatic entry sequence to the serene master suite.',
        'Sustainable design principles guide every decision, from passive solar orientation to high-performance building systems. The result is a home that not only reduces environmental impact but creates healthier, more comfortable living spaces. Natural ventilation, abundant daylight, and thoughtful material selection contribute to an atmosphere of refined tranquility.',
        'The landscape design extends the architectural language into the outdoor spaces, creating seamless transitions between interior and exterior living. Carefully selected plantings, water features, and outdoor living areas complete this vision of modern California living at its finest.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F755101a7a8b94d54b1ab72b8479e8d3a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd313f09f11b149e69b27441c42e32058?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb692eeb7a94644debac0bed5edeaf500?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff033852197d740d09e27104901029c88?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff980f05a580849aa948acd3f7e51c14d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4555307562e4417eb6b17c7e72c15831?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F018470904fc44c269cc5104763fa7596?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2d25ab7bcd7145df9751df3ddb334aa5?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1ca7a0921e984f129c063ffc92144307?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F430f8e5abce54bf38c35e0058a4d7dcd?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb537230b4179400cabd2ad02f8f2947e?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe5eebc3cf15748dfb7ef32c49d908e2e?format=webp&width=1200'
      ]
    },
    'pacific-modern-residence': {
      title: 'Pacific Modern Residence',
      location: 'Manhattan Beach, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '4,200 SF',
      materials: 'Stucco, steel, glass, native plantings',
      services: 'Architecture, Interior Design, Landscape Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Pacific Modern Residence exemplifies contemporary California living through its clean geometric forms and seamless integration with the landscape. This single-story design prioritizes horizontal lines and expansive glazing to create a strong connection between interior and exterior spaces.',
        'The architectural approach emphasizes simplicity and material honesty, with crisp white stucco walls providing a neutral backdrop for the carefully curated landscape design. Floor-to-ceiling windows flood the interior with natural light while maintaining privacy through thoughtful orientation and strategic plantings.',
        'Sustainable design principles guide the project, from drought-tolerant native plantings to high-performance building systems. The landscape design features bold strips of hardscape alternating with planted areas, creating a contemporary interpretation of the classic California garden.',
        'The result is a residence that feels both timeless and thoroughly modern, offering a serene retreat that celebrates the beauty of simplified living and the California indoor-outdoor lifestyle.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200'
      ]
    }
  };

  const project = projects[id || ''] || {
    title: 'Project',
    location: 'California',
    year: '2024',
    program: 'Residential',
    size: 'TBD',
    materials: 'Various sustainable materials',
    services: 'Full Design Services',
    hero: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
    description: ['Located in the heart of Los Angeles, this project page is currently being developed. Please check back soon for detailed information about this Studio Yona design.'],
    images: ['https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg']
  };

  return (
    <>
      <title>{project.title} - Studio Yona</title>
      
      <div className="min-h-screen bg-white" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-medium text-sm tracking-[0.3em] text-black hover:text-gray-600 transition-colors">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-12 text-xs tracking-[0.2em] font-medium">
                <Link to="/projects" className="text-black">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-black hover:text-gray-600 transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-black hover:text-gray-600 transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Image Section */}
        <section className="relative" style={{ height: '750px', width: '100vw' }}>
          <img 
            src={project.hero}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Hero Overlay Text */}
          <div className="absolute bottom-12 left-16 text-white">
            <h1 className="text-5xl font-bold mb-2" style={{ fontFamily: '"Work Sans", sans-serif', color: '#FFFFFF' }}>
              {project.title}
            </h1>
            <p className="text-lg font-normal" style={{ fontFamily: '"Work Sans", sans-serif', color: '#FFFFFF' }}>
              {project.location} · {project.year}
            </p>
          </div>
        </section>

        {/* Project Intro Paragraph */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-xl font-light leading-relaxed" style={{ 
              fontFamily: '"Work Sans", sans-serif', 
              color: '#222222',
              lineHeight: '34px',
              maxWidth: '880px',
              margin: '0 auto'
            }}>
              {project.description[0]}
            </p>
          </div>
        </section>

        {/* Alternating Image + Text Sections */}
        {project.description.slice(1).map((paragraph: string, index: number) => (
          <section key={index} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8">
              <div className={`flex items-start gap-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} max-md:flex-col max-md:gap-8`}>
                {/* Image Column */}
                <div className="w-full md:w-3/5">
                  <img 
                    src={project.images[Math.min(index + 1, project.images.length - 1)]}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Text Column */}
                <div className="w-full md:w-2/5 pt-8">
                  <p className="text-lg font-light leading-8" style={{ 
                    fontFamily: '"Work Sans", sans-serif', 
                    color: '#222222',
                    lineHeight: '32px'
                  }}>
                    {paragraph}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Full-Width Image Section */}
        <section className="py-24 bg-white">
          <div className="w-full">
            <img 
              src={project.images[project.images.length - 1]}
              alt={`${project.title} - Full Width`}
              className="w-full h-auto object-cover"
              style={{ width: '100vw' }}
            />
          </div>
        </section>

        {/* Image Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((image: string, index: number) => (
                <div key={index} className="w-full">
                  <img 
                    src={image}
                    alt={`${project.title} - Gallery ${index + 1}`}
                    className="w-full h-80 object-cover"
                    style={{ width: '400px', maxWidth: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Navigation */}
              <div className="flex space-x-8 text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif', color: '#222222' }}>
                <Link to="/projects" className="hover:text-gray-600 transition-colors">Projects</Link>
                <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
              </div>
              
              {/* Center: Copyright */}
              <div className="text-center">
                <p className="text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif', color: '#222222' }}>
                  © Studio Yona. All rights reserved.
                </p>
              </div>
              
              {/* Right: Social */}
              <div className="flex justify-end space-x-8 text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif', color: '#222222' }}>
                <a href="#" className="hover:text-gray-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
