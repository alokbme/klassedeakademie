import React, { useState } from "react";

export default function GermanCourses() {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courses = [
    {
      level: "A1",
      title: "Survival German",
      description: "Start your German journey with essential basics for everyday survival.",
      features: ["Basic greetings & introductions", "Numbers, dates & time", "Simple conversations", "Shopping & dining basics"],
      gradient: "from-emerald-500 to-teal-500",
      icon: "🌱",
      duration: "8-10 weeks",
      difficulty: "Beginner"
    },
    {
      level: "A2",
      title: "Everyday German",
      description: "Build confidence in daily conversations and routine situations.",
      features: ["Family & relationships", "Work & hobbies", "Travel & directions", "Simple texts & emails"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "💬",
      duration: "8-10 weeks",
      difficulty: "Elementary"
    },
    {
      level: "B1",
      title: "Independent German",
      description: "Express yourself independently on familiar topics and situations.",
      features: ["Express opinions & ideas", "Handle travel situations", "Understand main points", "Write connected texts"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🎯",
      duration: "10-12 weeks",
      difficulty: "Intermediate"
    },
    {
      level: "B2",
      title: "Professional German",
      description: "Master professional communication for workplace success in Germany.",
      features: ["Business communication", "Technical discussions", "Presentations & meetings", "Complex text comprehension"],
      gradient: "from-orange-500 to-red-500",
      icon: "💼",
      duration: "12-14 weeks",
      difficulty: "Upper Intermediate"
    },
    {
      level: "C1",
      title: "Academic German",
      description: "Achieve fluency for academic studies and professional excellence.",
      features: ["Academic writing", "Complex arguments", "Spontaneous expression", "Subtle language nuances"],
      gradient: "from-indigo-500 to-purple-600",
      icon: "🎓",
      duration: "14-16 weeks",
      difficulty: "Advanced"
    },
    {
      level: "C2",
      title: "Mastery German",
      description: "Reach near-native proficiency with complete linguistic mastery.",
      features: ["Native-like fluency", "Literary texts", "All communication contexts", "Perfect comprehension"],
      gradient: "from-rose-500 to-amber-500",
      icon: "👑",
      duration: "16-20 weeks",
      difficulty: "Mastery"
    }
  ];

  const handleEnroll = (courseLevel) => {
    alert(`Enrolling in ${courseLevel} course. Redirecting to enrollment page...`);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
            📚 LANGUAGE COURSES
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
            German A1 to C2
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From beginner to mastery, we cover all levels of German. Choose your path and start your journey today.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={course.level}
              course={course}
              index={index}
              isHovered={hoveredCourse === course.level}
              onHover={() => setHoveredCourse(course.level)}
              onLeave={() => setHoveredCourse(null)}
              onEnroll={handleEnroll}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 max-w-2xl">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                Not sure which level to start?
              </h3>
              <p className="text-gray-600 mb-6">
                Take our free placement test and we'll recommend the perfect course for you.
              </p>
              <button 
                onClick={() => alert('Starting placement test...')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Take Placement Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, index, isHovered, onHover, onLeave, onEnroll }) {
  return (
    <div
      className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${course.gradient}`}></div>
      
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      <div className="relative p-8">
        {/* Header with icon and level */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              {course.icon}
            </div>
            <div>
              <div className={`text-3xl font-black bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}>
                {course.level}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {course.difficulty}
              </div>
            </div>
          </div>
        </div>

        {/* Title and description */}
        <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {course.description}
        </p>

        {/* Duration badge */}
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-6">
          ⏱️ {course.duration}
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {course.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm">
              <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${course.gradient} flex items-center justify-center flex-shrink-0`}>
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onEnroll(course.level)}
          className={`w-full py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${course.gradient} text-white hover:-translate-y-1`}
        >
          Enroll in {course.level} Now
        </button>
      </div>

      {/* Hover effect - corner accent */}
      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-500`}></div>
    </div>
  );
}