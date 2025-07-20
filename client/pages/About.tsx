import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <title>About - Studio Yona</title>
      
      <div className="min-h-screen">
        {/* Header */}
        <header className="relative z-[1000] h-[90px] md:h-[90px] font-gotham-medium">
          <div className="w-full px-4">
            <div className="min-h-[22px] pt-5 pb-[19px]">
              {/* Logo */}
              <div className="inline-block relative">
                <Link 
                  to="/" 
                  title="Studio Yona"
                  className="block text-black font-gotham-medium text-lg md:text-xl transition-all duration-300 ease-linear hover:opacity-70"
                >
                  <h2 className="text-lg md:text-xl font-gotham-medium text-black text-left">
                    STUDIO YONA
                  </h2>
                </Link>
                <span className="text-black font-gotham-medium text-xs md:text-[14.4px] block mt-1">
                  ARCHITECTURE & DESIGN STUDIO
                </span>
              </div>
              
              {/* Navigation */}
              <div className="float-right grid grid-cols-3 gap-4 md:gap-8 w-2/3 md:w-1/2 relative top-[9px] text-xs md:text-sm">
                <div className="text-left">
                  <Link 
                    to="/projects" 
                    title="Projects"
                    className="text-gray-600 font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    PROJECTS
                  </Link>
                </div>
                <div className="text-center">
                  <Link 
                    to="/about" 
                    title="About"
                    className="text-black font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear cursor-default"
                  >
                    ABOUT
                  </Link>
                </div>
                <div className="text-right">
                  <Link 
                    to="/contact" 
                    title="Contact"
                    className="text-gray-600 font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal line */}
          <hr className="bg-[rgb(187,187,187)] border-0 h-px w-full overflow-hidden" />
        </header>
        
        {/* Content */}
        <div className="w-full mx-auto pb-[150px]">
          <div className="w-full px-4">
            <div className="w-full">
              
              {/* Hero Image */}
              <div className="w-full mb-[60px]">
                <div className="relative">
                  <figure>
                    <img 
                      src="https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg"
                      alt="Studio Yona Architecture"
                      className="w-full h-auto object-cover"
                    />
                  </figure>
                </div>
              </div>

              {/* Studio Description */}
              <div className="mb-[60px]">
                <div className="relative">
                  <h2 className="text-xl font-gotham-medium text-black mb-5">
                    Studio Yona
                  </h2>
                  <div className="mb-5 leading-6">
                    <span>
                      We create contemporary spaces through thoughtful dialogue and innovative exploration. We
                      value deep collaborative partnerships with our clients
                      and together build bespoke environments that are striking, refined
                      and welcoming at every level.
                    </span>
                    <br />
                    <br />
                    <span>
                      Our work is conceptual, focused on realizing an extraordinary
                      experience of space and illumination. Our designs encourage a seamless
                      flow between interior and exterior environments and
                      thoughtfully connect with natural landscapes. We use sustainable
                      materials with integrity and soul. Within rigorous
                      architectural forms we create powerfully livable, curated
                      interiors.
                    </span>
                    <br />
                    <br />
                    <span>
                      Our studio is comprised of architects, interior designers
                      and visionaries who passionately combine expressive design with
                      precision and technical expertise. Together with trusted
                      artists, craftspeople, and builders, we deliver work that
                      is uncompromising in quality and innovation.
                    </span>
                    <br />
                    <br />
                    <span>
                      We are honored to be recognized nationally and
                      internationally including Architectural Record Design Vanguard 2024,
                      Emerging Voices 2023 (Architectural League of New York) and Rising
                      Star 2023 (Interior Design Magazine).
                    </span>
                  </div>
                  <div className="mb-5 mt-5">
                    <figure>
                      <img 
                        src="https://www.woodsdangaran.com/th/w1200_q70_3f8gp7jx1msxdl6hl7n70dsb.jpg"
                        alt="Studio Yona Interior"
                        className="w-full h-auto object-cover mb-5 mt-5"
                      />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Monograph Section */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <div className="relative">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('monograph')}
                  >
                    <h2 className="text-xl font-gotham-medium text-black mb-0">
                      Monograph
                    </h2>
                    <img 
                      src="https://www.woodsdangaran.com/imgs/icon_down.png"
                      alt="expand"
                      className={`h-5 transition-transform duration-300 ${
                        openSection === 'monograph' ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openSection === 'monograph' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mb-5 mt-5">
                      <span>
                        Architects Sarah Chen and Marcus Rivera are innovators of
                        contemporary architecture who express modern principles in a
                        manner perfectly suited to twenty-first-century living. In
                        addition to creating groundbreaking new structures, the firm has
                        designed spectacular residential and commercial projects, making Studio Yona
                        one of the most exciting emerging practices in modern architecture.
                      </span>
                      <br />
                      <br />
                      <span>
                        The firm's portfolio features sophisticated material palettes,
                        innovative use of natural light, sustainable design solutions, and
                        clean geometries that reveal their contemporary vision. The spaces
                        they design are filled with carefully curated elements and custom details
                        to feel both timeless and cutting-edge. Architectural Review noted that
                        "Studio Yona represents the future of thoughtful, sustainable design,
                        creating spaces for the next generation."
                      </span>
                    </div>
                    <div className="text-[13px] leading-[18px] mb-5">
                      <span>March 2024</span>
                      <br />
                      <span>Monacelli Press</span>
                      <br />
                      <span>288 pages</span>
                    </div>
                    <div className="mb-5 mt-5">
                      <figure>
                        <img 
                          src="https://www.woodsdangaran.com/th/w1200_q70_iabd2_4rv5rmbk56es2ethbb.jpg"
                          alt="Studio Yona Monograph"
                          className="w-full h-auto object-cover mb-5 mt-5"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              {/* Press Section */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <div className="relative">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('press')}
                  >
                    <h2 className="text-xl font-gotham-medium text-black mb-0">
                      Press
                    </h2>
                    <img 
                      src="https://www.woodsdangaran.com/imgs/icon_down.png"
                      alt="expand"
                      className={`h-5 transition-transform duration-300 ${
                        openSection === 'press' ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openSection === 'press' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {/* 2024 Press */}
                    <div className="mt-5">
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2024
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Architectural Record
                          </h4>
                          <a 
                            target="_blank" 
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              Design Vanguard 2024: Studio Yona
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">
                            Dec 2024
                          </p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Interior Design Magazine
                          </h4>
                          <a 
                            target="_blank" 
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              Rising Stars 2024: The Future of Design
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">
                            Oct 2024
                          </p>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>

                    {/* 2023 Press */}
                    <div>
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2023
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Architectural League of New York
                          </h4>
                          <a 
                            target="_blank" 
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              Emerging Voices 2023
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">
                            Mar 2023
                          </p>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <div className="relative">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('awards')}
                  >
                    <h2 className="text-xl font-gotham-medium text-black mb-0">
                      Awards
                    </h2>
                    <img 
                      src="https://www.woodsdangaran.com/imgs/icon_down.png"
                      alt="expand"
                      className={`h-5 transition-transform duration-300 ${
                        openSection === 'awards' ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openSection === 'awards' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {/* 2024 Awards */}
                    <div className="mt-5">
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2024
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Architectural Record
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            Design Vanguard Award
                          </p>
                          <p className="text-[13px] leading-[18px]">
                            Dec 2024
                          </p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            AIA National
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            Young Architects Award
                          </p>
                          <p className="text-[13px] leading-[18px]">
                            Jun 2024
                          </p>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>

                    {/* 2023 Awards */}
                    <div>
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2023
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Interior Design Magazine
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            Rising Star Award
                          </p>
                          <p className="text-[13px] leading-[18px]">
                            Nov 2023
                          </p>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Index */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <div className="relative">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('projects')}
                  >
                    <h2 className="text-xl font-gotham-medium text-black mb-0">
                      Project Index
                    </h2>
                    <img 
                      src="https://www.woodsdangaran.com/imgs/icon_down.png"
                      alt="expand"
                      className={`h-5 transition-transform duration-300 ${
                        openSection === 'projects' ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openSection === 'projects' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {/* Current Projects */}
                    <div className="mt-5">
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2024
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Meridian Heights
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            <span>Palos Verdes, CA</span>
                            <br />
                            <span>4,200 SF</span>
                            <br />
                            <span>Architecture, Interior Design</span>
                          </p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Solstice Pavilion
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            <span>Los Angeles, CA</span>
                            <br />
                            <span>5,800 SF</span>
                            <br />
                            <span>Architecture</span>
                          </p>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>

                    {/* Previous Projects */}
                    <div>
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2023
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Crimson Dunes
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            <span>Palm Springs, CA</span>
                            <br />
                            <span>3,600 SF</span>
                            <br />
                            <span>Architecture, Interior Design</span>
                          </p>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
