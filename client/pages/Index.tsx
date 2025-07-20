import { Link } from 'react-router-dom';

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

        {/* Bottom spacer */}
        <div className="clear-both h-[99px] mx-auto mt-[-100px] relative w-full">
          <div className="hidden"></div>
        </div>
      </div>
    </>
  );
}
