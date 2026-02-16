import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Cookies() {
  return (
    <>
      <title>Cookie Policy | Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <div className="prose prose-lg max-w-none" style={{ color: '#222222' }}>
              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small files stored on your device when you visit our website. They enable us to remember your preferences, understand how you use our Site, and improve our services.</p>

              <h2>2. Types of Cookies We Use</h2>
              <h3>2.1 Essential Cookies</h3>
              <p><strong>Function:</strong> Required for Site functionality including session management and security.</p>
              <p><strong>Disablement:</strong> Disabling these cookies may prevent the Site from functioning properly.</p>

              <h3>2.2 Performance & Analytics Cookies</h3>
              <p><strong>Function:</strong> Understand how visitors use our Site through page views, engagement tracking, and traffic sources.</p>
              <p><strong>Provider:</strong> Google Analytics</p>
              <p><strong>Retention:</strong> 26 months (configurable)</p>
              <p><strong>Privacy:</strong> IP addresses are anonymized in Google Analytics.</p>

              <h3>2.3 Marketing & Social Cookies</h3>
              <p><strong>Function:</strong> Enable social media sharing and integration with platforms like Instagram and LinkedIn.</p>

              <h2>3. Cookie Consent & Control</h2>
              <h3>3.1 Consent Banner</h3>
              <p>When you first visit our Site, we display a cookie consent banner. You may accept all cookies, reject non-essential cookies, or manage your preferences.</p>

              <h3>3.2 How to Control Cookies</h3>
              <p><strong>Browser Settings:</strong> You can control cookies through your browser's privacy settings.</p>
              <p><strong>Google Analytics Opt-Out:</strong> Install the Google Analytics opt-out browser extension.</p>
              <p><strong>Note:</strong> Disabling cookies may affect Site functionality.</p>

              <h2>4. Third-Party Services</h2>
              <p>We use the following third-party services which may set their own cookies:</p>
              <ul>
                <li>Google Analytics – for website analytics</li>
                <li>Social media platforms – for sharing and integration</li>
              </ul>
              <p>We recommend reviewing their privacy policies for more information.</p>

              <h2>5. Changes to This Policy</h2>
              <p>We may update this Cookie Policy periodically. Material changes will be communicated via notification on the Site.</p>

              <h2>6. Contact Us</h2>
              <p>Questions about cookies? Contact:</p>
              <p>
                <strong>Studio Yona</strong><br />
                <a href="mailto:contact@studioyona.com">contact@studioyona.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
              <div>
                <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                    alt="Studio Yona"
                    className="h-14 md:h-16 w-auto"
                  />
                </Link>
              </div>
              <div className="flex justify-center space-x-8 text-sm font-medium">
                <Link to="/projects" className="text-black hover:text-gray-600 transition-colors">Projects</Link>
                <Link to="/about" className="text-black hover:text-gray-600 transition-colors">About</Link>
                <Link to="/contact" className="text-black hover:text-gray-600 transition-colors">Contact</Link>
              </div>
              <div className="flex justify-end space-x-6 text-sm font-medium">
                <a href="https://www.instagram.com/studio.yona/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/adam-yona-962892156?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-wrap justify-center gap-6 text-xs font-light text-gray-600">
                <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                <span className="text-gray-300">·</span>
                <Link to="/terms" className="hover:text-black transition-colors">Terms of Use</Link>
                <span className="text-gray-300">·</span>
                <Link to="/cookies" className="hover:text-black transition-colors">Cookies</Link>
                <span className="text-gray-300">·</span>
                <Link to="/accessibility" className="hover:text-black transition-colors">Accessibility</Link>
                <span className="text-gray-300">·</span>
                <Link to="/disclaimer" className="hover:text-black transition-colors">Disclaimer</Link>
              </div>
              <div className="text-center mt-6 text-xs font-light text-gray-600">
                <p>© Studio Yona. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
