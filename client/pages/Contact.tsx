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
      
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="font-light text-sm tracking-[0.2em] text-black hover:opacity-70 transition-opacity">
                STUDIO YONA
              </Link>
              
              {/* Navigation Links */}
              <div className="flex space-x-8 text-xs tracking-[0.15em] font-light">
                <Link to="/projects" className="text-black hover:opacity-70 transition-opacity">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-black hover:opacity-70 transition-opacity">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-black">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-thin tracking-tight text-black mb-8">
                Contact
              </h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Left: Contact Copy */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-thin tracking-tight text-black mb-6">
                    We'd love to hear from you.
                  </h2>
                  <p className="text-xl font-light leading-relaxed text-gray-700 mb-8">
                    Let's bring your vision to life with purposeful design.
                  </p>
                  <p className="text-lg font-light leading-relaxed text-gray-600">
                    Every great project begins with a conversation. Whether you're envisioning 
                    a complete home transformation or seeking design consultation, we're here 
                    to listen, collaborate, and create something extraordinary together.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="pt-12 border-t border-gray-200">
                  <h3 className="text-lg font-light tracking-wide text-black mb-6 uppercase">
                    Studio Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-base font-light text-gray-700 leading-relaxed">
                        Studio Yona<br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-base font-light text-gray-700">
                        <a href="tel:+18186685776" className="hover:text-black transition-colors">
                          (818) 668-5776
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-base font-light text-gray-700">
                        <a href="mailto:adam@yona.studio" className="hover:text-black transition-colors">
                          adam@yona.studio
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <div className="flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm tracking-[0.15em] font-light">
                      INSTAGRAM
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm tracking-[0.15em] font-light">
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
                    <label htmlFor="name" className="block text-sm font-light tracking-wide text-gray-700 mb-3 uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-base font-light text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-light tracking-wide text-gray-700 mb-3 uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-base font-light text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-light tracking-wide text-gray-700 mb-3 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-base font-light text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-light tracking-wide text-gray-700 mb-3 uppercase">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-base font-light text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="px-12 py-4 border border-black text-black font-light tracking-[0.15em] text-sm hover:bg-black hover:text-white transition-all duration-500"
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
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Footer Navigation */}
              <div className="flex space-x-8 text-xs tracking-[0.15em] font-light mb-8 md:mb-0">
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  HOME
                </Link>
                <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  CONTACT
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6 mb-8 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-xs tracking-[0.15em]">
                  INSTAGRAM
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-xs tracking-[0.15em]">
                  LINKEDIN
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 font-light tracking-wide">
                © Studio Yona. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
