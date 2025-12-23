import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <title>Contact - Studio Yona</title>
      
      <div className="min-h-screen bg-zinc-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                  alt="Studio Yona"
                  className="h-16 w-auto invert"
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex space-x-10 text-sm tracking-[0.2em] font-light">
                <Link to="/projects" className="text-zinc-300 hover:text-white transition-colors">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-zinc-300 hover:text-white transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-white">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20 pb-24 relative">
          {/* Background Image - Fourth Image */}
          <div className="absolute inset-0">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa5050a739dc240f19ab64fbb0cdf6658?format=webp&width=800"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-20 pt-12">
              <h1 className="text-6xl md:text-8xl font-thin tracking-tight text-white mb-8 font-serif">
                Contact
              </h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Left: Contact Copy & Info */}
              <div className="space-y-12 text-white">
                <div>
                  <h2 className="text-3xl md:text-4xl font-thin tracking-tight mb-8 font-serif">
                    Let's bring your vision to life with purposeful design.
                  </h2>
                  
                  <p className="text-xl font-light leading-relaxed text-zinc-200 mb-8">
                    Every great project begins with a conversation. Whether you're envisioning 
                    a complete home transformation or seeking design consultation, we're here 
                    to listen, collaborate, and create something extraordinary together.
                  </p>
                  
                  <p className="text-lg font-light leading-relaxed text-zinc-300">
                    We work closely with a select number of clients each year, ensuring that 
                    every project receives our full attention and creative energy.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <h3 className="text-lg font-light tracking-[0.2em] text-zinc-400 uppercase border-b border-zinc-600 pb-4">
                    Studio Information
                  </h3>
                  
                  <div className="space-y-6 text-zinc-200">
                    <div>
                      <p className="text-lg font-light leading-relaxed">
                        Studio Yona<br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-lg font-light">
                        <a href="tel:+18186685776" className="hover:text-white transition-colors">
                          (818) 668-5776
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-lg font-light">
                        <a href="mailto:adam@yona.studio" className="hover:text-white transition-colors">
                          adam@yona.studio
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <div className="flex space-x-8">
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm tracking-[0.15em] font-light">
                      INSTAGRAM
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm tracking-[0.15em] font-light">
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:pl-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-light tracking-[0.1em] text-zinc-400 mb-3 uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-base font-light text-black placeholder-zinc-500 focus:border-zinc-600 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-light tracking-[0.1em] text-zinc-400 mb-3 uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-base font-light text-black placeholder-zinc-500 focus:border-zinc-600 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-light tracking-[0.1em] text-zinc-400 mb-3 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-base font-light text-black placeholder-zinc-500 focus:border-zinc-600 focus:outline-none transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-light tracking-[0.1em] text-zinc-400 mb-3 uppercase">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-base font-light text-black placeholder-zinc-500 focus:border-zinc-600 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="px-12 py-4 bg-black/60 border border-white/50 text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-sm backdrop-blur-sm"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black border-t border-zinc-800 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Logo */}
              <div>
                <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                    alt="Studio Yona"
                    className="h-10 w-auto invert"
                  />
                </Link>
              </div>
              
              {/* Center: Navigation */}
              <div className="flex justify-center space-x-8 text-xs tracking-[0.15em] font-light">
                <Link to="/" className="text-zinc-400 hover:text-white transition-colors">HOME</Link>
                <Link to="/projects" className="text-zinc-400 hover:text-white transition-colors">PROJECTS</Link>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">ABOUT</Link>
                <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">CONTACT</Link>
              </div>
              
              {/* Right: Social */}
              <div className="flex justify-end space-x-6 text-xs tracking-[0.15em] font-light">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">LINKEDIN</a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center pt-8 mt-8 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 font-light tracking-wide">
                © Studio Yona. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
