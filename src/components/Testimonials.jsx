

import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Karan Ganesh Kadam",
      location: "Pune",
      course: "Class 9, CBSE",
      image: "👨‍🎓",
      rating: 5,
      quote: "The teaching quality is excellent. I even started becoming interested in subjects I didn't like before. The one-to-one class makes learning interesting.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Sandesh Ramdasi",
      location: "Freiburg University, Germany",
      course: "BE (E&TC)",
      image: "🎓",
      rating: 5,
      quote: "Thank you for your support in learning German and helping me gain admission to a German university. Your excellent guidance made my dream come true.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Priyanka Gote",
      location: "B.Com Graduate",
      course: "German Language",
      image: "👩‍💼",
      rating: 5,
      quote: "You made such a complex language very interesting. The teaching methods are exceptional.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Amol Kamble",
      location: "Working Professional",
      course: "Diploma - Mech. Engg.",
      image: "⚙️",
      rating: 5,
      quote: "One of the best German coaching academies. Excellent teaching quality, experienced staff, and student-friendly environment. The one-to-one interaction is the best part.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 5,
      name: "Ramesh Kumar",
      location: "Mumbai",
      course: "C1 Level",
      image: "🎯",
      rating: 5,
      quote: "C1 felt impossible before, but practical speaking drills and personalized attention made it achievable. The structured approach really works!",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      id: 6,
      name: "Priya Sharma",
      location: "Delhi",
      course: "Study in Germany",
      image: "🌟",
      rating: 5,
      quote: "I got admits in two German universities! The SOP guidance and document preparation were exceptional. Highly recommended!",
      gradient: "from-emerald-500 to-teal-500",
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentSlide];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
            💬 Student Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from students who achieved their German language and career goals
          </p>
        </div>

        {/* Main Card */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${current.gradient} rounded-3xl blur-xl opacity-20`}></div>
            
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${current.gradient}`}></div>

              <div className="p-8 md:p-12">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${current.gradient} flex items-center justify-center shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-center mb-8">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{current.quote}"
                  </p>
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Student Info */}
                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${current.gradient} flex items-center justify-center text-4xl shadow-lg mb-3`}>
                    {current.image}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{current.name}</h4>
                  <p className="text-gray-600 font-medium text-sm">{current.location}</p>
                  <p className="text-xs text-gray-500">{current.course}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? `w-8 h-2.5 bg-gradient-to-r ${current.gradient}`
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`group relative transition-all duration-300 ${
                index === currentSlide ? 'scale-110' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity`}></div>
              <div className={`relative w-full aspect-square rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl shadow-md ${
                index === currentSlide ? 'ring-3 ring-offset-2 ring-blue-400' : ''
              }`}>
                {testimonial.image}
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <StatCard number="500+" label="Students" icon="🎓" />
          <StatCard number="95%" label="Success Rate" icon="✨" />
          <StatCard number="50+" label="Universities" icon="🏛️" />
          <StatCard number="4.9/5" label="Rating" icon="⭐" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, icon }) {
  return (
    <div className="text-center group hover:scale-105 transition-transform">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
        {number}
      </div>
      <div className="text-gray-600 font-semibold text-sm">{label}</div>
    </div>
  );
}