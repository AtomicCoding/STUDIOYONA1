import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactUs from '../components/ContactUs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
      
      <div className="min-h-screen">
        {/* Header */}
        <header className="relative z-[1000] h-[90px] md:h-[90px] font-gotham-medium">
          <div className="w-full px-4">
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
                    className="text-black font-gotham-medium text-xs md:text-sm transition-all duration-300 ease-linear cursor-default"
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
          <div className="w-full px-4">
            <div className="w-full">
              
              {/* General Inquiries Form */}
              <div className="mb-[60px]">
                <div className="relative">
                  <h2 className="text-xl font-gotham-medium text-black mb-5">
                    General Inquiries
                  </h2>
                  
                  <form onSubmit={handleSubmit}>
                    <fieldset className="min-w-min">
                      {/* Name Field */}
                      <div className="clear-both mb-[5px] overflow-auto w-full flex">
                        <div className="pr-[5px] align-top w-[135px] leading-6">
                          <label htmlFor="name" className="cursor-default inline leading-6">
                            Name*
                          </label>
                        </div>
                        <div className="leading-6 w-full">
                          <input
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-[rgb(187,187,187)] bg-white text-black p-[10px] box-border inline-block cursor-text overflow-clip leading-normal outline-black"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="clear-both mb-[5px] overflow-auto w-full flex">
                        <div className="pr-[5px] align-top w-[135px] leading-6">
                          <label htmlFor="email" className="cursor-default inline leading-6">
                            Email*
                          </label>
                        </div>
                        <div className="leading-6 w-full">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-[rgb(187,187,187)] bg-white text-black p-[10px] box-border inline-block cursor-text overflow-clip leading-normal outline-black"
                          />
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div className="clear-both mb-[5px] overflow-auto w-full flex">
                        <div className="pr-[5px] align-top w-[135px] leading-6">
                          <label htmlFor="subject" className="cursor-default inline leading-6">
                            Subject
                          </label>
                        </div>
                        <div className="leading-6 w-full">
                          <input
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full border border-[rgb(187,187,187)] bg-white text-black p-[10px] box-border inline-block cursor-text overflow-clip leading-normal outline-black"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="clear-both mb-[5px] overflow-auto w-full flex">
                        <div className="pr-[5px] align-top w-[135px] leading-6">
                          <label htmlFor="message" className="cursor-default inline leading-6">
                            Message*
                          </label>
                        </div>
                        <div className="leading-6 w-full">
                          <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="w-full h-[150px] border border-[rgb(187,187,187)] bg-white text-black p-[10px] box-border inline-block cursor-text resize-both whitespace-pre-wrap leading-normal outline-black"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="clear-both mb-[5px] overflow-auto w-full flex">
                        <div className="pr-[5px] align-top w-[135px] leading-6" />
                        <div className="leading-6 w-full">
                          <br className="inline leading-6" />
                          <input
                            type="submit"
                            value="Submit"
                            className="inline-block cursor-pointer bg-white border border-[rgb(187,187,187)] text-black font-gotham-medium text-[15px] py-[5px] text-center uppercase select-none whitespace-pre w-[100px] leading-normal outline-black hover:opacity-70 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>

              {/* Mailing Address and Phone */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <h2 className="text-xl font-gotham-medium text-black mb-5">
                  Mailing Address and Phone
                </h2>
                <p className="leading-6">
                  <span>Studio Yona</span>
                  <br className="inline leading-6" />
                  <span>1234 Sunset Boulevard</span>
                  <br className="inline leading-6" />
                  <span>Los Angeles, CA 90026</span>
                  <br className="inline leading-6" />
                  <br className="inline leading-6" />
                  <span>+1 323.555.0123</span>
                </p>
              </div>

              {/* Employment */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <h2 className="text-xl font-gotham-medium text-black mb-5">
                  Employment
                </h2>
                <p className="leading-6">
                  For employment opportunities, please send materials in PDF
                  format to jobs@studioyona.com or a hard copy to the
                  address above. Please note that hard copies will not be
                  returned.
                </p>
              </div>

              {/* Press */}
              <div className="border-t border-[rgb(187,187,187)] pt-5 mb-[60px]">
                <h2 className="text-xl font-gotham-medium text-black mb-5">
                  Press
                </h2>
                <p className="leading-6">
                  For press inquiries, please contact press@studioyona.com
                </p>
                            </div>

              {/* Contact Us Section */}
              <ContactUs />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
