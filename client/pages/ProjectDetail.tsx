import { Link, useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const projects: { [key: string]: any } = {
    'malibu-residence': {
      title: 'Malibu Residence',
      location: 'Malibu, CA',
      year: '2024',
      type: 'Residential',
      size: '4,200 SF',
      hero: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
      description: [
        'Perched on the dramatic cliffs of Malibu, this residence represents a harmonious dialogue between contemporary design and the raw beauty of the Pacific coastline. The project emerged from our client\'s desire to create a sanctuary that would celebrate both intimate family moments and grand entertaining.',
        'The design strategy centers on a series of interconnected pavilions that step down the hillside, each oriented to capture specific views while maintaining privacy. Floor-to-ceiling glass walls dissolve the boundaries between interior and exterior, creating a seamless flow between living spaces and the expansive ocean beyond.',
        'Material selection reflects the coastal context: weathered steel and natural stone anchor the structure to its site, while warm wood interiors provide contrast and comfort. Every detail, from the custom millwork to the landscape integration, was designed to enhance the inhabitant\'s connection to this extraordinary location.',
        'The result is an architecture of restraint and poetry—a home that feels both monumental in its setting and intimate in its human scale.'
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
      type: 'Residential',
      size: '3,800 SF',
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
      type: 'Residential',
      size: '5,600 SF',
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
    type: 'Residential',
    size: 'TBD',
    hero: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
    description: ['This project page is currently being developed. Please check back soon for detailed information about this Studio Yona design.'],
    images: ['https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg']
  };

  return (
    <>
      <title>{project.title} - Studio Yona</title>
      
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
                <Link to="/projects" className="text-black hover:opacity-70 transition-opacity">
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

        {/* Hero Image */}
        <div className="relative h-screen">
          <img 
            src={project.hero}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Hero Content */}
          <div className="absolute bottom-12 left-6 right-6 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl font-light tracking-wide">
                    {project.location} • {project.year}
                  </p>
                </div>
                
                <Link 
                  to="/projects"
                  className="hidden md:block px-8 py-3 border border-white text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black transition-all duration-500"
                >
                  ALL PROJECTS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
              {/* Project Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8 lg:sticky lg:top-32">
                  <div>
                    <h3 className="text-sm font-light tracking-wide text-gray-500 mb-2 uppercase">
                      Type
                    </h3>
                    <p className="text-base font-light text-black">
                      {project.type}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-wide text-gray-500 mb-2 uppercase">
                      Location
                    </h3>
                    <p className="text-base font-light text-black">
                      {project.location}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-wide text-gray-500 mb-2 uppercase">
                      Year
                    </h3>
                    <p className="text-base font-light text-black">
                      {project.year}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-light tracking-wide text-gray-500 mb-2 uppercase">
                      Size
                    </h3>
                    <p className="text-base font-light text-black">
                      {project.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {project.description.map((paragraph: string, index: number) => (
                    <p key={index} className="text-xl font-light leading-relaxed text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="pb-24">
          <div className="space-y-12">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="w-full">
                <img 
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-[70vh] object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-thin tracking-tight text-black mb-8">
              Explore More Work
            </h2>
            <Link 
              to="/projects"
              className="inline-block px-12 py-4 border border-black text-black font-light tracking-[0.15em] text-sm hover:bg-black hover:text-white transition-all duration-500"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        </section>

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
