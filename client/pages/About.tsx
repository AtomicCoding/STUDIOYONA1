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
            src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fae500d6233b842e6bec50ab6f14c115d?format=webp&width=1920"
            alt="Studio Yona About"
            className="w-full h-full object-cover object-center"
          />
          
        </section>

        {/* Section 3 - Adam Yona Profile (Image Left 50%, Text Right 50%) */}
        <section className="bg-white" style={{ padding: '60px 0' }}>
          <div className="mx-auto px-6" style={{ maxWidth: '1300px' }}>
            <div className="flex items-center" style={{ gap: '72px' }}>
              {/* Image Column - 50% */}
              <div style={{ flexBasis: '50%', minWidth: 0 }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F537e22baf1774b05bc8fe75677f1da7b?format=webp&width=800"
                  alt="Adam Yona, Founder and Principal"
                  className="object-cover"
                  style={{ width: '100%', maxWidth: '700px', height: 'auto', maxHeight: '80vh' }}
                  loading="lazy"
                />
              </div>

              {/* Text Column - 50% */}
              <div className="flex flex-col justify-center" style={{ flexBasis: '50%', minWidth: 0 }}>
                <h3 className="font-bold mb-3" style={{ fontSize: '52px', lineHeight: '1.15' }}>
                  ADAM YONA
                </h3>
                <p className="font-normal mb-6" style={{ fontSize: '19px', lineHeight: '1.65', color: '#666' }}>
                  Founder | Principal
                </p>
                <p className="font-normal" style={{ fontSize: '19px', lineHeight: '1.7' }}>
                  Adam Yona, founder and principal of Studio Yona, is a Los Angeles native, who brings a distinctive design philosophy to every project. Before delving into his architectural studies at USC, Adam cultivated a profound appreciation for building through hands-on experience around construction sites. His architectural exploration extended across Asia—Japan, China, Vietnam, Singapore, and South Korea—shaping a global perspective. Fueled by a passion for luxury home and automotive design, Adam's design philosophy at Studio Yona is rooted in creating spaces that seamlessly blend creativity and precision. Inspired by the dynamic architecture of Los Angeles, Adam welcomes you to join this international architectural adventure, where each space crafted by Studio Yona tells a distinctive and culturally influenced story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - About Us (Inverted - Text Left, Image Right) */}
        <section className="py-16 bg-white">
          <div className="project-container mx-auto px-6">
            <div className="flex about-split" style={{ gap: '36px', flexDirection: 'row-reverse' }}>
              {/* Image Column */}
              <div className="image-col">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb7bac460cd874f13ab9c983a00b1dfd6?format=webp&width=1920"
                  alt="Studio Yona About"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Column */}
              <div className="text-col flex flex-col justify-center">
                <h3 className="font-bold mb-3" style={{ fontSize: '52px', lineHeight: '1.15' }}>
                  About Us
                </h3>
                <p className="font-normal" style={{ fontSize: '19px', lineHeight: '1.7' }}>
                  Welcome to Studio Yona, where innovation and design excellence come together seamlessly. Studio Yona is a boutique design atelier with a passionate team dedicated to crafting bespoke environments influenced by a spectrum of styles. With an emphasis on creativity and precision, the studio takes pride in creating spaces that captivate the eye and stand the test of time. To enrich the client experience, Studio Yona utilizes cutting-edge 3D visualization techniques, providing a vivid preview of the end result before construction begins. The studio doesn't just design spaces; it crafts immersive experiences that align with clients' visions and values, shaping a distinctive narrative for each project.
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
