import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function ContactWidget() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-40 min-h-[44px] px-5 py-3 rounded-full bg-black hover:bg-gray-800 transition-all shadow-lg flex items-center gap-2 text-white font-light text-sm tracking-wide"
      aria-label="Go to contact page"
    >
      <Mail className="w-4 h-4" />
      <span className="hidden sm:inline">Contact</span>
    </Link>
  );
}
