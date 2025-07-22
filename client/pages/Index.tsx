import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <title>Studio Yona</title>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Fullscreen Hero Video/Image */}
        <div className="fixed inset-0 z-0">
          <img
            src="https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Sticky Navigation */}
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

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-thin tracking-tight text-white mb-4">
              STUDIO YONA
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 mb-12">
              Bespoke Residential Design Studio
            </p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <section className="relative z-10 bg-white py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800 max-w-3xl mx-auto">
              Studio Yona is a Los Angeles-based design studio crafting immersive environments 
              inspired by global experience and local artistry.
            </p>
          </div>
        </section>

        {/* Featured Work Gallery */}
        <section className="relative z-10 bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-thin tracking-tight text-center text-black mb-16">
              Featured Work
            </h2>
            
            {/* 3x2 Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Malibu Residence */}
              <Link to="/projects/malibu-residence" className="group">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src="https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg"
                    alt="Malibu Residence"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-light tracking-wide">Malibu Residence</h3>
                      <p className="text-sm text-white/80">Malibu, CA</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Donna Residence 2 */}
              <Link to="/projects/donna-residence-2" className="group">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src="https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg"
                    alt="Donna Residence 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-light tracking-wide">Donna Residence 2</h3>
                      <p className="text-sm text-white/80">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Lake Sherwood Residence */}
              <Link to="/projects/lake-sherwood-residence" className="group">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src="https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg"
                    alt="Lake Sherwood Residence"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-light tracking-wide">Lake Sherwood Residence</h3>
                      <p className="text-sm text-white/80">Lake Sherwood, CA</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Bentley Condo */}
              <Link to="/projects/bentley-condo" className="group">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src="https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg"
                    alt="Bentley Condo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-light tracking-wide">Bentley Condo</h3>
                      <p className="text-sm text-white/80">West Hollywood, CA</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Tennessee Airbnb */}
              <Link to="/projects/tennessee-airbnb" className="group">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src="https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg"
                    alt="Tennessee Airbnb"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-light tracking-wide">Tennessee Airbnb</h3>
                      <p className="text-sm text-white/80">Tennessee Mountains</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Cantara Residence */}
              <Link to="/projects/cantara-residence" className="group">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src="https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg"
                    alt="Cantara Residence"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-light tracking-wide">Cantara Residence</h3>
                      <p className="text-sm text-white/80">Studio City, CA</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3D Visualization Section */}
        <section className="relative z-10 bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
                <img 
                  src="https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg"
                  alt="3D Visualization Process"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Right: Content */}
              <div className="lg:pl-12">
                <h2 className="text-4xl font-thin tracking-tight text-black mb-8">
                  Design, Visualized
                </h2>
                <p className="text-xl font-light leading-relaxed text-gray-700 mb-8">
                  Studio Yona transforms early ideas into detailed spatial previews using 
                  cutting-edge 3D and VR tools. Every decision is seen before it's built.
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-600">
                  Through immersive visualization, we invite our clients into their future 
                  spaces, refining every detail until the vision becomes reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative z-10 bg-black py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-white mb-12">
              Let's design something extraordinary together.
            </h2>
            <Link 
              to="/contact"
              className="inline-block px-12 py-4 border border-white text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black transition-all duration-500"
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-white border-t border-gray-200 py-12">
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
