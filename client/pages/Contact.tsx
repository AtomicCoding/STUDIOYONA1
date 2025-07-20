import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <title>Contact - Studio Yona</title>
      
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
        
        {/* Content */}
        <div className="relative z-10 bg-white min-h-[calc(100vh-90px)] py-20">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-gotham-medium mb-8">Contact</h1>
              <p className="text-lg text-gray-600 mb-8">
                This page is under construction. Continue prompting to add content for the Contact section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
