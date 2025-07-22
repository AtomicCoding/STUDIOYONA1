import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function About() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <title>About - Studio Yona</title>
      
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
                <Link to="/about" className="text-black">
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
        <div className="pt-20">
          {/* Visual Header */}
          <div className="relative h-[70vh] overflow-hidden">
            <img 
              src="https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg"
              alt="Studio Yona Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl md:text-8xl font-thin tracking-tight text-white">
                About
              </h1>
            </div>
          </div>

          {/* Studio Philosophy Section */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-black mb-12 text-center">
                Studio Philosophy
              </h2>
              
              <div className="prose prose-xl max-w-none text-gray-700 font-light leading-relaxed space-y-8">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-center mb-16">
                  Studio Yona is a Los Angeles-based design practice focused on custom residential 
                  work that balances clarity, creativity, and context.
                </p>
                
                <p className="text-xl leading-relaxed">
                  We believe homes should be immersive environments — shaped by dialogue, precision, 
                  and global perspective. Our approach honors the unique needs of each client while 
                  creating spaces that transcend the ordinary.
                </p>
                
                <p className="text-xl leading-relaxed">
                  Every project begins with listening. We immerse ourselves in understanding how our 
                  clients live, dream, and envision their ideal environment. This foundation of trust 
                  and collaboration allows us to craft spaces that are deeply personal yet timelessly elegant.
                </p>
                
                <p className="text-xl leading-relaxed">
                  From initial concept to final detail, we pursue design excellence through careful 
                  material selection, thoughtful spatial planning, and an unwavering commitment to 
                  craftsmanship. Our work reflects a global sensibility rooted in the distinctive 
                  character of Southern California living.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-gray-200 max-w-4xl mx-auto"></div>

          {/* About Adam Yona Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left: Image */}
                <div className="relative">
                  <img 
                    src="https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg"
                    alt="Adam Yona"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                
                {/* Right: Content */}
                <div className="lg:pl-12">
                  <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-black mb-8">
                    Adam Yona
                  </h2>
                  
                  <h3 className="text-xl font-light tracking-wide text-gray-600 mb-8 uppercase">
                    Founder & Principal Designer
                  </h3>
                  
                  <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
                    <p>
                      Adam Yona is the founder and principal designer of Studio Yona. Raised in 
                      Los Angeles and shaped by years of hands-on site experience, Adam brings a 
                      refined design perspective rooted in global exploration across Asia and the 
                      United States.
                    </p>
                    
                    <p>
                      Before establishing his practice, Adam cultivated a profound appreciation for 
                      the building process through direct engagement with construction sites and 
                      craftspeople. This foundation informs his holistic approach to design, where 
                      conceptual vision meets practical execution.
                    </p>
                    
                    <p>
                      His work blends contemporary sensibility with timeless form, drawing inspiration 
                      from diverse cultural experiences across Japan, China, Vietnam, Singapore, and 
                      South Korea. These influences manifest in his commitment to spatial harmony, 
                      material authenticity, and the seamless integration of interior and exterior environments.
                    </p>
                    
                    <p>
                      Passionate about luxury residential and automotive design, Adam leads each project 
                      with unwavering attention to detail, compositional balance, and meaningful client 
                      collaboration. His vision extends beyond mere aesthetics to create environments 
                      that enhance daily life and inspire lasting connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recognition Section */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-thin tracking-tight text-black mb-12">
                Recognition
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-light tracking-wide text-black">2024</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-light text-gray-600">Design Vanguard Award</p>
                    <p className="text-xs text-gray-500 tracking-wide">ARCHITECTURAL RECORD</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-light tracking-wide text-black">2023</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-light text-gray-600">Rising Star Award</p>
                    <p className="text-xs text-gray-500 tracking-wide">INTERIOR DESIGN MAGAZINE</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-light tracking-wide text-black">2023</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-light text-gray-600">Emerging Voices</p>
                    <p className="text-xs text-gray-500 tracking-wide">ARCHITECTURAL LEAGUE NY</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-white mb-12">
                Let's create something meaningful together.
              </h2>
              <Link 
                to="/contact"
                className="inline-block px-12 py-4 border border-white text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black transition-all duration-500"
              >
                GET IN TOUCH
              </Link>
            </div>
          </section>
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
