
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';


// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();


//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check scroll position on load

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setMobileDropdown(null);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setMobileDropdown(null);
//   };

//   const toggleMobileDropdown = (dropdownName) => {
//     setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
//   };

//   const handleLinkClick = (e, path) => {
//     if (path !== '/#') {
//       e.preventDefault();
//       navigate(path);
//     }
//     closeMobileMenu();
//   };

//   return (
//     <nav className="bg-zinc-900 font-roboto w-full z-50" style={{ background: '#2b0318' }}>
//       <div className="flex justify-between items-center h-20">
//         <div className="flex items-center pl-2 md:pl-20">
//           <Link to="/" className="text-2xl font-bold text-zinc-200">
//             <img
//               src=""
//               alt=" Logo"
//               className="h-16 w-28 md:h-24 md:w-36"
//             />
//           </Link>
//           <div className="ml-3 text-white">
//             <span className="text-2xl font-bold">klasse.de Akademie</span>
//           </div>
//         </div>

//         <button
//           id="menuButton"
//           className="text-2xl text-zinc-200 md:hidden"
//           onClick={toggleMobileMenu}
//         >
//           {isMobileMenuOpen  }
//         </button>

//         <div className="text-center text-white text-xl font-bold pt-5 mr-5 hidden md:block">
//           – Learn German <br />
//           <span className="text-white text-sm font-semibold">Build Your Career. Explore Globe.</span>
//         </div>
//       </div>

//       {/* Yellow strip bar */}
//       <div
//         className={`py-2 bg-yellow-500 hidden md:block transition-all duration-300 ${
//           isScrolled ? 'fixed w-full top-0 left-0 z-40' : 'relative'
//         }`}
//       >
//         <ul className="flex flex-wrap justify-center gap-10">
//           {[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' },{ name: 'Courses', path: '/courses' },{ name: 'CareerConsulting', path: '/carrier' },{ name: 'Testimonials', path: '/testimonials' }].map((link, index) => (
//             <li key={index}>
//               <Link 
//                 to={link.path}
//                 className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
//                 onClick={closeMobileMenu}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}

         

//           <li>
//             <Link
//               to="/contact"
//               className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
//               onClick={closeMobileMenu}
//             >
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div
//           id="mobileMenu"
//           className="absolute top-0 left-0 w-full bg-zinc-900 text-white z-40 md:hidden"
//         >
//           <div className="space-y-1 px-5 pb-3 pt-5">
//             {[{ name: 'Home', path: '/home' }, { name: 'Events', path: '/events' }].map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.path}
//                 className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
//                 onClick={closeMobileMenu}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Mobile Dropdowns */}
//             {[{
//               name: 'Management',
//               items: [
//                 { label: 'About Us', path: '/aboutMore' },
//                 { label: 'Accreditation', path: '/#' },
//                 { label: 'Governing Body', path: '/#' },
//                 { label: 'Boards of Governors', path: '/members' },
//               ]
//             },
//             {
//               name: 'Academic',
//               items: [
//                 { label: 'Courses', path: '/Courses' },
//                 { label: 'Academic Calendar', path: '/#' },
//                 { label: 'Academic TimeTable', path: '/#' },
//                 { label: 'Committee', path: '/faculty' },
//                 { label: 'AntiRagging Committee', path: '/#' },
//                 { label: 'Events', path: '/events' },
//               ]
//             },
//             {
//               name: 'Departments',
//               items: [
//                 { label: 'LLB', path: '/#' },
//                 { label: 'LLM', path: '/#' },
//                 { label: 'Diploma in Legal Studies', path: '/#' },
//               ]
//             },
//             {
//               name: 'Admission',
//               items: [
//                 { label: 'Courses Offered', path: '/courses' },
//                 { label: 'Eligibility Criteria', path: '/#' },
//                 { label: 'Scholarship', path: '/#' },
//                 { label: 'Fee Structure', path: '/#' },
//                 { label: 'Admission Cell', path: '/#' },
//                 { label: 'Admission Enquiry', path: '/#' },
//               ]
//             },
//             {
//               name: 'Facility',
//               items: [
//                 { label: 'Library', path: '/library' },
//                 { label: 'Hostel', path: '/hostel' },
//                 { label: 'Gymnasium', path: '/#' },
//                 { label: 'Playground', path: '/facility/playground' },
//                 { label: 'Computer Lab', path: '/facility/computer-lab' },
//                 { label: 'Transportation', path: '/facility/transportation' },
//                 { label: 'Magazine', path: '/facility/magazine' },
//               ]
//             }].map((dropdown, index) => (
//               <div key={index} className="space-y-1">
//                 <div
//                   className="px-5 py-2 text-white font-bold cursor-pointer flex gap-2"
//                   onClick={() => toggleMobileDropdown(dropdown.name)}
//                 >
//                   {dropdown.name}
//                 </div>
//                 {mobileDropdown === dropdown.name && (
//                   <ul ref={dropdownRef}>
//                     {dropdown.items.map((item, i) => (
//                       <li key={i}>
//                         <Link
//                           to={item.path}
//                           className="block px-5 py-2 text-red-200 hover:bg-orange-500 flex gap-2"
//                           onClick={(e) => handleLinkClick(e, item.path)}
//                         >
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}

//             <div>
//               <Link
//                 to="/contact"
//                 className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
//                 onClick={closeMobileMenu}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ setMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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


  return (
    <nav className="bg-zinc-900 font-roboto w-full z-50" style={{ background: '#2b0318' }}>
      <div className="flex justify-between items-center h-20 px-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-zinc-200">
            <img
              src=""
              alt="Logo"
              className="h-16 w-28 md:h-24 md:w-36"
            />
          </Link>
          <div className="ml-3 text-white">
            <span className="text-xl md:text-2xl font-bold">klasse.de Akademie</span>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          id="menuButton"
          className="text-zinc-200 md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="text-center text-white text-xl font-bold pt-5 mr-5 hidden md:block">
          – Learn German <br />
          <span className="text-white text-sm font-semibold">Build Your Career. Explore Globe.</span>
        </div>
      </div>

      {/* Yellow strip bar - Desktop */}
      <div
        className={`py-2 bg-yellow-500 hidden md:block transition-all duration-300 ${
          isScrolled ? 'fixed w-full top-0 left-0 z-40' : 'relative'
        }`}
      >
        <ul className="flex flex-wrap justify-center gap-10">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Courses', path: '/courses' },
            { name: 'CareerConsulting', path: '/carrier' },
            { name: 'Testimonials', path: '/testimonials' }
          ].map((link, index) => (
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
          className="fixed top-0 left-0 w-full h-screen bg-zinc-900 text-white z-50 md:hidden overflow-y-auto"
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center h-20 px-4 border-b border-zinc-700">
            <div className="text-white">
              <span className="text-xl font-bold">Menu</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="py-4">
            {/* Simple Links */}
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Courses', path: '/courses' },
              { name: 'Career Consulting', path: '/carrier' },
              { name: 'Testimonials', path: '/testimonials' }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block px-6 py-3 text-base font-medium hover:bg-zinc-800 border-b border-zinc-800"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}

      
            <Link
              to="/contact"
              className="block px-6 py-3 text-base font-medium hover:bg-zinc-800 border-b border-zinc-800"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;