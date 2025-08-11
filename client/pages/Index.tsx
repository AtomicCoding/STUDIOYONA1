import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <title>Studio Yona</title>
      
      <div className="min-h-screen bg-white" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-medium text-sm tracking-[0.3em] text-black hover:text-gray-600 transition-colors">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-12 text-xs tracking-[0.2em] font-medium">
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
            </div>
          </div>
        </nav>

        {/* Section 1 - Hero Image */}
        <section className="relative h-screen overflow-hidden">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbf94ab26c7844f828d801d72e56d3d51?format=webp&width=1920"
            alt="Studio Yona Architecture"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Downward Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Section 2 - Studio Intro Text */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xl font-normal leading-relaxed" style={{ 
              fontFamily: '"Work Sans", sans-serif',
              lineHeight: '150%',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Studio Yona is a Los Angeles–based design practice crafting immersive environments inspired by global exploration and California minimalism.
            </p>
          </div>
        </section>

        {/* Section 3 - Project Feature Block #1 (Image Left, Text Right) */}
        <section className="py-16 bg-white">
          <div className="project-container mx-auto px-6">
            <div className="flex project-split" style={{ gap: '36px' }}>
              {/* Image Column */}
              <div className="image-col">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6075aa98e58e4e8ab515b72283788bc6?format=webp&width=1200"
                  alt="Vista Ridge Residence"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Column */}
              <div className="text-col flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                  Vista Ridge Residence
                </h3>
                <p className="text-lg font-normal leading-relaxed" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                  A hillside retreat where natural materials meet contemporary design, emphasizing Studio Yona's minimal yet grounded aesthetic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Project Feature Block #2 (Image Right, Text Left) */}
        <section className="py-16 bg-white">
          <div className="project-container mx-auto px-6">
            <div className="flex project-split" style={{ gap: '36px', flexDirection: 'row-reverse' }}>
              {/* Image Column */}
              <div className="image-col">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fdad90f77fff549209726ceaffd0070dc?format=webp&width=1200"
                  alt="Sculptural Modern Estate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Column */}
              <div className="text-col flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                  Sculptural Modern Estate
                </h3>
                <p className="text-lg font-normal leading-relaxed" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                  Where architecture becomes art through fluid, sculptural geometries that create a truly immersive living experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Quote Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-3xl lg:text-4xl font-normal italic leading-relaxed mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              "We don't just create spaces — we guide people through the design journey with intention and precision."
            </blockquote>
            <p className="text-lg font-normal" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              – Studio Yona
            </p>
          </div>
        </section>

        {/* Section 6 - CTA Image with Button */}
        <section className="relative h-96 overflow-hidden">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0ab0e4828dab4ed98d07468046290137?format=webp&width=1920"
            alt="Studio Yona Contact"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Centered Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link 
              to="/contact"
              className="bg-black text-white font-bold text-lg tracking-wide px-9 py-5 hover:bg-gray-800 transition-colors"
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>

        {/* Section 7 - Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Logo */}
              <div>
                <Link to="/" className="font-medium text-sm tracking-[0.3em] text-black hover:text-gray-600 transition-colors" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                  STUDIO YONA
                </Link>
              </div>
              
              {/* Center: Navigation */}
              <div className="flex justify-center space-x-8 text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                <Link to="/projects" className="text-black hover:text-gray-600 transition-colors">Projects</Link>
                <Link to="/about" className="text-black hover:text-gray-600 transition-colors">About</Link>
                <Link to="/contact" className="text-black hover:text-gray-600 transition-colors">Contact</Link>
              </div>
              
              {/* Right: Social */}
              <div className="flex justify-end space-x-6 text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Instagram</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
