import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Mail } from 'lucide-react';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Floating Button */}
      <DialogTrigger asChild>
        <button
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-lg flex items-center justify-center text-white"
          aria-label="Contact us"
        >
          <Mail className="w-6 h-6" />
        </button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="sm:max-w-md bg-white rounded-lg p-8 max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">Studio Yona</h2>
            <div className="h-px bg-gray-200 mt-4"></div>
          </div>

          {/* Welcome Message */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello and Welcome. If you have any questions, please leave us a message and we'll get back to you the next business day!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 555-1234"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please type a message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            {/* Agreement Text */}
            <p className="text-sm text-gray-600">
              By clicking or tapping "Send Message", I agree that Studio Yona can email and call me in response to my inquiry, as well as with tips and offers for similar services.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gray-600 hover:bg-gray-700 text-white font-medium text-lg rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
