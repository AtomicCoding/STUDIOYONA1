import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';

const projects = [
  {
    id: 'the-grove',
    title: 'Meridian Heights',
    location: 'Palos Verdes, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/95/resize_q70_w1200_thumb_7knj91x3ttyft6to.jpg'
  },
  {
    id: 'gallery-view',
    title: 'Solstice Pavilion',
    location: 'Los Angeles, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/63/resize_q70_w1200_thumb_bur7zsv8ifz8nuhm.jpg'
  },
  {
    id: 'desert-palisades',
    title: 'Crimson Dunes',
    location: 'Palm Springs, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/36/resize_q70_w1200_thumb_c1dhhpc1_3zuu3ou.jpg'
  },
  {
    id: 'moccasin-flats',
    title: 'Aurora Residence',
    location: 'Hurricane, UT',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/91/resize_q70_w1200_thumb_5ke5i0r5beuunxwv.jpg'
  },
  {
    id: 'canyon-retreat',
    title: 'Titanium House',
    location: 'Pacific Palisades, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/93/resize_q70_w1200_thumb_4ua6hm6nnib9l7qc.jpg'
  },
  {
    id: 'long-valley',
    title: 'Serenity Grove',
    location: 'Santa Ynez, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/86/resize_q70_w1200_thumb_t3fl93t09nwx2qkw.jpg'
  },
  {
    id: 'moore-house',
    title: 'Phoenix Loft',
    location: 'Los Angeles, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/64/resize_q70_w1200_thumb_h3m__fvxx40yelaw.jpg'
  },
  {
    id: 'summit-club',
    title: 'Obsidian Tower',
    location: 'Las Vegas, NV',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/71/resize_q70_w1200_thumb_8e26jg0ppr4tkoel.jpg'
  },
  {
    id: 'rim-rock-estate',
    title: 'Velvet Canyon',
    location: 'Las Vegas, NV',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/78/resize_q70_w1200_thumb_vddwp2ydy84l65w2.jpg'
  },
  {
    id: 'mar-vista',
    title: 'Sapphire Point',
    location: 'Mar Vista, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/34/resize_q70_w1200_thumb_5nhae4anrp958ffc.jpg'
  },
  {
    id: 'westgate-estate',
    title: 'Timber Veil',
    location: 'Central Oregon',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/69/resize_q70_w1200_thumb_0fw1brzd4__3sdbp.jpg'
  },
  {
    id: 'twentieth',
    title: 'Lunar Bay',
    location: 'Santa Monica, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/54/resize_q70_w1200_thumb_345416ov9xzag564.jpg'
  },
  {
    id: 'carla-ridge-two',
    title: 'Ivory Sanctum',
    location: 'Beverly Hills, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/52/resize_q70_w1200_thumb_loujl0sc6gcjaygp.jpg'
  },
  {
    id: 'carla-ridge',
    title: 'Prism Estate',
    location: 'Beverly Hills, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/26/resize_q70_w1200_thumb_eu5jvyewfq5mlghk.jpg'
  },
  {
    id: 'clear-oak',
    title: 'Onyx Gardens',
    location: 'Encino, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/19/resize_q70_w1200_thumb_dob9lad5fenxeg40.jpg'
  },
  {
    id: 'case-study',
    title: 'Echo Chambers',
    location: 'Culver City, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/29/resize_q70_w1200_thumb_w5w_bgtllzh_z6hz.jpg'
  },
  {
    id: 'nightingale',
    title: 'Constellation Villa',
    location: 'Los Angeles, CA',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/55/resize_q70_w1200_thumb_1izel720o8mfwl0i.jpg'
  },
  {
    id: 'sumner-estate',
    title: 'Windrose Manor',
    location: 'Greenwich, CT',
    image: 'https://www.woodsdangaran.com/admin/newfiles/project/70/resize_q70_w1200_thumb_wms09l_x5tk6jyrl.jpg'
  }
];

export default function Projects() {
  return (
    <>
      <title>Projects - Studio Yona</title>
      
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
                    className="text-black font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear cursor-default"
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
        
        {/* Projects Grid */}
        <div className="w-full mx-auto pb-[150px]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="w-full min-w-[600px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px_20px] pt-[60px]">
                {projects.map((project) => (
                  <div key={project.id} className="group cursor-pointer">
                    <Link to={`/project/${project.id}`} className="block">
                      <div 
                        className="w-full h-[350px] bg-cover bg-center bg-no-repeat mb-5 overflow-hidden transition-all duration-200 group-hover:scale-[1.02]"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="relative">
                        <h2 className="text-xl font-gotham-medium text-black mb-0 transition-all duration-300 ease-linear group-hover:opacity-70">
                          {project.title}
                        </h2>
                        <p className="text-base leading-6 -mt-[10px] text-gray-700">
                          {project.location}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
                    </div>

          {/* Contact Us Section */}
          <ContactUs />
        </div>
      </div>
    </>
  );
}
