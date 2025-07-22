import { Link, useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const projects: { [key: string]: any } = {
    'malibu-residence': {
      title: 'Malibu Residence',
      location: 'Malibu, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '4,200 SF',
      materials: 'Board-formed concrete, reclaimed wood, weathered steel',
      services: 'Concept Design through Construction Coordination',
      hero: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
      description: [
        'Inspired by ocean light and hillside topography, this residence weaves warmth and modernity into a single, sculpted volume. Perched on the dramatic cliffs of Malibu, the design emerges from our client\'s desire to create a sanctuary that celebrates both intimate family moments and grand entertaining.',
        'The architectural strategy centers on a series of interconnected pavilions that step down the hillside, each oriented to capture specific views while maintaining privacy. Floor-to-ceiling glass walls dissolve the boundaries between interior and exterior, creating a seamless flow between living spaces and the expansive Pacific beyond.',
        'Material selection reflects the coastal context: weathered steel and natural stone anchor the structure to its site, while warm wood interiors provide contrast and comfort. Every detail, from the custom millwork to the landscape integration, was designed to enhance the inhabitant\'s connection to this extraordinary location.',
        'The result is an architecture of restraint and poetry—a home that feels both monumental in its setting and intimate in its human scale, where each room frames a different aspect of the dramatic landscape.'
      ],
      images: [
        'https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg',
        'https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg',
        'https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg'
      ]
    },
    'donna-residence-2': {
      title: 'Donna Residence 2',
      location: 'Los Angeles, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '3,800 SF',
      materials: 'Walnut paneling, natural stone, bronze details',
      services: 'Full Design Development and Implementation',
      hero: 'https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg',
      description: [
        'Located in the heart of Los Angeles, Donna Residence 2 represents a thoughtful evolution of urban living. This project transformed a modest 1960s structure into a contemporary family home that balances privacy with connection to the surrounding neighborhood.',
        'The design approach focused on creating a series of interlocking volumes that define distinct zones for living, working, and retreat. A central courtyard serves as the organizing element, bringing natural light deep into the plan while providing a private outdoor sanctuary.',
        'Material warmth was paramount: rich walnut paneling, natural stone, and bronze details create layers of texture and refinement. The interplay of solid and void, opacity and transparency, generates a sense of discovery as one moves through the space.',
        'This residence demonstrates how contemporary design can honor both context and creativity, resulting in a home that feels both rooted in place and forward-looking in its spatial innovation.'
      ],
      images: [
        'https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg',
        'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
        'https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg'
      ]
    },
    'lake-sherwood-residence': {
      title: 'Lake Sherwood Residence',
      location: 'Lake Sherwood, CA',
      year: '2023',
      program: 'Single-Family Residence',
      size: '5,600 SF',
      materials: 'Board-formed concrete, blackened steel, local stone',
      services: 'Master Planning through Construction Administration',
      hero: 'https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg',
      description: [
        'Set within the tranquil landscape of Lake Sherwood, this residence explores the relationship between built form and natural setting. The design responds to the site\'s unique topography, creating a home that appears to emerge organically from the rolling hills.',
        'The architectural parti consists of two primary bars connected by a transparent bridge, allowing the landscape to flow beneath and through the structure. This gesture preserves existing mature oaks while framing views of the lake beyond.',
        'Interior spaces are conceived as a sequence of light-filled volumes, each with its own character and connection to the outdoors. The material palette emphasizes natural textures: board-formed concrete, blackened steel, and locally sourced stone create a sense of permanence and belonging.',
        'Lake Sherwood Residence demonstrates our commitment to site-specific design, where architecture and landscape engage in a careful dance of mutual enhancement and respect.'
      ],
      images: [
        'https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg',
        'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
        'https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg'
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
    description: ['This project page is currently being developed. Please check back soon for detailed information about this Studio Yona design.'],
    images: ['https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg']
  };

  return (
    <>
      <title>{project.title} - Studio Yona</title>
      
      <div className="min-h-screen bg-zinc-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-light text-sm tracking-[0.3em] text-white hover:text-zinc-300 transition-colors">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-10 text-xs tracking-[0.2em] font-light">
                <Link to="/projects" className="text-white">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-zinc-300 hover:text-white transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Image */}
        <section className="relative h-screen">
          <img 
            src={project.hero}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Hero Content */}
          <div className="absolute bottom-12 left-6 right-6 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-6 font-serif">
                    {project.title}
                  </h1>
                  <p className="text-2xl font-light tracking-wide text-zinc-200">
                    {project.location} · {project.year}
                  </p>
                </div>
                
                <Link 
                  to="/projects"
                  className="hidden md:block px-8 py-3 bg-black/60 border border-white/30 text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black transition-all duration-500 rounded-sm backdrop-blur-sm"
                >
                  ALL PROJECTS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details - Dark Background */}
        <section className="py-24 bg-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
              {/* Project Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8 lg:sticky lg:top-32">
                  <div>
                    <h3 className="text-sm font-light tracking-[0.1em] text-zinc-500 mb-3 uppercase">
                      Program
                    </h3>
                    <p className="text-base font-light text-white">
                      {project.program}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-[0.1em] text-zinc-500 mb-3 uppercase">
                      Location
                    </h3>
                    <p className="text-base font-light text-white">
                      {project.location}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-[0.1em] text-zinc-500 mb-3 uppercase">
                      Year
                    </h3>
                    <p className="text-base font-light text-white">
                      {project.year}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-[0.1em] text-zinc-500 mb-3 uppercase">
                      Size
                    </h3>
                    <p className="text-base font-light text-white">
                      {project.size}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-[0.1em] text-zinc-500 mb-3 uppercase">
                      Materials
                    </h3>
                    <p className="text-base font-light text-white">
                      {project.materials}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-[0.1em] text-zinc-500 mb-3 uppercase">
                      Services
                    </h3>
                    <p className="text-base font-light text-white">
                      {project.services}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {project.description.map((paragraph: string, index: number) => (
                    <p key={index} className="text-xl font-light leading-relaxed text-zinc-200">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery - Black Background */}
        <section className="py-12 bg-black">
          <div className="space-y-1">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="w-full">
                <img 
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-[80vh] object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Next Project CTA - Dark Background */}
        <section className="py-24 bg-zinc-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-thin tracking-tight text-white mb-12 font-serif">
              Explore More Work
            </h2>
            <Link 
              to="/projects"
              className="inline-block px-12 py-4 bg-black border border-zinc-600 text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-sm"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        </section>

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
