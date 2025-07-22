import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <title>Studio Yona</title>
      
      <div className="min-h-screen bg-zinc-900">
        {/* Sticky Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-light text-sm tracking-[0.3em] text-white hover:text-zinc-300 transition-colors">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-10 text-xs tracking-[0.2em] font-light">
                <Link to="/projects" className="text-zinc-300 hover:text-white transition-colors">
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

        {/* Hero Section - Fullscreen with New Image */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Image - New Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbf94ab26c7844f828d801d72e56d3d51?format=webp&width=800"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
            {/* Minimal overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-7xl md:text-9xl font-thin tracking-tight text-white mb-6 font-serif">
              STUDIO YONA
            </h1>
            <p className="text-2xl md:text-3xl font-light tracking-wide text-white/90 font-serif">
              Bespoke Residential Design Studio
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Intro Statement with First Image Background */}
        <section className="py-24 relative">
          {/* Background Image - First Image */}
          <div className="absolute inset-0">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb50a92f53f2b45f8804342761c78ddae?format=webp&width=800"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-3xl md:text-4xl font-light leading-relaxed text-white font-serif">
              Studio Yona is a Los Angeles-based design practice crafting immersive environments 
              inspired by global exploration and California minimalism.
            </p>
          </div>
        </section>

        {/* Featured Work - With First Image Background */}
        <section className="py-24 relative">
          {/* Background Image - First Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe11596530ee5469ba004010cca139775?format=webp&width=800"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-white/75"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-thin tracking-tight text-center text-black mb-20 font-serif">
              Featured Work
            </h2>
            
            {/* 2x2 Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Malibu Residence */}
              <Link to="/projects/malibu-residence" className="group relative overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbf94ab26c7844f828d801d72e56d3d51?format=webp&width=800"
                  alt="Malibu Residence Dining Room Interior"
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-102"
                  style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold tracking-wide mb-2 font-serif">Malibu Residence</h3>
                    <p className="text-sm tracking-[0.15em] uppercase">Malibu, CA</p>
                  </div>
                </div>
              </Link>

              {/* Donna Residence 2 */}
              <Link to="/projects/donna-residence-2" className="group relative overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg"
                  alt="Donna Residence 2"
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-102"
                  style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold tracking-wide mb-2 font-serif">Donna Residence 2</h3>
                    <p className="text-sm tracking-[0.15em] uppercase">Los Angeles, CA</p>
                  </div>
                </div>
              </Link>

              {/* Tennessee Airbnb */}
              <Link to="/projects/tennessee-airbnb" className="group relative overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg"
                  alt="Tennessee Airbnb"
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-102"
                  style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold tracking-wide mb-2 font-serif">Tennessee Airbnb</h3>
                    <p className="text-sm tracking-[0.15em] uppercase">Tennessee Mountains</p>
                  </div>
                </div>
              </Link>

              {/* Lake Sherwood Residence */}
              <Link to="/projects/lake-sherwood-residence" className="group relative overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg"
                  alt="Lake Sherwood Residence"
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-102"
                  style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold tracking-wide mb-2 font-serif">Lake Sherwood Residence</h3>
                    <p className="text-sm tracking-[0.15em] uppercase">Lake Sherwood, CA</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3D Visualization Section with Second Image Background */}
        <section className="py-24 relative">
          {/* Background Image - Second Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd9d08034649645899eb7641a84790249?format=webp&width=800"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
                <img
                  src="https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg"
                  alt="3D Visualization Process"
                  className="w-full h-[500px] object-cover object-center"
                  style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Right: Content */}
              <div className="lg:pl-12 text-white">
                <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-8 font-serif">
                  Design, Visualized
                </h2>
                <p className="text-xl font-light leading-relaxed mb-8 text-zinc-200">
                  Studio Yona transforms early design ideas into detailed spatial previews using 
                  cutting-edge 3D and VR tools. Every decision is seen before it's built.
                </p>
                <p className="text-lg font-light leading-relaxed text-zinc-300">
                  This immersive visualization process helps clients feel confident, informed, 
                  and inspired throughout their design journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration + CTA Section with Third Image Background */}
        <section className="py-24 relative">
          {/* Background Image - Third Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe82a9849f5c446ab9706faf690282ae8?format=webp&width=800"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed text-white mb-12 font-serif italic">
              "We don't just create spaces — we guide people through the design journey with intention and precision."
            </blockquote>
            
            <Link 
              to="/contact"
              className="inline-block px-12 py-4 bg-black/60 border border-white/50 text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-sm backdrop-blur-sm"
            >
              GET IN TOUCH
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
                �� Studio Yona. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
