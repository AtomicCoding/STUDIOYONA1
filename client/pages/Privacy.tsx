import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Privacy() {
  return (
    <>
      <title>Privacy Policy | Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="py-16 bg-white header-offset">
          <div className="max-w-4xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <div className="prose prose-lg max-w-none" style={{ color: '#222222' }}>
              <h2>1. Introduction</h2>
              <p>Studio Yona ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, studioyona.com (the "Site"), and use our services.</p>
              <p>Please read this Privacy Policy carefully. If you do not agree with our policies and practices, do not use our Site.</p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide Directly</h3>
              <p><strong>Contact Form Data:</strong> When you submit our contact form, we collect your full name, email address, phone number, project type and description, timeline information, and any additional messages.</p>
              <p><strong>Email Communications:</strong> If you email us directly, we collect your email address and the content of your message.</p>

              <h3>2.2 Information Collected Automatically</h3>
              <p><strong>Website Analytics:</strong> We use Google Analytics to collect information about how you interact with our Site, including pages visited, time spent on pages, referral source, device type, operating system, and browser type. Your IP address is anonymized.</p>
              <p><strong>Cookies:</strong> Our Site uses cookies to enhance your browsing experience. See our Cookie Policy for details.</p>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>Service Delivery: To respond to your inquiries and provide architectural services</li>
                <li>Communication: To follow up on project requests and send meeting confirmations</li>
                <li>Improvement: To understand how you use our Site and improve our services</li>
                <li>Legal Compliance: To comply with applicable laws and regulations</li>
              </ul>
              <p>We do <strong>not</strong> sell or share your personal information with third parties for their marketing purposes.</p>

              <h2>4. Data Retention</h2>
              <ul>
                <li>Contact Form Data: Retained for 3 years to manage ongoing client relationships</li>
                <li>Email Communications: Retained for 2 years for reference and legal compliance</li>
                <li>Analytics Data: Automatically deleted by Google Analytics after 26 months of inactivity</li>
                <li>Server Logs: Retained by hosting provider for 30–90 days for security purposes</li>
              </ul>
              <p>You may request deletion of your personal information at any time by contacting us.</p>

              <h2>5. Your Privacy Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal information. You may also opt out of marketing communications at any time.</p>

              <h2>6. Security</h2>
              <p>We implement reasonable security measures to protect your personal information, including encryption of data in transit (SSL/TLS). However, no method of transmission over the internet is completely secure.</p>

              <h2>7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us:</p>
              <p>
                <strong>Studio Yona</strong><br />
                <a href="mailto:contact@studioyona.com">contact@studioyona.com</a>
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. We will notify you of material changes by updating the "Last Updated" date.</p>
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
