import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';

export default function Index() {
  return (
        <>
      <title>Studio Yona</title>

      <div className="min-h-screen relative">
                {/* Header */}
        <header className="relative z-[1000] h-[90px] md:h-[90px] font-gotham-medium">
          <div className="max-w-[1200px] mx-auto px-4">
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
                    className="text-black font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    PROJECTS
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/about"
                    title="About"
                    className="text-black font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    ABOUT
                  </Link>
                </div>
                <div className="text-right">
                  <Link
                    to="/contact"
                    title="Contact"
                    className="text-black font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

                {/* Background Image */}
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-999999]">
          <div className="absolute w-full h-full z-[-999999]">
            <img
              src="https://www.woodsdangaran.com/th/w1900_h1500_q80_4rn9_ojln2lw7kabyw0hu05f.jpg"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>

                                {/* Contact Us Section - Seamless Integration */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Subtle gradient overlay that blends naturally */}
          <div className="relative">
            {/* Ultra-subtle gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 via-transparent to-transparent"></div>

            {/* Glassmorphism effect container */}
            <div className="relative backdrop-blur-sm bg-white/10 border-t border-white/20 p-8 md:p-12">
              <div className="max-w-6xl mx-auto">
                <div className="text-center">
                  {/* Floating card design */}
                  <div className="backdrop-blur-md bg-white/95 rounded-lg p-8 md:p-10 shadow-2xl border border-white/30 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-gotham-medium text-gray-900 mb-4 leading-tight">
                      Ready to Create Something Extraordinary?
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Let's discuss your vision and bring your architectural dreams to life with Studio Yona's innovative design and precision craftsmanship.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center bg-black text-white font-gotham-medium px-10 py-4 rounded-sm hover:bg-gray-800 transition-all duration-500 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      >
                        <span>GET IN TOUCH</span>
                        <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>

                      <div className="text-center text-gray-600">
                        <p className="text-sm font-gotham-medium mb-2 text-gray-800">Contact Info</p>
                        <p className="text-sm mb-1">+1 323.555.0123</p>
                        <p className="text-sm">hello@studioyona.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="clear-both h-[99px] mx-auto mt-[-100px] relative w-full">
          <div className="hidden"></div>
        </div>
      </div>
    </>
  );
}
