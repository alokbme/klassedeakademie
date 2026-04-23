

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '', phoneNo: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                📞 GET IN TOUCH
              </div>
              <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Let's Start Your Journey
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Have questions about our courses or services? We're here to help you achieve your German dream.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <ContactInfoCard
                icon="📧"
                title="Email Us"
                info="info@klassedeakademie.com"
                gradient="from-blue-500 to-cyan-500"
              />
              <ContactInfoCard
                icon="📱"
                title="Call / WhatsApp"
                info="+91 9270941867"
                gradient="from-green-500 to-emerald-500"
              />
              <ContactInfoCard
                icon="📍"
                title="Visit Us"
                info="Kolhapur, Maharashtra, India"
                gradient="from-purple-500 to-pink-500"
              />
              <ContactInfoCard
                icon="🌐"
                title="Global Presence"
                info="India • UK • Germany • USA"
                gradient="from-orange-500 to-red-500"
              />
            </div>

            {/* Social proof */}
            <div className="pt-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {['🧑', '👩', '👨', '🧑‍🎓', '👩‍💼'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-xl border-2 border-white shadow-lg"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-700 font-semibold ml-2">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white">
              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl animate-bounce-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-green-800">Success!</div>
                      <div className="text-sm text-green-700">Your message has been sent. We'll contact you soon!</div>
                    </div>
                  </div>
                </div>
              )}

              <h3 className="text-3xl font-bold mb-6 text-gray-800">Send us a Message</h3>

              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      👤
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Enter your full name"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl shadow-sm transition-all duration-200 ${
                        focusedField === 'name'
                          ? 'border-blue-500 ring-4 ring-blue-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } focus:outline-none`}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      📧
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="your.email@example.com"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl shadow-sm transition-all duration-200 ${
                        focusedField === 'email'
                          ? 'border-blue-500 ring-4 ring-blue-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } focus:outline-none`}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phoneNo"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      📱
                    </div>
                    <input
                      type="tel"
                      name="phoneNo"
                      id="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phoneNo')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="+91 99756 48924"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl shadow-sm transition-all duration-200 ${
                        focusedField === 'phoneNo'
                          ? 'border-blue-500 ring-4 ring-blue-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } focus:outline-none`}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-gray-400">
                      💬
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Tell us about your goals and how we can help..."
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl shadow-sm transition-all duration-200 resize-none ${
                        focusedField === 'message'
                          ? 'border-blue-500 ring-4 ring-blue-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } focus:outline-none`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="group w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* Privacy note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 Your information is safe with us. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ContactInfoCard({ icon, title, info, gradient }) {
  return (
    <div className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-500">{title}</div>
        <div className="text-lg font-bold text-gray-800">{info}</div>
      </div>
    </div>
  );
}

export default ContactUs;
