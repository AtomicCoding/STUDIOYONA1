import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [country, setCountry] = useState('United States');

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
          zip: formData.zip,
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

      <div className="min-h-screen bg-white">

        {/* Main Content */}
        <div className="pt-20 pb-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-20 pt-12">
              <h1 className="text-6xl md:text-8xl font-thin tracking-tight text-black font-serif">
                Let's connect
              </h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Left: Contact Details & Social */}
              <div className="space-y-12">
                {/* Contact Information */}
                <div className="space-y-6 text-gray-800">
                  <div>
                    <p className="text-base font-light leading-relaxed">
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
                    <p className="text-base font-light">
                      <a href="tel:+18186685776" className="hover:text-black transition-colors">
                        (818) 668-5776
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-base font-light">
                      <a href="mailto:adam@yona.studio" className="hover:text-black transition-colors">
                        adam@yona.studio
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <div className="flex space-x-8">
                    <a
                      href="https://www.instagram.com/studio.yona/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors text-sm tracking-[0.15em] font-light"
                    >
                      INSTAGRAM
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adam-yona-962892156/?trk=people-guest_people_search-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors text-sm tracking-[0.15em] font-light"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:pl-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-light tracking-[0.1em] text-gray-600 mb-3 uppercase">
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
                        placeholder=""
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-light tracking-[0.1em] text-gray-600 mb-3 uppercase">
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
                        placeholder=""
                      />
                    </div>

                    {/* Phone Field with Country Selector */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-light tracking-[0.1em] text-zinc-400 mb-3 uppercase">
                        Phone *
                      </label>
                      <div className="flex gap-3">
                        <select
                          value={country}
                          onChange={handleCountryChange}
                          className="bg-white border border-zinc-300 rounded-sm px-4 py-3 text-base font-light text-black focus:border-zinc-600 focus:outline-none transition-colors w-32"
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
                          className="flex-1 bg-white border border-zinc-300 rounded-sm px-4 py-3 text-base font-light text-black placeholder-zinc-500 focus:border-zinc-600 focus:outline-none transition-colors"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Zip Field */}
                    <div>
                      <label htmlFor="zip" className="block text-sm font-light tracking-[0.1em] text-zinc-400 mb-3 uppercase">
                        Zip
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-base font-light text-black placeholder-zinc-500 focus:border-zinc-600 focus:outline-none transition-colors"
                        placeholder=""
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
                        placeholder=""
                      />
                    </div>

                    {/* Privacy Notice */}
                    <div className="text-xs font-light text-zinc-300 leading-relaxed">
                      We care about your privacy. Please don't submit sensitive information such as social security numbers, credit card or bank information.
                    </div>

                    {/* Consent Checkbox */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleCheckboxChange}
                          required
                          className="mt-1 w-4 h-4 bg-white border border-zinc-300 rounded-sm cursor-pointer focus:outline-none"
                        />
                        <span className="text-xs font-light text-zinc-300 leading-relaxed">
                          I agree that Studio Yona can email and call me in response to my inquiry, as well as with tips and offers for similar services.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-12 py-4 bg-black/60 border border-white/50 text-white font-light tracking-[0.15em] text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-sm backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'SUBMITTING...' : 'Submit'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex items-center justify-center min-h-96">
                    <p className="text-white text-lg font-light text-center">
                      Thank you for reaching out. We'll be in touch shortly.
                    </p>
                  </div>
                )}
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
