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
                <Link to="/projects" className="text-zinc-300 hover:text-white transition-colors">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-white">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Header Section */}
        <section className="relative h-[80vh] overflow-hidden">
          {/* Background Image - Studio atmosphere */}
          <div className="absolute inset-0">
            <img 
              src="https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg"
              alt="Studio Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Header Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-7xl md:text-9xl font-thin tracking-tight text-white font-serif">
              About
            </h1>
          </div>
        </section>

        {/* Studio Philosophy Section */}
        <section className="py-24 bg-zinc-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-white mb-16 text-center font-serif">
              Studio Philosophy
            </h2>
            
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-200 mb-16 font-serif">
                Studio Yona is a Los Angeles-based design practice focused on custom residential 
                work that balances clarity, creativity, and context.
              </p>
              
              <p className="text-xl font-light leading-relaxed text-zinc-300 mb-8">
                Our spaces are immersive, intentional, and rooted in the unique stories of the people 
                who live in them. We believe architecture should feel like a natural extension of its 
                inhabitants' lives and dreams.
              </p>
              
              <p className="text-xl font-light leading-relaxed text-zinc-300">
                Each project begins with deep listening and careful observation. We immerse ourselves 
                in understanding how our clients move through space, how they entertain, how they find 
                peace. This foundation allows us to create environments that are not just beautiful, 
                but deeply functional and personally meaningful.
              </p>
            </div>
          </div>
        </section>

        {/* Adam Yona Section */}
        <section className="py-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Image */}
              <div className="relative">
                <img 
                  src="https://www.woodsdangaran.com/th/w1200_q70_aarmczda30cz2hh0prbxzehw.jpg"
                  alt="Adam Yona"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Right: Content */}
              <div className="lg:pl-12 text-white">
                <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-8 font-serif">
                  Adam Yona
                </h2>
                
                <h3 className="text-lg font-light tracking-[0.2em] text-zinc-400 mb-12 uppercase">
                  Founder & Principal Designer
                </h3>
                
                <div className="space-y-8 text-lg font-light leading-relaxed text-zinc-300">
                  <p>
                    Adam Yona is the founder and principal designer of Studio Yona. Raised in 
                    Los Angeles and shaped by hands-on site experience, Adam brings a global 
                    sensibility and love for modern design to every home.
                  </p>
                  
                  <p>
                    Before establishing his practice, Adam spent years learning directly from 
                    craftspeople and builders, developing an intimate understanding of how spaces 
                    come together. This foundation informs every decision, from initial concept 
                    to final detail.
                  </p>
                  
                  <p>
                    His work blends restraint with richness — reflecting cultural influences from 
                    Japan, China, Singapore, and California. These diverse experiences have taught 
                    him that the most powerful spaces are those that honor both tradition and innovation.
                  </p>
                  
                  <p>
                    Adam leads each project with a commitment to spatial poetry, material authenticity, 
                    and the belief that great design emerges from the intersection of client vision 
                    and creative exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-24 bg-zinc-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-thin tracking-tight text-white mb-16 text-center font-serif">
              Recognition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-light tracking-wide text-white font-serif">2024</h3>
                <div className="space-y-3">
                  <p className="text-base font-light text-zinc-300">Design Vanguard Award</p>
                  <p className="text-sm text-zinc-400 tracking-[0.1em] uppercase">Architectural Record</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-light tracking-wide text-white font-serif">2023</h3>
                <div className="space-y-3">
                  <p className="text-base font-light text-zinc-300">Rising Star Award</p>
                  <p className="text-sm text-zinc-400 tracking-[0.1em] uppercase">Interior Design Magazine</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-light tracking-wide text-white font-serif">2023</h3>
                <div className="space-y-3">
                  <p className="text-base font-light text-zinc-300">Emerging Voices</p>
                  <p className="text-sm text-zinc-400 tracking-[0.1em] uppercase">Architectural League NY</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-900 relative">
          {/* Background with subtle overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-zinc-900/80"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-white mb-12 font-serif">
              Let's create something meaningful together.
            </h2>
            <Link 
              to="/contact"
              className="inline-block px-12 py-4 bg-black border border-zinc-600 text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-sm"
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
                © Studio Yona. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
