import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className="border-t-2 border-black pt-8 mb-[60px]">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-gotham-medium text-black mb-4">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Let's discuss your vision and bring your architectural dreams to life. 
              Studio Yona is here to transform spaces with innovative design and precision craftsmanship.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <Link 
              to="/contact"
              className="inline-block bg-black text-white font-gotham-medium px-8 py-4 rounded-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              GET IN TOUCH
            </Link>
            <div className="mt-4 text-sm text-gray-600">
              <p>+1 323.555.0123</p>
              <p>hello@studioyona.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
