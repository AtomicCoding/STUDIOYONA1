import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Instagram, Linkedin, ChevronDown } from 'lucide-react';
import Header from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [country, setCountry] = useState('United States');
  const [showMap, setShowMap] = useState(false);

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Please agree to the consent statement before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: country,
          message: formData.message,
          consent: formData.consent,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <title>Contact - Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="bg-white">

        {/* Main Content */}
        <div className="pt-12 pb-16 lg:pt-16 lg:pb-8 relative min-h-screen lg:min-h-[unset] flex flex-col lg:flex-row">
          <div className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-6 w-full">
            {/* Page Header */}
            <div className="text-center mb-12 lg:mb-8 pt-6 lg:pt-0">
              <h1 className="text-5xl md:text-7xl lg:text-6xl font-thin tracking-tight text-black font-serif">
                Let's connect
              </h1>
            </div>

            {/* Content Grid - Two Column Layout on Desktop (Map Left, Contact Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Left: Map (on left for desktop via order-classes, hidden on mobile) */}
              <div className="lg:col-span-1 w-full order-2 lg:order-1">
                {/* Desktop Map - Always Visible on Large Screens */}
                <div className="hidden lg:block">
                  <div className="rounded-[14px] overflow-hidden h-[644px] shadow-sm border border-gray-200" style={{
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.5)'
                  }}>
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.556937098913!2d-118.41631!3d34.073644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d7f9e7c7c7%3A0x9c8f7f7c7c7c7c7c!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1640000000000"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>
                </div>

                {/* Mobile & Small Height - Map Toggle */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setShowMap(!showMap)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors text-sm font-light text-gray-700"
                  >
                    <span>View map</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showMap ? 'rotate-180' : ''}`} />
                  </button>

                  {showMap && (
                    <div className="mt-4 rounded-[14px] overflow-hidden h-80 shadow-sm border border-gray-200" style={{
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.5)'
                    }}>
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.556937098913!2d-118.41631!3d34.073644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d7f9e7c7c7%3A0x9c8f7f7c7c7c7c7c!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2dus!4v1640000000000"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 'none' }}
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Contact Details, Social, & Form (on right for desktop via order-classes, first on mobile) */}
              <div className="lg:col-span-2 space-y-8 lg:space-y-6 order-1 lg:order-2">
                {/* Contact Information */}
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="text-base lg:text-sm font-light leading-relaxed">
                      <a
                        href="https://www.google.com/maps/search/Beverly+Hills,+CA+90210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                      >
                        Beverly Hills, CA 90210
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-base lg:text-sm font-light">
                      <a href="tel:+18186685776" className="hover:text-black transition-colors">
                        (818) 668-5776
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-base lg:text-sm font-light">
                      <a href="mailto:adam@yona.studio" className="hover:text-black transition-colors">
                        adam@yona.studio
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Links - Inline Icons & Text */}
                <div className="pt-2">
                  <div className="flex space-x-6">
                    <a
                      href="https://www.instagram.com/studio.yona/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-500 hover:text-gray-900 opacity-75 hover:opacity-100 transition-all text-sm tracking-[0.05em] font-light"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adam-yona-962892156/?trk=people-guest_people_search-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-500 hover:text-gray-900 opacity-75 hover:opacity-100 transition-all text-sm tracking-[0.05em] font-light"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="pt-4 lg:pt-0">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-4">
                      {/* Form Heading */}
                      <h2 className="text-2xl lg:text-xl font-light text-black font-serif mb-2">
                        Let's Connect!
                      </h2>

                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-xs lg:text-xs font-light tracking-[0.1em] text-gray-600 mb-2 uppercase">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white border border-gray-300 rounded-sm px-3 py-2 lg:py-2 text-sm lg:text-xs font-light text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors"
                          placeholder=""
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-xs lg:text-xs font-light tracking-[0.1em] text-gray-600 mb-2 uppercase">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white border border-gray-300 rounded-sm px-3 py-2 lg:py-2 text-sm lg:text-xs font-light text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors"
                          placeholder=""
                        />
                      </div>

                      {/* Phone Field with Country Selector */}
                      <div>
                        <label htmlFor="phone" className="block text-xs lg:text-xs font-light tracking-[0.1em] text-gray-600 mb-2 uppercase">
                          Phone *
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={country}
                            onChange={handleCountryChange}
                            className="bg-white border border-gray-300 rounded-sm px-3 py-2 lg:py-2 text-sm lg:text-xs font-light text-black focus:border-gray-400 focus:outline-none transition-colors w-28 lg:w-24"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                            <option>Other</option>
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="flex-1 bg-white border border-gray-300 rounded-sm px-3 py-2 lg:py-2 text-sm lg:text-xs font-light text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors"
                            placeholder=""
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-xs lg:text-xs font-light tracking-[0.1em] text-gray-600 mb-2 uppercase">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white border border-gray-300 rounded-sm px-3 py-2 lg:py-2 text-sm lg:text-xs font-light text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors resize-none"
                          placeholder=""
                        />
                      </div>

                      {/* Privacy Notice */}
                      <div className="text-xs lg:text-xs font-light text-gray-700 leading-relaxed pt-1">
                        We care about your privacy. Please don't submit sensitive information such as social security numbers, credit card or bank information.
                      </div>

                      {/* Consent Checkbox */}
                      <div>
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleCheckboxChange}
                            required
                            className="mt-1 w-4 h-4 bg-white border border-gray-400 rounded-sm cursor-pointer focus:outline-none flex-shrink-0"
                          />
                          <span className="text-xs lg:text-xs font-light text-gray-700 leading-relaxed">
                            I agree that Studio Yona can email and call me in response to my inquiry, as well as with tips and offers for similar services.
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2 lg:pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-10 lg:px-8 py-3 lg:py-2 bg-black border border-black text-white font-light tracking-[0.15em] text-xs lg:text-xs hover:bg-gray-900 hover:border-gray-900 transition-all duration-500 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'SUBMITTING...' : 'Submit'}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex items-center justify-center py-12 lg:py-8">
                      <p className="text-black text-lg lg:text-base font-light text-center">
                        Thank you for reaching out. We'll be in touch shortly.
                      </p>
                    </div>
                  )}
                </div>
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
                    className="h-14 md:h-16 w-auto invert"
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
                <a
                  href="https://www.instagram.com/studio.yona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-yona-962892156?trk=people-guest_people_search-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  LINKEDIN
                </a>
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
