import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function About() {
  return (
    <>
      <title>About - Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">

        {/* Section 1 - Banner Image with Title Overlay */}
        <section className="relative h-screen overflow-hidden header-offset">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F13d11e39a2a94afebd4cc26dd45035ed?format=webp&width=1920"
            alt="Studio Yona About"
            className="w-full h-full object-cover object-center"
          />
          
        </section>

        {/* Section 2 - Studio Mission (Centered Text) */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg font-normal leading-relaxed" style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              We believe architecture is a reflection of how we live, feel, and interact with our world. Our work is rooted in human experience, cultural curiosity, and refined simplicity.
            </p>
          </div>
        </section>

        {/* Section 3 - Values Block (Image Left, Text Right) */}
        <section className="py-16 bg-white">
          <div className="project-container mx-auto px-6">
            <div className="flex about-split" style={{ gap: '36px' }}>
              {/* Image Column */}
              <div className="image-col">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffdd4f368186c4d9b93d66e9d782da6f8?format=webp&width=1200"
                  alt="Studio Yona Process"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Column */}
              <div className="text-col flex flex-col justify-center">
                <p className="text-base font-normal leading-relaxed">
                  From schematic concept to construction, Studio Yona approaches each project with precision, creativity, and technological innovation. Our collaborative process ensures every detail serves both aesthetic vision and functional purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Tools + Approach (Inverted - Text Left, Image Right) */}
        <section className="py-16 bg-white">
          <div className="project-container mx-auto px-6">
            <div className="flex about-split" style={{ gap: '36px', flexDirection: 'row-reverse' }}>
              {/* Image Column */}
              <div className="image-col">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F99f991dd02d34f72b0bf052abc9a3709?format=webp&width=1200"
                  alt="Studio Yona Technology"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Column */}
              <div className="text-col flex flex-col justify-center">
                <p className="text-base font-normal leading-relaxed">
                  We use cutting-edge 3D and VR visualization to ensure clients can see every detail before it's built. This technology-forward approach reduces uncertainty and empowers informed decision-making throughout the design process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Additional Content */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">
              Design Philosophy
            </h2>
            <p className="text-base font-normal leading-relaxed mb-8">
              Our practice is guided by the belief that exceptional architecture emerges from the careful balance of form, function, and human experience. We draw inspiration from diverse cultural contexts while remaining rooted in the unique qualities of each site and client vision.
            </p>
            <p className="text-base font-normal leading-relaxed">
              Every project represents an opportunity to explore new possibilities while honoring the timeless principles of good design: proportion, material honesty, and spatial clarity.
            </p>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-16">
              Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <h3 className="text-lg font-bold mb-4">
                  AIA Los Angeles
                </h3>
                <p className="text-gray-600">
                  Design Excellence Award 2024
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-4">
                  Architectural Digest
                </h3>
                <p className="text-gray-600">
                  Featured Project 2024
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-4">
                  California Home + Design
                </h3>
                <p className="text-gray-600">
                  Rising Talent Award 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
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
          </div>
        </footer>
      </div>
    </>
  );
}
