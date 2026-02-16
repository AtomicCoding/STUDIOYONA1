import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Disclaimer() {
  return (
    <>
      <title>Disclaimer | Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <div className="prose prose-lg max-w-none" style={{ color: '#222222' }}>
              <h2>1. General Disclaimer</h2>
              <p>The information provided on the Studio Yona website (studioyona.com), including text, images, portfolio photographs, renderings, and design content, is for informational and educational purposes only. It does not constitute professional architectural, design, or legal advice; professional design services (unless a formal contract exists); guarantee of specific project outcomes; or endorsement of third-party products or services.</p>

              <h2>2. Portfolio Photography & Imagery</h2>
              <h3>2.1 Copyright & Usage Rights</h3>
              <p>All portfolio photographs are the property of Studio Yona or the original photographer. Reproduction, distribution, or commercial use without written permission is strictly prohibited.</p>

              <h3>2.2 Photographic Accuracy</h3>
              <p>Portfolio images represent completed projects to the best of the photographer's ability. Lighting, weather, season, and camera angles may enhance or alter appearance. Final built projects may differ slightly due to site conditions or material implementation.</p>

              <h3>2.3 Rendering Disclaimer</h3>
              <p>Renderings, sketches, and design concepts are illustrative and may not represent final construction. Final appearance may differ based on contractor capabilities, site conditions, weather, lighting, material substitutions, budget adjustments, and unforeseen site conditions.</p>

              <h3>2.4 Image Use Permission</h3>
              <p>Use of Studio Yona portfolio images for publication, media, education, or display requires written permission from Studio Yona, proper attribution, and compliance with this Disclaimer.</p>

              <h2>3. Design Services Disclaimer</h2>
              <h3>3.1 No Guarantee of Outcomes</h3>
              <p>Studio Yona cannot guarantee specific aesthetic results, buyer/occupant satisfaction, design approval by building departments, contractor ability to execute designs as specified, specific cost estimates, project timelines, or structural or mechanical performance.</p>

              <h3>3.2 Code Compliance</h3>
              <p>All designs must comply with applicable building codes and zoning regulations. Building departments may require modifications to submitted designs. The final built project may differ from approved designs due to code enforcement.</p>

              <h3>3.3 Site Conditions</h3>
              <p>Designs are based on site information available at time of design. Unforeseen site conditions may require design modifications. Responsibility for site investigation is shared with the client, builder, and engineers.</p>

              <h3>3.4 Professional Responsibility</h3>
              <p>Structural, mechanical, electrical, and landscape designs are typically prepared by licensed engineers or specialists. Studio Yona coordinates these disciplines but does not assume responsibility for their work. Contractor execution and material selection are the responsibility of the construction team.</p>

              <h2>4. No Professional Advice</h2>
              <p><strong>Website content does not constitute professional services.</strong> Engagement of Studio Yona requires a formal written agreement, defined scope of work, and fee arrangement.</p>
              <p><strong>Educational Content:</strong> Articles and design insights are educational and do not replace professional consultation.</p>
              <p><strong>Do not rely on this Site for:</strong> Legal advice (consult a licensed attorney), financial planning (consult a financial advisor), or building code compliance (consult your local building department).</p>

              <h2>5. Links to Third-Party Sites</h2>
              <p>Our Site contains links to external websites. Studio Yona:</p>
              <ul>
                <li>Does not endorse third-party content</li>
                <li>Is not responsible for the accuracy, legality, or reliability of linked sites</li>
                <li>Assumes no responsibility for third-party privacy practices or terms</li>
              </ul>
              <p>Accessing external sites is at your own risk.</p>

              <h2>6. Limitation of Liability</h2>
              <p><strong>Studio Yona is not liable for:</strong></p>
              <ul>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Errors or omissions in Site content</li>
                <li>Interruption or unavailability of the Site</li>
                <li>Reliance on information provided on the Site</li>
              </ul>

              <h2>7. Professional Licensing</h2>
              <p><strong>About Our Services:</strong> Professional architectural services require a licensed architect. When Studio Yona provides architectural services, we are bound by professional standards, codes of conduct, and insurance requirements.</p>

              <h2>8. No Warranty</h2>
              <p>The Site and its content are provided "as is" without warranty of any kind:</p>
              <ul>
                <li>No implied warranty of merchantability or fitness</li>
                <li>No warranty that the Site will be error-free or secure</li>
                <li>No warranty regarding accuracy or completeness of content</li>
              </ul>

              <h2>9. Entire Agreement</h2>
              <p>This Disclaimer, together with our Terms of Use, Privacy Policy, and Cookie Policy, constitutes the entire agreement regarding the Site and services.</p>

              <h2>10. Contact for Questions</h2>
              <p>Questions about this Disclaimer?</p>
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
