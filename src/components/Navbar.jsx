
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { CiMenuBurger } from 'react-icons/ci';
// import { FaChevronDown } from 'react-icons/fa';
// import { BsArrow90DegRight } from 'react-icons/bs';
// import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
// import { RxDropdownMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Define the ref for dropdown menus
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = (e, path) => {
    if (path !== '/#') {
      e.preventDefault();
      navigate(path);
    }
    closeMobileMenu();
  };

  return (
    <nav className="bg-zinc-900 font-roboto w-full z-50" style={{ background: '#2b0318' }}>
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center pl-2 md:pl-20">
          <Link to="/" className="text-2xl font-bold text-zinc-200">
            <img
              src=""
              alt=" Logo"
              className="h-16 w-28 md:h-24 md:w-36"
            />
          </Link>
          <div className="ml-3 text-white">
            <span className="text-2xl font-bold">klasse.de Akademie</span>
          </div>
        </div>

        <button
          id="menuButton"
          className="text-2xl text-zinc-200 md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen  }
        </button>

        <div className="text-center text-white text-xl font-bold pt-5 mr-5 hidden md:block">
          – Learn German <br />
          <span className="text-white text-sm font-semibold">Build Your Career. Explore Globe.</span>
        </div>
      </div>

      {/* Yellow strip bar */}
      <div
        className={`py-2 bg-yellow-500 hidden md:block transition-all duration-300 ${
          isScrolled ? 'fixed w-full top-0 left-0 z-40' : 'relative'
        }`}
      >
        <ul className="flex flex-wrap justify-center gap-10">
          {[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' },{ name: 'Courses', path: '/courses' },{ name: 'CareerConsulting', path: '/carrier' },{ name: 'Testimonials', path: '/testimonials' }].map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path}
                className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Dropdowns
          {[{
            name: 'Management',
            items: [
              { label: 'About Us', path: '/aboutMore' },
              { label: 'Accreditation', path: '/#' },
              { label: 'Governing Body', path: '/#' },
              { label: 'Boards of Governors', path: '/members' },
            ]
          },
          {
            name: 'Academic',
            items: [
              { label: 'Courses', path: '/Courses' },
              { label: 'Academic Calendar', path: '/#' },
              { label: 'Academic TimeTable', path: '/#' },
              { label: 'Committee', path: '/faculty' },
              { label: 'AntiRagging Committee', path: '/#' },
              { label: 'Events', path: '/events' },
            ]
          },
          {
            name: 'Departments',
            items: [
              { label: 'LLB', path: '/#' },
              { label: 'LLM', path: '/#' },
              { label: 'Diploma in Legal Studies', path: '/#' },
            ]
          },
          {
            name: 'Admission',
            items: [
              { label: 'Courses Offered', path: '/courses' },
              { label: 'Eligibility Criteria', path: '/#' },
              { label: 'Scholarship', path: '/#' },
              { label: 'Fee Structure', path: '/#' },
              { label: 'Admission Cell', path: '/#' },
              { label: 'Admission Enquiry', path: '/#' },
            ]
          },
          {
            name: 'Facility',
            items: [
              { label: 'Library', path: '/library' },
              { label: 'Hostel', path: '/hostel' },
              { label: 'Gymnasium', path: '/#' },
              { label: 'Playground', path: '/facility/playground' },
              { label: 'Computer Lab', path: '/facility/computer-lab' },
              { label: 'Transportation', path: '/facility/transportation' },
              { label: 'Magazine', path: '/facility/magazine' },
            ]
          }].map((dropdown, index) => (
            <li key={index} className="relative group">
              <button
                className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
              >
                {dropdown.name}
              
              </button>
              <ul className="absolute left-0 top-full bg-white border border-zinc-300 shadow-lg w-40 z-50 hidden group-hover:block">
                {dropdown.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 hover:bg-orange-100 transition duration-300"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))} */}

          <li>
            <Link
              to="/contact"
              className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobileMenu"
          className="absolute top-0 left-0 w-full bg-zinc-900 text-white z-40 md:hidden"
        >
          <div className="space-y-1 px-5 pb-3 pt-5">
            {[{ name: 'Home', path: '/home' }, { name: 'Events', path: '/events' }].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Dropdowns */}
            {[{
              name: 'Management',
              items: [
                { label: 'About Us', path: '/aboutMore' },
                { label: 'Accreditation', path: '/#' },
                { label: 'Governing Body', path: '/#' },
                { label: 'Boards of Governors', path: '/members' },
              ]
            },
            {
              name: 'Academic',
              items: [
                { label: 'Courses', path: '/Courses' },
                { label: 'Academic Calendar', path: '/#' },
                { label: 'Academic TimeTable', path: '/#' },
                { label: 'Committee', path: '/faculty' },
                { label: 'AntiRagging Committee', path: '/#' },
                { label: 'Events', path: '/events' },
              ]
            },
            {
              name: 'Departments',
              items: [
                { label: 'LLB', path: '/#' },
                { label: 'LLM', path: '/#' },
                { label: 'Diploma in Legal Studies', path: '/#' },
              ]
            },
            {
              name: 'Admission',
              items: [
                { label: 'Courses Offered', path: '/courses' },
                { label: 'Eligibility Criteria', path: '/#' },
                { label: 'Scholarship', path: '/#' },
                { label: 'Fee Structure', path: '/#' },
                { label: 'Admission Cell', path: '/#' },
                { label: 'Admission Enquiry', path: '/#' },
              ]
            },
            {
              name: 'Facility',
              items: [
                { label: 'Library', path: '/library' },
                { label: 'Hostel', path: '/hostel' },
                { label: 'Gymnasium', path: '/#' },
                { label: 'Playground', path: '/facility/playground' },
                { label: 'Computer Lab', path: '/facility/computer-lab' },
                { label: 'Transportation', path: '/facility/transportation' },
                { label: 'Magazine', path: '/facility/magazine' },
              ]
            }].map((dropdown, index) => (
              <div key={index} className="space-y-1">
                <div
                  className="px-5 py-2 text-white font-bold cursor-pointer flex gap-2"
                  onClick={() => toggleMobileDropdown(dropdown.name)}
                >
                  {dropdown.name}
                </div>
                {mobileDropdown === dropdown.name && (
                  <ul ref={dropdownRef}>
                    {dropdown.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.path}
                          className="block px-5 py-2 text-red-200 hover:bg-orange-500 flex gap-2"
                          onClick={(e) => handleLinkClick(e, item.path)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const handleNavigate = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     closeMobileMenu();
//   };

//   const navLinks = [
//     { name: 'Home', id: 'home' },
//     { name: 'About Us', id: 'about' },
//     { name: 'Courses', id: 'courses' },
//     { name: 'Career & Consulting', id: 'career' },
//     { name: 'Testimonials', id: 'testimonials' },
//     { name: 'Contact', id: 'contact' }
//   ];

//   return (
//     <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-white/95 backdrop-blur-md shadow-lg' 
//         : 'bg-white'
//     }`}>
//       {/* Top Bar */}
//       <div className="bg-gradient-to-r from-gray-800 via-blue-900 to-indigo-900 text-white py-2 px-6">
//         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
//           <div className="flex items-center gap-4">
//             <a href="tel:+919975648924" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
//               <span>📞</span>
//               <span className="hidden sm:inline">+91 99756 48924</span>
//             </a>
//             <a href="mailto:info@klasse-akademie.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
//               <span>📧</span>
//               <span className="hidden md:inline">info@klasse-akademie.com</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-3">
//             <span className="text-xs font-semibold">🌍 Global Presence:</span>
//             <span className="flex items-center gap-2 text-xs">
//               🇮🇳 India • 🇬🇧 UK • 🇩🇪 Germany • 🇺🇸 USA
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo Section */}
//           <div className="flex items-center gap-4">
//             <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
//               <span className="text-2xl font-black text-white">K</span>
//             </div>
//             <div>
//               <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
//                 klasse.de Akademie
//               </h1>
//               <p className="text-xs text-gray-600 font-semibold hidden sm:block">
//                 🇩🇪 Learn German • Build Career • Explore Globe
//               </p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleNavigate(link.id)}
//                 className="relative px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200 group"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
//               </button>
//             ))}
//             <button
//               onClick={() => handleNavigate('contact')}
//               className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
//             >
//               Book Free Call
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             {isMobileMenuOpen ? (
//               <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl animate-slide-down">
//           <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
//             {navLinks.map((link, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleNavigate(link.id)}
//                 className="w-full text-left px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 flex items-center justify-between group"
//               >
//                 {link.name}
//                 <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             ))}
//             <button
//               onClick={() => handleNavigate('contact')}
//               className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200"
//             >
//               Book Free Call
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Sticky German Flag Accent (visible when scrolled) */}
//       {isScrolled && (
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-red-600 via-yellow-400 to-black opacity-50"></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;