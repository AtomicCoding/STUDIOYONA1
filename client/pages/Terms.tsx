import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Terms() {
  return (
    <>
      <title>Terms of Use | Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">
        <section className="py-16 bg-white header-offset">
          <div className="max-w-4xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Terms of Use</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <div className="prose prose-lg max-w-none" style={{ color: '#222222' }}>
              <h2>1. Agreement to Terms</h2>
              <p>By accessing and using the Studio Yona website (studioyona.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

              <h2>2. Use License</h2>
              <p>Studio Yona grants you a limited, non-exclusive, non-transferable license to access and view the Site and its content for informational purposes only.</p>
              <p>You agree <strong>not to</strong>:</p>
              <ul>
                <li>Reproduce, duplicate, copy, or re-sell any portion of the Site or its content</li>
                <li>Modify or create derivative work based on the Site</li>
                <li>Frame the Site or use meta tags to misrepresent the source of content</li>
                <li>Use automated means (scraping, bots) to access the Site</li>
              </ul>

              <h2>3. Disclaimer of Warranties</h2>
              <p><strong>The Site and its content are provided "as is" without warranties of any kind.</strong> Studio Yona disclaims all express and implied warranties, including merchantability and fitness for a particular purpose.</p>

              <h2>4. Portfolio & Project Imagery</h2>
              <p><strong>Photography Rights:</strong> Portfolio photographs are the property of Studio Yona or the original photographer and are used with permission. Reproduction or distribution without written permission is prohibited.</p>
              <p><strong>Conceptual Work:</strong> Renderings, sketches, and design concepts are illustrative and may differ from completed projects. Studio Yona makes no warranty regarding the accuracy of renderings.</p>

              <h2>5. Architectural Design & Services Disclaimer</h2>
              <p><strong>No Professional Advice:</strong> Content on the Site is informational and educational only. It does not constitute professional architectural, design, or legal advice.</p>
              <p><strong>Design Outcomes:</strong> Studio Yona cannot guarantee specific aesthetic outcomes. Final designs are subject to building codes, structural requirements, contractor capabilities, client budget, and site conditions.</p>

              <h2>6. Third-Party Links & Content</h2>
              <p>The Site contains links to third-party websites. Studio Yona does not endorse or assume responsibility for third-party sites and is not responsible for their accuracy or legality. Accessing third-party sites is at your own risk.</p>

              <h2>7. Intellectual Property</h2>
              <p><strong>Our Content:</strong> All text, graphics, logos, images, and other content on the Site are the property of Studio Yona or licensed third parties. Copyright © 2025 Studio Yona. All rights reserved.</p>
              <p><strong>Limited Use:</strong> You may reproduce content for personal, non-commercial use only. Any other use requires written permission.</p>

              <h2>8. Governing Law</h2>
              <p>These Terms are governed by applicable law. Any dispute shall be addressed through good-faith negotiation.</p>

              <h2>9. Contact for Legal Issues</h2>
              <p>For questions about these Terms or to report a violation, contact:</p>
              <p>
                <strong>Studio Yona</strong><br />
                <a href="mailto:contact@studioyona.com">contact@studioyona.com</a>
              </p>

              <h2>10. Changes to This Agreement</h2>
              <p>We may update these Terms periodically. Your continued use of the Site after changes constitutes acceptance of the updated terms.</p>
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
