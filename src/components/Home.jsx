// import React, { useState, useEffect } from 'react';
// import { GraduationCap, Briefcase, Globe, MessageCircle, BookOpen, Users, Award, ArrowRight, Star, CheckCircle } from 'lucide-react';

// export default function HomePage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentStat, setCurrentStat] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Animate counter
//     const interval = setInterval(() => {
//       setCurrentStat(prev => (prev < 500 ? prev + 10 : 500));
//     }, 30);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Floating Elements Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
        
//         {/* Animated Background Patterns */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
//           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
//         </div>
        
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop')"
//           }}
//         ></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className={`space-y-8 z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <div className="inline-block animate-fade-in-down">
//                 <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
//                   <Award className="w-4 h-4 animate-pulse" />
//                   <span>Learn from experienced professionals from Germany</span>
//                   <Star className="w-4 h-4 text-yellow-300 animate-spin-slow" />
//                 </div>
//               </div>
              
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
//                 <span className="inline-block hover:scale-110 transition-transform duration-300">Your</span>{' '}
//                 <span className="inline-block hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Gateway</span>{' '}
//                 <span className="inline-block hover:scale-110 transition-transform duration-300">to</span>{' '}
//                 <span className="inline-block hover:scale-110 transition-transform duration-300">Germany</span>
//               </h1>
              
//               <p className="text-2xl md:text-3xl font-light text-blue-100 animate-fade-in animation-delay-300">
//                 Language, Career & Beyond
//               </p>
              
//               <p className="text-lg md:text-xl text-blue-50 leading-relaxed animate-fade-in animation-delay-500">
//                 We don't just teach German. We prepare you for life, study and work in Germany.
//               </p>
              
//               <div className="pt-4 animate-fade-in animation-delay-700">
//                 <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden">
//                   <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
//                   <span className="relative flex items-center gap-2">
//                     Book Free Demo
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//                   </span>
//                   <span className="absolute inset-0 border-2 border-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
//                 </button>
//               </div>

//               {/* Live Stats */}
//               <div className="flex gap-6 pt-4 animate-fade-in animation-delay-1000">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-yellow-300">{currentStat}+</div>
//                   <div className="text-sm text-blue-200">Students</div>
//                 </div>
//                 <div className="w-px bg-white/20"></div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-yellow-300">15+</div>
//                   <div className="text-sm text-blue-200">Years Experience</div>
//                 </div>
//                 <div className="w-px bg-white/20"></div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-yellow-300">A1-C2</div>
//                   <div className="text-sm text-blue-200">All Levels</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className={`relative z-10 hidden md:block transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//               <div className="relative">
//                 {/* Main Image */}
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
//                   <img 
//                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop" 
//                     alt="Students learning German"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  
//                   {/* Animated Border */}
//                   <div className="absolute inset-0 border-4 border-white/20 rounded-3xl animate-pulse-border"></div>
//                 </div>

//                 {/* Floating Card 1 - Animated */}
//                 <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300 animate-float">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-bounce-slow">
//                       <CheckCircle className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-gray-800 font-bold">{currentStat}+</p>
//                       <p className="text-gray-600 text-sm">Success Stories</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Card 2 - Animated */}
//                 <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300 animate-float animation-delay-2000">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center animate-pulse">
//                       <GraduationCap className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-gray-800 font-bold">A1-C2</p>
//                       <p className="text-gray-600 text-sm">All Levels</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
//                 <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-1000"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Wave Separator */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
//             <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
//           </svg>
//         </div>
//       </section>

//       {/* Quick Highlights */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             {
//               icon: BookOpen,
//               title: 'German Courses',
//               subtitle: 'A1–C2',
//               color: 'from-blue-500 to-blue-600',
//               delay: '0'
//             },
//             {
//               icon: Briefcase,
//               title: 'Career Services',
//               subtitle: 'Jobs in Germany',
//               color: 'from-indigo-500 to-indigo-600',
//               delay: '200'
//             },
//             {
//               icon: GraduationCap,
//               title: 'Study Abroad',
//               subtitle: 'Consulting',
//               color: 'from-purple-500 to-purple-600',
//               delay: '400'
//             },
//             {
//               icon: MessageCircle,
//               title: 'Practical',
//               subtitle: 'Communication',
//               color: 'from-pink-500 to-pink-600',
//               delay: '600'
//             }
//           ].map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={idx}
//                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 cursor-pointer hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
//                 style={{ animationDelay: `${item.delay}ms` }}
//               >
//                 {/* Animated Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
//                 {/* Animated Circle Effect */}
//                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150"></div>
                
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
//                   <Icon className="w-7 h-7 text-white group-hover:animate-bounce" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-1 relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-blue-600 font-medium relative z-10">{item.subtitle}</p>
                
