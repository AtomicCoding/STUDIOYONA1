import { Link } from "react-router-dom";
import { useState } from "react";
import ContactUs from "../components/ContactUs";

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

              {/* Adam Yona Section - Always Expanded */}
              <div className="mb-[60px]">
                <div className="relative">
                  <h2 className="text-xl font-gotham-medium text-black mb-5">
                    Adam Yona
                  </h2>

                  <div className="mb-5">
                    <h3 className="text-lg font-gotham-medium text-black mb-3">
                      Founder | Principal
                    </h3>
                    <span>
                      Adam Yona, founder and principal of Studio Yona, is a Los
                      Angeles native, who brings a distinctive design philosophy
                      to every project. Before delving into his architectural
                      studies at USC, Adam cultivated a profound appreciation
                      for building through hands-on experience around
                      construction sites. His architectural exploration extended
                      across Asia—Japan, China, Vietnam, Singapore, and South
                      Korea—shaping a global perspective.
                    </span>
                    <br />
                    <br />
                    <span>
                      Fueled by a passion for luxury home and automotive design,
                      Adam's design philosophy at Studio Yona is rooted in
                      creating spaces that seamlessly blend creativity and
                      precision. Inspired by the dynamic architecture of Los
                      Angeles, Adam welcomes you to join this international
                      architectural adventure, where each space crafted by
                      Studio Yona tells a distinctive and culturally influenced
                      story.
                    </span>
                  </div>
                </div>
              </div>

              {/* Studio Description */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <div className="relative">
                  <h2 className="text-xl font-gotham-medium text-black mb-5">
                    Studio Yona
                  </h2>
                  <div className="mb-5 leading-6">
                    <span>
                      We create contemporary spaces through thoughtful dialogue
                      and innovative exploration. We value deep collaborative
                      partnerships with our clients and together build bespoke
                      environments that are striking, refined and welcoming at
                      every level.
                    </span>
                    <br />
                    <br />
                    <span>
                      Our work is conceptual, focused on realizing an
                      extraordinary experience of space and illumination. Our
                      designs encourage a seamless flow between interior and
                      exterior environments and thoughtfully connect with
                      natural landscapes. We use sustainable materials with
                      integrity and soul. Within rigorous architectural forms we
                      create powerfully livable, curated interiors.
                    </span>
                    <br />
                    <br />
                    <span>
                      Our studio is comprised of architects, interior designers
                      and visionaries who passionately combine expressive design
                      with precision and technical expertise. Together with
                      trusted artists, craftspeople, and builders, we deliver
                      work that is uncompromising in quality and innovation.
                    </span>
                    <br />
                    <br />
                    <span>
                      We are honored to be recognized nationally and
                      internationally including Architectural Record Design
                      Vanguard 2024, Emerging Voices 2023 (Architectural League
                      of New York) and Rising Star 2023 (Interior Design
                      Magazine).
                    </span>
                  </div>
                  <div className="mb-5 mt-5">
                    <figure>
                      <img
                        src="https://www.woodsdangaran.com/th/w1200_q70_iabd2_4rv5rmbk56es2ethbb.jpg"
                        alt="Studio Yona Architecture Detail"
                        className="w-full h-auto object-cover mb-5 mt-5"
                      />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Press Section */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <div className="relative">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection("press")}
                  >
                    <h2 className="text-xl font-gotham-medium text-black mb-0">
                      Press
                    </h2>
                    <img
                      src="https://www.woodsdangaran.com/imgs/icon_down.png"
                      alt="expand"
                      className={`h-5 transition-transform duration-300 ${
                        openSection === "press" ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === "press"
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* 2024 Press */}
                    <div className="mt-5">
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2024
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Dezeen
                          </h4>
                          <a
                            target="_blank"
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              Studio Yona's Meridian Heights wins 2024 AIA
                              Housing Award
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">Nov 2024</p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Wallpaper*
                          </h4>
                          <a
                            target="_blank"
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              Next Generation: Studio Yona's Sustainable Vision
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">Sep 2024</p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Architectural Digest
                          </h4>
                          <a
                            target="_blank"
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              California Dreaming: Studio Yona's Coastal
                              Projects
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">Aug 2024</p>
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
                            ArchDaily
                          </h4>
                          <a
                            target="_blank"
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              Young Practices to Watch: Studio Yona's Rise
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">Dec 2023</p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Dwell
                          </h4>
                          <a
                            target="_blank"
                            href="#"
                            className="text-black cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
                          >
                            <p className="text-[13px] leading-[18px]">
                              Sustainable Design Awards: Studio Yona Featured
                            </p>
                          </a>
                          <p className="text-[13px] leading-[18px]">May 2023</p>
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
                    onClick={() => toggleSection("awards")}
                  >
                    <h2 className="text-xl font-gotham-medium text-black mb-0">
                      Awards
                    </h2>
                    <img
                      src="https://www.woodsdangaran.com/imgs/icon_down.png"
                      alt="expand"
                      className={`h-5 transition-transform duration-300 ${
                        openSection === "awards" ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === "awards"
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* 2024 Awards */}
                    <div className="mt-5">
                      <h3 className="float-left font-gotham-medium mb-[10px] w-[15%]">
                        2024
                      </h3>
                      <div className="float-left w-[85%]">
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            AIA California
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            Honor Award for Residential Architecture
                          </p>
                          <p className="text-[13px] leading-[18px]">Oct 2024</p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Architectural Record
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            Design Vanguard Award
                          </p>
                          <p className="text-[13px] leading-[18px]">Dec 2024</p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            World Architecture Festival
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            Future Project of the Year Finalist
                          </p>
                          <p className="text-[13px] leading-[18px]">Nov 2024</p>
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
                          <p className="text-[13px] leading-[18px]">Jun 2023</p>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            American Architecture Prize
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            Gold Winner - Residential Architecture
                          </p>
                          <p className="text-[13px] leading-[18px]">Aug 2023</p>
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
                    onClick={() => toggleSection("projects")}
                  >
                    <h2 className="text-xl font-gotham-medium text-black mb-0">
                      Project Index
                    </h2>
                    <img
                      src="https://www.woodsdangaran.com/imgs/icon_down.png"
                      alt="expand"
                      className={`h-5 transition-transform duration-300 ${
                        openSection === "projects" ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === "projects"
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
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
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Ocean View Retreat
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            <span>Malibu, CA</span>
                            <br />
                            <span>3,600 SF</span>
                            <br />
                            <span>
                              Architecture, Interior Design, Landscape
                            </span>
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
                        <div className="mb-5">
                          <h4 className="text-black font-gotham-medium">
                            Granite Haven
                          </h4>
                          <p className="text-[13px] leading-[18px]">
                            <span>Big Sur, CA</span>
                            <br />
                            <span>2,800 SF</span>
                            <br />
                            <span>Architecture</span>
                          </p>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Us Section */}
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
