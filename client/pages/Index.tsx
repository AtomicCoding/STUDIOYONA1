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
            {/* Top and bottom gradient fade for seamless transitions */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 100%)' }}></div>
          </div>
          
          {/* Hero Content - Top Right Positioned */}
          <div className="relative z-10 h-full flex items-start justify-end pt-32 pr-8 md:pr-16 lg:pr-24">
            <div className="bg-black/20 backdrop-blur-sm px-8 py-6 rounded-sm">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-stone-100 font-serif" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                STUDIO YONA
              </h1>
            </div>
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
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Half */}
              <div className="flex items-center justify-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed font-serif" style={{ color: '#F2F2F2', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  Studio Yona is a Los Angeles-based design practice crafting immersive environments
                  inspired by global exploration and California minimalism.
                </p>
              </div>

              {/* Image Half */}
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb50a92f53f2b45f8804342761c78ddae?format=webp&width=800"
                  alt="Studio Yona Design Work"
                  className="w-full h-96 object-cover rounded-sm"
                  style={{ filter: 'contrast(115%) brightness(105%) saturate(120%)' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design Visualized Section - Clean Background Only */}
        <section className="py-32 relative">
          {/* Background Image - Full Width */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd9d08034649645899eb7641a84790249?format=webp&width=1920"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'contrast(125%) brightness(110%) saturate(130%)' }}
              loading="lazy"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)' }}></div>
            {/* Top and bottom gradient fade for seamless transitions */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 100%)' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              {/* Left: Content Only - No Gray Box */}
              <div className="bg-black/35 backdrop-blur-sm p-8 rounded-sm">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-8 font-serif" style={{ color: '#F2F2F2', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  Design, Visualized
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed font-serif" style={{ color: '#F2F2F2', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  Studio Yona transforms early design ideas into detailed spatial previews using 
                  cutting-edge 3D and VR tools. Every decision is seen before it's built.
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
            {/* Top and bottom gradient fade for seamless transitions */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 100%)' }}></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12 font-serif italic" style={{ color: '#F2F2F2', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
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