//                 {/* Bottom Border Animation */}
//                 <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-500`}></div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Our Approach */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in hover:shadow-2xl transition-all duration-500">
//           <div className="grid md:grid-cols-2 gap-0">
//             <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
//               <div className="inline-block mb-6">
//                 <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">
//                   Our Approach
//                 </span>
//               </div>
              
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
//                 At klasse.de Akademie
//               </h2>
              
//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 Learning is interactive: role-plays, real-life scenarios, exam prep + beyond.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   { icon: Users, text: 'Interactive role-play sessions' },
//                   { icon: Globe, text: 'Real-life scenario practice' },
//                   { icon: Award, text: 'Comprehensive exam preparation' }
//                 ].map((feature, idx) => {
//                   const Icon = feature.icon;
//                   return (
//                     <div key={idx} className="flex items-center gap-3 group cursor-pointer transform hover:translate-x-2 transition-all duration-300">
//                       <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
//                         <Icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
//                       </div>
//                       <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{feature.text}</span>
//                       <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="relative h-full min-h-[400px] overflow-hidden group">
//               <img 
//                 src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop" 
//                 alt="Interactive learning"
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-indigo-600/90 flex items-center justify-center p-8 transition-all duration-500 group-hover:from-blue-600/95 group-hover:to-indigo-700/95">
//                 <div className="text-center text-white space-y-6 transform group-hover:scale-105 transition-transform duration-500">
//                   <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 animate-pulse-slow">
//                     <GraduationCap className="w-16 h-16 group-hover:rotate-12 transition-transform duration-500" />
//                   </div>
//                   <h3 className="text-2xl font-bold">Expert-Led Learning</h3>
//                   <p className="text-blue-100">
//                     Guided by professionals with real German experience
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           25% { transform: translate(20px, -50px) scale(1.1); }
//           50% { transform: translate(-20px, 20px) scale(0.9); }
//           75% { transform: translate(50px, 50px) scale(1.05); }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes pulse-border {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.4; }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
        
//         .animate-fade-in-down {
//           animation: fade-in-down 0.8s ease-out;
//         }
        
//         .animate-pulse-border {
//           animation: pulse-border 2s ease-in-out infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }
        
//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
        
//         .animation-delay-300 {
//           animation-delay: 300ms;
//         }
        
//         .animation-delay-500 {
//           animation-delay: 500ms;
//         }
        
