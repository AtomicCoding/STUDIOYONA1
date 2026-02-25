import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Accessibility() {
  return (
    <>
      <title>Accessibility Statement | Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">
        <section className="py-16 bg-white header-offset">
          <div className="max-w-4xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <div className="prose prose-lg max-w-none" style={{ color: '#222222' }}>
              <h2>1. Commitment to Accessibility</h2>
              <p>Studio Yona is committed to ensuring our website is accessible to all visitors, including those with disabilities. We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and applicable accessibility laws.</p>

              <h2>2. Accessibility Features</h2>
              <h3>Visual Accessibility</h3>
              <ul>
                <li>High-contrast color schemes compliant with WCAG AA standards</li>
                <li>Scalable fonts (adjustable via browser zoom)</li>
                <li>Descriptive alternative text for all images</li>
                <li>Meaningful link text</li>
              </ul>

              <h3>Navigation</h3>
              <ul>
                <li>Keyboard-only navigation (no mouse required)</li>
                <li>Clear heading hierarchy</li>
                <li>Logical tab order for form fields</li>
              </ul>

              <h3>Forms</h3>
              <ul>
                <li>All form fields have associated labels</li>
                <li>Clear error messages linked to form inputs</li>
                <li>Instructions for complex interactions</li>
              </ul>

              <h3>Screen Reader Support</h3>
              <ul>
                <li>Semantic HTML structure</li>
                <li>ARIA labels for interactive elements</li>
                <li>Proper form label associations</li>
              </ul>

              <h2>3. Supported Assistive Technologies</h2>
              <p>Our Site is compatible with popular assistive technologies including:</p>
              <ul>
                <li>Screen Readers: NVDA, JAWS, VoiceOver, TalkBack</li>
                <li>Magnification Software: ZoomText, browser zoom</li>
                <li>Voice Control: Dragon, Voice Control</li>
                <li>Keyboard Navigation: Full keyboard access without mouse</li>
              </ul>

              <h2>4. Browser Compatibility</h2>
              <p>We support accessibility features on Chrome, Firefox, Safari, Edge, and mobile browsers (iOS Safari, Chrome Mobile).</p>

              <h2>5. Adjustment of Your Browser Settings</h2>
              <p><strong>Increase Text Size:</strong> Windows: Ctrl + (Plus); Mac: Cmd + (Plus)</p>
              <p><strong>High Contrast Mode:</strong> Windows: Alt + Left Alt + Print Screen</p>
              <p><strong>Enable Screen Reader:</strong> Windows: Windows Narrator (Ctrl + Alt + N); Mac: VoiceOver (Cmd + F5)</p>

              <h2>6. Known Accessibility Considerations</h2>
              <p>We continuously work to improve accessibility. Portfolio images contain descriptions of projects and design elements. Some complex interactive elements are designed to be keyboard accessible.</p>

              <h2>7. Accessibility Accommodations</h2>
              <p>If you require accessibility accommodations not available on our Site, please contact us. We will work to provide alternative formats or solutions for specific accessibility barriers.</p>

              <h2>8. Contact & Feedback</h2>
              <p>Accessibility Issues or Requests:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:contact@studioyona.com">contact@studioyona.com</a><br />
                Please provide:
              </p>
              <ul>
                <li>Description of the accessibility barrier</li>
                <li>Page URL or specific content</li>
                <li>Preferred contact method</li>
              </ul>
              <p>We will respond within 5 business days and work toward a solution.</p>
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
