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
    },
    'sculptural-modern-estate': {
      title: 'Sculptural Modern Estate',
      location: 'Bel Air, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '8,500 SF',
      materials: 'White oak, Calacatta marble, polished concrete, glass',
      services: 'Architecture, Interior Design, Custom Millwork Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb66eca013a5a426b81bb00efe4c8a2ae?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Sculptural Modern Estate represents a revolutionary approach to residential design where architecture becomes art. This extraordinary residence challenges conventional forms through fluid, sculptural geometries that create a truly immersive living experience. Every surface, every curve, every detail has been meticulously crafted to blur the boundaries between art and habitation.',
        'The design philosophy centers on flowing, organic forms that seamlessly integrate living spaces into a cohesive sculptural whole. Custom millwork in warm white oak contrasts beautifully with the pristine Calacatta marble surfaces, while strategically placed lighting emphasizes the dramatic architectural curves. The wine storage becomes a focal point, enclosed in glass to showcase the collection as living art.',
        'Advanced construction techniques were employed to achieve the complex geometries, with custom-formed concrete and precision millwork creating spaces that feel both monumental and intimate. The material palette emphasizes tactile richness: the warmth of oak against cool marble, the play of natural and artificial light across curved surfaces, and the seamless integration of storage and display.',
        'Each room flows effortlessly into the next, creating a spatial narrative that unfolds as one moves through the residence. This is architecture as sculpture, living as art – a testament to the power of bold design vision executed with uncompromising craftsmanship and attention to detail.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fdad90f77fff549209726ceaffd0070dc?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feb03949d992d404f9ce6ba3af0e58a1e?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa18f76f6822149c78464e1739bcf079d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0e89bcb2084645c384250b19e88ce930?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7d2ec64131ec45b79eb33e10371629e9?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F50c4323a832d4035b3bd92bf54681c02?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F98ee00bebbcd48319f6650e3c4a2a221?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd4a1079c959f4038bba3f923a6cf1215?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7c96c93058f04c159bf6a55e6cab9efb?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fadc249d9afd64958b2c69e281dc78ce5?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6c2a2cbe006749c0831e91d31b895e42?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd361b99537e44f058ac933a972ad1671?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F628f0af182ce47e6a3c5ec268b30df79?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F20181e61fb7c4cd79e15da3455202c51?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4c460e3dbce646cfad6bfa6a8fc79519?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F86f2c36b4c93492a844dbab02d0e86e3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F34998e4021244400b47e03f889a6157c?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F813809e0d8a44383814dc5f6426c41e3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffa73e0b1371f446fbb24275759c3df5b?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F06f3674678c1411c97f4900afcd2c85f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F835512a5fd854ef6a994c7435b7e8908?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1fc548a7ef2644f982f008bcdad74efd?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3e8ae2bd011a416b8f055dcfe9039408?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F839d58cc04994a579ebd2a4b6ca8c7a0?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F615b8b59fdc249239b5f5bbbba7bb116?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6006aa6c59044e5c971f31760cf123da?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F889a9208c6684eddb976f7eacac9612b?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F27e33a1da27c4365bddad2f27ba75ae6?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F75d7222bae504e5b80f111f834eb7d6d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fec77f9c4b7144eefbc628636be2fdcaa?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb289e4ac34194c01861f30682243da66?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F31784cec3ee74a4190e5aae10378c425?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc7784b31fdac4b0a8f1491eeee4d6544?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3cbbf7e82aa94b1b8c991a3e6a5c9f25?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fac4fcf335e344bb09fcf4f0ddf4977cc?format=webp&width=1200'
      ]
    },
    'modern-farmhouse-estate': {
      title: 'Modern Farmhouse Estate',
      location: 'Montecito, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '7,200 SF',
      materials: 'Board and batten siding, natural stone, steel, glass',
      services: 'Architecture, Landscape Design, Pool Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0ab0e4828dab4ed98d07468046290137?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Modern Farmhouse Estate reimagines the classic American farmhouse through a contemporary lens. This sophisticated residence seamlessly blends traditional farmhouse charm with cutting-edge design principles, creating a home that feels both timeless and thoroughly modern. The dramatic pool area serves as the centerpiece of outdoor living, while carefully orchestrated landscaping creates privacy and natural beauty.',
        'The architectural approach emphasizes clean lines and honest materials, with board and batten siding in crisp white contrasting beautifully against dark metal accents and natural stone elements. The gabled rooflines and timber framing nod to farmhouse tradition while floor-to-ceiling windows and open-plan living spaces embrace contemporary lifestyle needs.',
        'Landscape design plays a crucial role in the overall composition, with native plantings and mature trees creating a parklike setting. The infinity-edge pool integrates seamlessly with the architecture, while the separate guest pavilion and utility structures complete the compound-style layout. Every detail, from the custom garage doors to the pool deck materials, reflects a commitment to quality and design excellence.',
        'This project demonstrates how traditional architectural typologies can be evolved for contemporary living while maintaining their essential character and charm. The result is a residence that celebrates both California\'s indoor-outdoor lifestyle and the enduring appeal of American farmhouse design.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff6dab669a17e41d69957b3ce4e4e4683?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F67ffde0eccc8412c9449a5628e22b74f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F711b3c945aac48f7989432f84c91137f?format=webp&width=1200'
      ]
    },
    'contemporary-curve-residence': {
      title: 'Contemporary Curve Residence',
      location: 'Santa Barbara, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '5,400 SF',
      materials: 'Stucco, glass, steel, natural stone',
      services: 'Architecture, Landscape Design, Interior Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Contemporary Curve Residence represents a masterful exploration of modern residential design through the subtle interplay of curved and linear elements. This single-story home embraces a sophisticated approach to contemporary living, where clean architectural lines are softened by organic curves that create visual interest and enhance the human experience of space.',
        'The design strategy centers on creating seamless indoor-outdoor connections through floor-to-ceiling glazing and carefully planned sight lines. The curved driveway and entry sequence choreograph arrival, while the dramatic corner window bay becomes a focal point that brings abundant natural light into the main living spaces. The material palette emphasizes simplicity and elegance with crisp white stucco contrasting against dark window frames and natural landscaping.',
        'Landscape design plays an integral role in the overall composition, with native drought-tolerant plantings creating layers of texture and seasonal interest. The palm trees anchor the composition while providing vertical counterpoints to the horizontal emphasis of the architecture. Every detail, from the entry pathway to the garage integration, reflects a commitment to both aesthetic excellence and functional clarity.',
        'This residence demonstrates how contemporary design can achieve both sophistication and warmth, creating spaces that feel both monumental and intimate. The result is a home that celebrates California\'s year-round outdoor lifestyle while providing a serene retreat from urban intensity.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200'
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
