import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroSlideshow from '../components/HeroSlideshow';

export default function Index() {
  return (
    <>
      <title>Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">

        {/* Section 1 - Hero Slideshow */}
        <HeroSlideshow />

        {/* Section 2 - Studio Intro Text */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xl font-normal leading-relaxed" style={{
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
                <h3 className="text-4xl font-bold mb-6">
                  Vista Ridge Residence
                </h3>
                <p className="text-lg font-normal leading-relaxed">
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
                <h3 className="text-4xl font-bold mb-6">
                  Sculptural Modern Estate
                </h3>
                <p className="text-lg font-normal leading-relaxed">
                  Where architecture becomes art through fluid, sculptural geometries that create a truly immersive living experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Quote Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-3xl lg:text-4xl font-normal italic leading-relaxed mb-8">
              "We don't just create spaces — we guide people through the design journey with intention and precision."
            </blockquote>
            <p className="text-lg font-normal">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
              {/* Left: Logo */}
              <div>
                <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                    alt="Studio Yona"
                    className="h-14 md:h-16 w-auto"
                  />
                </Link>
              </div>

              {/* Center: Navigation */}
              <div className="flex justify-center space-x-8 text-sm font-medium">
                <Link to="/projects" className="text-black hover:text-gray-600 transition-colors">Projects</Link>
                <Link to="/about" className="text-black hover:text-gray-600 transition-colors">About</Link>
                <Link to="/contact" className="text-black hover:text-gray-600 transition-colors">Contact</Link>
              </div>

              {/* Right: Social */}
              <div className="flex justify-end space-x-6 text-sm font-medium">
                <a
                  href="https://www.instagram.com/studio.yona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-yona-962892156?trk=people-guest_people_search-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-wrap justify-center gap-6 text-xs font-light text-gray-600">
                <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                <span className="text-gray-300">·</span>
                <Link to="/terms" className="hover:text-black transition-colors">Terms of Use</Link>
                <span className="text-gray-300">·</span>
                <Link to="/cookies" className="hover:text-black transition-colors">Cookies</Link>
                <span className="text-gray-300">·</span>
                <Link to="/accessibility" className="hover:text-black transition-colors">Accessibility</Link>
                <span className="text-gray-300">·</span>
                <Link to="/disclaimer" className="hover:text-black transition-colors">Disclaimer</Link>
              </div>

              {/* Copyright */}
              <div className="text-center mt-6 text-xs font-light text-gray-600">
                <p>© Studio Yona. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
