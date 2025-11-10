import React, { useState } from "react";

export default function CareerConsulting() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "CV & Cover Letter",
      subtitle: "German-style",
      description: "Craft professional CVs and cover letters tailored to German employer expectations and standards.",
      features: [
        "German CV format & structure",
        "ATS-optimized templates",
        "Cover letter personalization",
        "Professional proofreading"
      ],
      icon: "📄",
      gradient: "from-blue-500 to-cyan-500",
      price: "Starting from €49"
    },
    {
      id: 2,
      title: "Interview Coaching",
      subtitle: "Mock sessions",
      description: "Practice with real interview scenarios and get expert feedback to ace your German job interviews.",
      features: [
        "1-on-1 mock interviews",
        "Industry-specific questions",
        "Body language coaching",
        "Post-interview feedback"
      ],
      icon: "🎤",
      gradient: "from-purple-500 to-pink-500",
      price: "€79 per session"
    },
    {
      id: 3,
      title: "Job Search Guidance",
      subtitle: "Networking + Portals",
      description: "Navigate German job portals effectively and build professional networks to land your dream job.",
      features: [
        "Top job portal strategies",
        "LinkedIn profile optimization",
        "Networking techniques",
        "Application tracking system"
      ],
      icon: "🔍",
      gradient: "from-orange-500 to-red-500",
      price: "€99 package"
    },
    {
      id: 4,
      title: "Study in Germany",
      subtitle: "University, SOP, Visa",
      description: "Complete guidance for your Master's journey in Germany, from university selection to visa approval.",
      features: [
        "University shortlisting",
        "SOP & LOR writing",
        "Document preparation",
        "Visa application support"
      ],
      icon: "🎓",
      gradient: "from-indigo-500 to-purple-500",
      price: "€149 complete package"
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "German Training",
      description: "Master the language from A1 to C2",
      icon: "🗣️",
      color: "from-emerald-500 to-teal-500"
    },
    {
      step: "02",
      title: "CV Preparation",
      description: "Build your professional profile",
      icon: "📝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "03",
      title: "Job/University",
      description: "Land your dream opportunity",
      icon: "🎯",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      title: "Success in Germany",
      description: "Achieve your German dream",
      icon: "🏆",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const handleBookService = (service) => {
    alert(`Booking ${service} service. Redirecting to consultation page...`);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold mb-4">
            💼 CAREER & CONSULTING
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Your Success Partner
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From crafting the perfect CV to landing your dream job or university in Germany, we guide you every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onHover={() => setActiveService(service.id)}
              onLeave={() => setActiveService(null)}
              onBook={handleBookService}
            />
          ))}
        </div>

        {/* Journey Infographic */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">Your Journey to Germany</h3>
            <p className="text-gray-600 text-lg">Follow our proven path to success</p>
          </div>

          {/* Desktop Journey Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 via-purple-500 to-orange-500 opacity-30"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <JourneyStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* Mobile Journey Timeline */}
          <div className="lg:hidden space-y-6">
            {journeySteps.map((step, index) => (
              <JourneyStepMobile key={index} step={step} index={index} isLast={index === journeySteps.length - 1} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-gray-800">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Book a free 30-minute consultation with our career experts. Let's discuss your goals and create a personalized action plan.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => alert('Booking consultation...')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Book Free Consultation
                    </button>
                    <button 
                      onClick={() => alert('Viewing all services...')}
                      className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-200 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                    >
                      View All Services
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                          <span className="font-semibold text-gray-700">500+ Students Placed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                          <span className="font-semibold text-gray-700">95% Success Rate</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                          <span className="font-semibold text-gray-700">Expert Consultants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, isActive, onHover, onLeave, onBook }) {
  return (
    <div
      className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient}`}></div>
      
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      <div className="relative p-8">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-1 text-gray-800 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm font-semibold text-gray-500 mb-4">{service.subtitle}</p>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <div className={`mt-1 w-4 h-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className={`inline-block px-4 py-2 bg-gradient-to-r ${service.gradient} bg-opacity-10 rounded-full text-sm font-bold mb-6`}>
          {service.price}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onBook(service.title)}
          className={`w-full py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${service.gradient} text-white hover:-translate-y-1`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function JourneyStep({ step, index }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Connection dot */}
      <div className={`absolute top-24 w-4 h-4 rounded-full bg-gradient-to-br ${step.color} shadow-lg z-10`}></div>
      
      {/* Card */}
      <div className="relative group">
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
        <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          {/* Step number */}
          <div className="text-6xl font-black text-gray-100 absolute top-4 right-4">
            {step.step}
          </div>
          
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {step.icon}
          </div>
          
          {/* Content */}
          <h4 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

function JourneyStepMobile({ step, index, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Left side - Icon and line */}
      <div className="flex flex-col items-center">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-lg`}>
          {step.icon}
        </div>
        {!isLast && (
          <div className={`w-1 flex-1 mt-4 bg-gradient-to-b ${step.color} opacity-30`}></div>
        )}
      </div>
      
      {/* Right side - Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-sm font-bold text-gray-400 mb-2">STEP {step.step}</div>
          <h4 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h4>
          <p className="text-gray-600 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}