import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <title>Woods + Dangaran</title>

      <div className="min-h-screen relative">
        {/* Header */}
        <header className="relative z-[1000] h-[90px] font-gotham-medium">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="min-h-[22px] pt-5 pb-[19px]">
              {/* Logo */}
              <div className="inline-block relative">
                <Link
                  to="/"
                  title="Woods + Dangaran"
                  className="block w-[300px] h-[22px] bg-[url('https://www.woodsdangaran.com/img/wd_logo_3.svg')] bg-no-repeat bg-[length:300px_22px] text-[transparent] overflow-hidden transition-all duration-300 ease-linear"
                >
                  <h2 className="text-xl font-gotham-medium text-[transparent] text-left overflow-hidden">
                    WOODS + DANGARAN
                  </h2>
                </Link>
              </div>

              {/* Navigation */}
              <div className="float-right grid grid-cols-2 gap-8 w-1/2 relative top-[9px] text-sm">
                <div className="text-left">
                  <Link
                    to="/projects"
                    title="Projects"
                    className="text-black font-gotham-medium text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    PROJECTS
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/about"
                    title="About"
                    className="text-black font-gotham-medium text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    ABOUT
                  </Link>
                </div>
                <div className="text-right">
                  <Link
                    to="/contact"
                    title="Contact"
                    className="text-black font-gotham-medium text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    CONTACT
                  </Link>
                </div>
                <div className="text-right">
                  <Link
                    to="/montes"
                    title="Montes"
                    className="text-black font-gotham-medium text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    MONTES
                  </Link>
                </div>
              </div>

              {/* AD100 Banner */}
              <div className="float-right w-full text-right mt-[15px] relative">
                <a
                  target="_blank"
                  href="https://www.architecturaldigest.com/story/ad100-2025-debuts"
                  className="text-black font-gotham-medium text-[14.4px] transition-all duration-300 ease-linear hover:opacity-70"
                  rel="noopener noreferrer"
                >
                  AD100 2025: WOODS + DANGARAN DEBUT
                </a>
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
              className="absolute top-[-141.735px] left-0 w-full h-[1062.47px] object-cover overflow-clip"
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
