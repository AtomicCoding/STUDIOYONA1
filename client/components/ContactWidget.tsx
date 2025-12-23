import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Mail } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if form is valid (for button disable state)
  const isFormValid = (): boolean => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      isValidEmail(formData.email) &&
      formData.message.trim() !== ''
    );
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Generate mailto link and submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Build the email body
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || '(not provided)'}
Message:
${formData.message}`;

    // Create mailto link
    const mailtoLink = `mailto:adam@yona.studio?subject=${encodeURIComponent('New message from yona.studio')}&body=${encodeURIComponent(emailBody)}`;

    // Trigger mailto
    window.location.href = mailtoLink;

    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Floating Contact Button */}
      <DialogTrigger asChild>
        <button
          className="fixed bottom-8 right-8 z-40 min-h-[44px] px-5 py-3 rounded-full bg-black hover:bg-gray-800 transition-all shadow-lg flex items-center gap-2 text-white font-light text-sm tracking-wide"
          aria-label="Open contact form"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">Contact</span>
        </button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="sm:max-w-[520px] bg-white rounded-lg p-8 max-h-[75vh] overflow-y-auto">
        {/* Visually Hidden Title for Screen Readers */}
        <DialogTitle className="sr-only">Contact Studio Yona</DialogTitle>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-6">
            <h2 className="text-3xl font-light text-black mb-3">Let's talk.</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Share a few details and I'll reply within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-light text-black mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className={`w-full px-4 py-2.5 border rounded-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-light text-black mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-2.5 border rounded-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field (Optional) */}
            <div>
              <label className="block text-sm font-light text-black mb-2">
                Phone <span className="text-gray-400 text-xs font-light">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-light text-black mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                rows={4}
                className={`w-full px-4 py-2.5 border rounded-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full py-3 text-sm font-light tracking-wide rounded-sm transition-all ${
                isFormValid()
                  ? 'bg-black hover:bg-gray-800 text-white cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Send Message
            </button>

            {/* Helper Text */}
            <p className="text-xs text-gray-500 text-center">
              This will open your email app to send the message.
            </p>

            {/* Direct Email Link */}
            <div className="text-center pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-600">
                Prefer email?{' '}
                <a
                  href="mailto:adam@yona.studio"
                  className="text-black hover:underline font-light"
                >
                  adam@yona.studio
                </a>
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
