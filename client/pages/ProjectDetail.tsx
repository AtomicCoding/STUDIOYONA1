import { Link, useParams } from "react-router-dom";

// Project name mapping for proper titles
const projectNames: { [key: string]: string } = {
  "the-grove": "Meridian Heights",
  "gallery-view": "Solstice Pavilion",
  "desert-palisades": "Crimson Dunes",
  "moccasin-flats": "Aurora Residence",
  "canyon-retreat": "Titanium House",
  "long-valley": "Serenity Grove",
  "moore-house": "Phoenix Loft",
  "summit-club": "Obsidian Tower",
  "rim-rock-estate": "Velvet Canyon",
  "mar-vista": "Sapphire Point",
  "westgate-estate": "Timber Veil",
  twentieth: "Lunar Bay",
  "carla-ridge-two": "Ivory Sanctum",
  "carla-ridge": "Prism Estate",
  "clear-oak": "Onyx Gardens",
  "case-study": "Echo Chambers",
  nightingale: "Constellation Villa",
  "sumner-estate": "Windrose Manor",
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const projectTitle = id
    ? projectNames[id] || id.replace(/-/g, " ")
    : "Project";

  return (
    <>
      <title>{projectTitle} - Studio Yona</title>

      <div className="min-h-screen">
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
                    className="text-gray-600 font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear hover:opacity-70"
                  >
                    PROJECTS
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/about"
                    title="About"
                    className="text-gray-600 font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear hover:opacity-70"
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
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="pt-[60px]">
              {/* Back Navigation */}
              <div className="mb-8">
                <Link
                  to="/projects"
                  className="text-black font-gotham-medium text-sm transition-all duration-300 ease-linear hover:opacity-70"
                >
                  ← BACK TO PROJECTS
                </Link>
              </div>

              {/* Project Title */}
              <h1 className="text-4xl md:text-5xl font-gotham-medium mb-4 text-black">
                {projectTitle}
              </h1>

              {/* Placeholder Image */}
              <div className="w-full h-[400px] md:h-[500px] bg-gray-200 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-gotham-medium text-sm">
                    PROJECT IMAGERY COMING SOON
                  </p>
                </div>
              </div>

              {/* Placeholder Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-gotham-medium mb-4 text-black">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    This project page is currently under development. Continue
                    prompting to add detailed information about this
                    architectural project, including project specifications,
                    design philosophy, materials, and construction details.
                  </p>

                  <h3 className="text-xl font-gotham-medium mb-4 text-black">
                    Project Details
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex">
                      <span className="font-gotham-medium w-24">Status:</span>
                      <span>To be defined</span>
                    </div>
                    <div className="flex">
                      <span className="font-gotham-medium w-24">Year:</span>
                      <span>To be defined</span>
                    </div>
                    <div className="flex">
                      <span className="font-gotham-medium w-24">Type:</span>
                      <span>To be defined</span>
                    </div>
                    <div className="flex">
                      <span className="font-gotham-medium w-24">Size:</span>
                      <span>To be defined</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-gotham-medium mb-4 text-black">
                    Design Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Detailed information about the design approach,
                    architectural concepts, and creative vision for this project
                    will be added here. This section will showcase the
                    innovative solutions and design thinking that defines Studio
                    Yona's approach to architecture.
                  </p>

                  <h3 className="text-xl font-gotham-medium mb-4 text-black">
                    Awards & Recognition
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Project recognition and awards will be listed here once
                    content is added.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
