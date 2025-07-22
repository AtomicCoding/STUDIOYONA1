import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <title>Studio Yona</title>
      
      <div className="min-h-screen bg-stone-100">
        {/* Clean Navigation - Olson Kundig Style */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-100/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-light text-sm tracking-[0.3em] text-black hover:text-stone-600 transition-colors">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links - Minimal */}
              <div className="flex space-x-12 text-xs tracking-[0.2em] font-light">
                <Link to="/projects" className="text-stone-600 hover:text-black transition-colors">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-stone-600 hover:text-black transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-stone-600 hover:text-black transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - Cinematic & Immersive */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Image - High Quality */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbf94ab26c7844f828d801d72e56d3d51?format=webp&width=1920"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
              loading="lazy"
            />
            {/* Minimal overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight text-white mb-6 font-serif">
              STUDIO YONA
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/90 font-serif">
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

        {/* Intro Statement - Immersive Background */}
        <section className="py-32 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb50a92f53f2b45f8804342761c78ddae?format=webp&width=1920"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white font-serif">
              Studio Yona is a Los Angeles-based design practice crafting immersive environments 
              inspired by global exploration and California minimalism.
            </p>
          </div>
        </section>

        {/* Featured Work - Vibrant Background */}
        <section className="py-32 relative">
          {/* Background Image - Minimal Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe11596530ee5469ba004010cca139775?format=webp&width=1920"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white/8"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-center text-black mb-24 font-serif">
              Featured Work
            </h2>
            
            {/* Featured Projects Grid - Responsive & Clean */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {/* Malibu Residence */}
              <Link to="/projects/malibu-residence" className="group relative overflow-hidden aspect-[3/2] transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbf94ab26c7844f828d801d72e56d3d51?format=webp&width=1200"
                  alt="Malibu Residence"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl lg:text-3xl font-light tracking-wide mb-2 font-serif">Malibu Residence</h3>
                    <p className="text-sm tracking-[0.15em] uppercase text-white/80">Malibu, CA • 2024</p>
                  </div>
                </div>
              </Link>

              {/* Donna Residence 2 */}
              <Link to="/projects/donna-residence-2" className="group relative overflow-hidden aspect-[3/2] transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg"
                  alt="Donna Residence 2"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl lg:text-3xl font-light tracking-wide mb-2 font-serif">Donna Residence 2</h3>
                    <p className="text-sm tracking-[0.15em] uppercase text-white/80">Los Angeles, CA • 2024</p>
                  </div>
                </div>
              </Link>

              {/* Fletcher */}
              <Link to="/projects/fletcher" className="group relative overflow-hidden aspect-[3/2] transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg"
                  alt="Fletcher"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl lg:text-3xl font-light tracking-wide mb-2 font-serif">Fletcher</h3>
                    <p className="text-sm tracking-[0.15em] uppercase text-white/80">Silver Lake, CA • 2022</p>
                  </div>
                </div>
              </Link>

              {/* Ingomar */}
              <Link to="/projects/ingomar" className="group relative overflow-hidden aspect-[3/2] transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg"
                  alt="Ingomar"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl lg:text-3xl font-light tracking-wide mb-2 font-serif">Ingomar</h3>
                    <p className="text-sm tracking-[0.15em] uppercase text-white/80">Tarzana, CA • 2022</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3D Visualization Section - Enhanced Vibrancy */}
        <section className="py-32 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd9d08034649645899eb7641a84790249?format=webp&width=1920"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
              loading="lazy"
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
                  style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Right: Content */}
              <div className="lg:pl-12 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-8 font-serif">
                  Design, Visualized
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-zinc-200">
                  Studio Yona transforms early design ideas into detailed spatial previews using 
                  cutting-edge 3D and VR tools. Every decision is seen before it's built.
                </p>
                <p className="text-base md:text-lg font-light leading-relaxed text-zinc-300">
                  This immersive visualization process helps clients feel confident, informed, 
                  and inspired throughout their design journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration + CTA Section */}
        <section className="py-32 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe82a9849f5c446ab9706faf690282ae8?format=webp&width=1920"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white mb-12 font-serif italic">
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