//         .animation-delay-700 {
//           animation-delay: 700ms;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1000ms;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, Globe, MessageCircle, BookOpen, Users, Award, ArrowRight, Star, CheckCircle } from 'lucide-react';
import Testimonials from './Testimonials';
import Footer from './Footer';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const testimonials = [
    {
      name: "Sandesh Ramdasi",
      location: "Freiburg University, Germany",
      image: "🎓",
      quote: "Thank you for helping me gain admission to a German university. Your excellent guidance made my dream come true.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Ramesh Kumar",
      location: "Mumbai",
      image: "🎯",
      quote: "C1 felt impossible before, but practical speaking drills and personalized attention made it achievable.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      image: "🌟",
      quote: "I got admits in two German universities! The SOP guidance was exceptional.",
      gradient: "from-emerald-500 to-teal-500",
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counter
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev < 500 ? prev + 10 : 500));
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Floating Elements Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-red-600 to-yellow-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block animate-fade-in-down">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <Award className="w-4 h-4 animate-pulse" />
                  <span>Learn from experienced professionals from Germany</span>
                  <Star className="w-4 h-4 text-yellow-400 animate-spin-slow" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                <span className="inline-block hover:scale-110 transition-transform duration-300">Your</span>{' '}
                <span className="inline-block hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Gateway</span>{' '}
                <span className="inline-block hover:scale-110 transition-transform duration-300">to</span>{' '}
                <span className="inline-block hover:scale-110 transition-transform duration-300">Germany</span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-light text-yellow-100 animate-fade-in animation-delay-300">
                Language, Career & Beyond
              </p>
              
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed animate-fade-in animation-delay-500">
                We don't just teach German. We prepare you for life, study and work in Germany.
              </p>
              
              <div className="pt-4 animate-fade-in animation-delay-700">
                <button className="group relative bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2 font-bold">
                    Book Free Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 border-2 border-yellow-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
                </button>
              </div>

              {/* Live Stats */}
              <div className="flex gap-6 pt-4 animate-fade-in animation-delay-1000">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{currentStat}+</div>
                  <div className="text-sm text-gray-200">Students</div>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">15+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">A1-C2</div>
                  <div className="text-sm text-gray-200">All Levels</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={`relative z-10 hidden md:block transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop" 
                    alt="Students learning German"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 border-4 border-white/20 rounded-3xl animate-pulse-border"></div>
                </div>

                {/* Floating Card 1 - Animated */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-bounce-slow">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold">{currentStat}+</p>
                      <p className="text-gray-600 text-sm">Success Stories</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 - Animated */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300 animate-float animation-delay-2000">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center animate-pulse">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold">A1-C2</p>
                      <p className="text-gray-600 text-sm">All Levels</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-red-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: BookOpen,
              title: 'German Courses',
              subtitle: 'A1–C2',
              color: 'from-black to-gray-800',
              delay: '0'
            },
            {
              icon: Briefcase,
              title: 'Career Services',
              subtitle: 'Jobs in Germany',
              color: 'from-red-500 to-red-700',
              delay: '200'
            },
            {
              icon: GraduationCap,
              title: 'Study Abroad',
              subtitle: 'Consulting',
              color: 'from-yellow-400 to-yellow-600',
              delay: '400'
            },
            {
              icon: MessageCircle,
              title: 'Practical',
              subtitle: 'Communication',
              color: 'from-red-600 to-yellow-500',
              delay: '600'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 cursor-pointer hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated Circle Effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150"></div>
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                  <Icon className="w-7 h-7 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-red-600 group-hover:to-yellow-600 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-red-600 font-medium relative z-10">{item.subtitle}</p>
                
                {/* Bottom Border Animation */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in hover:shadow-2xl transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-yellow-100 to-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">
                  Our Approach
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-red-600 hover:to-yellow-600 transition-all duration-300">
                At klasse.de Akademie
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Learning is interactive: role-plays, real-life scenarios, exam prep + beyond.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Users, text: 'Interactive role-play sessions' },
                  { icon: Globe, text: 'Real-life scenario practice' },
                  { icon: Award, text: 'Comprehensive exam preparation' }
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 group cursor-pointer transform hover:translate-x-2 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-50 to-red-50 flex items-center justify-center group-hover:from-yellow-100 group-hover:to-red-100 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <Icon className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-red-600 transition-colors duration-300">{feature.text}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative h-full min-h-[400px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop" 
                alt="Interactive learning"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-600/90 to-yellow-500/90 flex items-center justify-center p-8 transition-all duration-500 group-hover:from-black/95 group-hover:via-red-700/95 group-hover:to-yellow-600/95">
                <div className="text-center text-white space-y-6 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 animate-pulse-slow">
                    <GraduationCap className="w-16 h-16 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Expert-Led Learning</h3>
                  <p className="text-yellow-100">
                    Guided by professionals with real German experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-gradient-to-r from-yellow-100 to-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-bold mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
            Student Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-red-600 hover:to-yellow-600 transition-all duration-300">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from students who achieved their German dreams with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 cursor-pointer hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {/* Gradient Hover Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Quote Icon */}
              <div className="text-4xl text-yellow-400 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                “
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 relative z-10">
                {testimonial.quote}
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${testimonial.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </section>
       
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-border {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

    </div>
  );
}