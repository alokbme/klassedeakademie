import React, { useState } from "react";

export default function AboutUs() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you at ${formData.email}`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              🇩🇪 Your Gateway to Germany
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              About Us —{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Your Launchpad to Germany
              </span>
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed">
              We are not just a language school – we are your launchpad to Germany.
              At our academy, we combine German training, career coaching, and
              academic consulting to help you achieve your goals with confidence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200"
              >
                Get Consultation
              </a>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">What We Do</h3>
              <ul className="space-y-5">
                <ServiceItem
                  letter="A"
                  title="German Training (A1–C2)"
                  description="From beginner to advanced — learn all levels under one roof."
                  gradient="from-purple-500 to-indigo-500"
                />
                <ServiceItem
                  letter="C"
                  title="Career Coaching for Professionals"
                  description="CV building, interview prep & job search guidance for Germany."
                  gradient="from-blue-500 to-cyan-500"
                />
                <ServiceItem
                  letter="M"
                  title="Consulting for Master's Studies in Germany"
                  description="University selection, SOP writing, and admission documentation support."
                  gradient="from-indigo-500 to-purple-500"
                />
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div id="services" className="mt-20 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
              ✨ OUR ADVANTAGES
            </div>
            <h2 className="text-5xl font-extrabold mb-5 bg-gradient-to-r from-gray-800 via-indigo-800 to-blue-800 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Discover what makes us the perfect partner for your German journey
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="📚"
              title="All Levels A1–C2 under one roof"
              description="From absolute beginner to exam-ready C2: structured, continuous progress."
              color="from-purple-500 to-pink-500"
              index="01"
            />
            <FeatureCard
              icon="🎓"
              title="Trainers with German Experience"
              description="Experts who have lived, studied, or worked in Germany."
              color="from-blue-500 to-cyan-500"
              index="02"
            />
            <FeatureCard
              icon="🚀"
              title="Language + Career + Academic Blend"
              description="A unique mix of linguistic, professional, and academic development."
              color="from-indigo-500 to-purple-500"
              index="03"
            />
            <FeatureCard
              icon="👥"
              title="Small Batches & Personalized Support"
              description="Individual attention, progress tracking, and tailored feedback."
              color="from-cyan-500 to-blue-500"
              index="04"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="mt-20 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold mb-3 text-gray-800">
                  Ready to Begin Your Journey?
                </h4>
                <p className="text-gray-600 text-lg">
                  Book a free 15-minute consultation — share your goals, and we'll
                  create your personalized path to Germany.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Book Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ letter, title, description, gradient }) {
  return (
    <li className="flex items-start gap-4 group">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
        {letter}
      </div>
      <div className="flex-1">
        <div className="font-bold text-gray-800 text-lg mb-1">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>
    </li>
  );
}

function FeatureCard({ icon, title, description, color, index }) {
  return (
    <div className="group relative p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      {/* Animated gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Number badge */}
      <div className="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
        {index}
      </div>
      
      {/* Icon with gradient background */}
      <div className="relative mb-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          {icon}
        </div>
      </div>
      
      <h5 className="relative text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        {title}
      </h5>
      <p className="relative text-gray-600 leading-relaxed">
        {description}
      </p>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </div>
  );
}