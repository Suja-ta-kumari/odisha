// import React from "react";
// import { Link } from "react-router-dom";
// import {assets} from "../assets/assets";
// const Navbar = () => {
//     const navLinks = [
//         { name: 'Discover', path: '/' },
//         { name: 'Experience', path: '/temp' },
//         { name: 'Culture', path: '/cul' },
//         { name: 'About', path: '/' },
//     ];

    

//     const [isScrolled, setIsScrolled] = React.useState(false);
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     React.useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
      
            
//             <nav className={`fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

//                 {/* Logo */}
//                 <Link to='/'>
//                 <img src={assets.logo} alt="logo" className={`h-9 $
//                    { isScrolled && "invert opacity-80"}`} />
                   
//                 </Link>

//                 {/* Desktop Nav */}
//                 <div className="hidden md:flex items-center gap-4 lg:gap-8">
//                     {navLinks.map((link, i) => (
//                         <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
//                             {link.name}
//                             <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
//                         </a>
//                     ))}
//                     <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
//                         New Launch
//                     </button>
//                 </div>

//                 {/* Desktop Right */}
//                 <div className="hidden md:flex items-center gap-4">
//                     <img src={assets.searchIcon} alt="search" className={`$
//                         {isScrolled && 'invert} h-7 transition-all duration-500`}/>
//                     <button className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
//                         Login
//                     </button>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="flex items-center gap-3 md:hidden">
//                     <img onClick={()=> setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="" className={`${isScrolled &&"invert" } h-4`} />
//                 </div>

//                 {/* Mobile Menu */}
//                 <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
//                     <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
//                         <img  src={assets.closeIcon} alt="close-menu" className="h-6.5" />
//                     </button>

//                     {navLinks.map((link, i) => (
//                         <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
//                             {link.name}
//                         </a>
//                     ))}

//                     <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
//                         New Launch
//                     </button>

//                     <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
//                         Login
//                     </button>
//                 </div>
//             </nav>
       
//     );
// }

// export default Navbar


















// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const links = ["Home", "About Odisha", "Destinations", "Culture", "Contact"];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       {/* Top bar */}
//       <div className="flex justify-between items-center px-6 py-4 bg-black/60 backdrop-blur-md">
//         {/* Logo or title */}
//         <h1 className="text-white text-2xl font-bold">Odisha 360°</h1>

//         {/* Hamburger button */}
//         <button
//           onClick={() => setOpen(true)}
//           className="p-2 rounded-md hover:bg-white/20 transition"
//         >
//           <Menu size={28} className="text-white" />
//         </button>
//       </div>

//       {/* Drawer overlay */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//             ></motion.div>

//             {/* Drawer */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="fixed top-0 left-0 h-full w-[85%] md:w-[60%] lg:w-[45%] z-50 flex"
//             >
//               {/* Left image */}
//               <div className="hidden md:block w-1/2 relative">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Konark_Sun_Temple%2C_Odisha.jpg"
//                   alt="Odisha"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/50"></div>
//                 <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
//                   <h2 className="text-3xl font-bold mb-2">Odisha</h2>
//                   <p className="text-sm italic">India’s Best Kept Secret</p>
//                 </div>
//               </div>

//               {/* Right links */}
//               <div className="w-full md:w-1/2 bg-gray-900/95 text-white flex flex-col justify-center items-center relative">
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="absolute top-6 right-6 text-gray-300 hover:text-white"
//                 >
//                   <X size={26} />
//                 </button>

//                 <ul className="space-y-6 text-center text-xl font-medium">
//                   {links.map((link, i) => (
//                     <motion.li
//                       key={i}
//                       whileHover={{ scale: 1.1, color: "#ec4899" }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="cursor-pointer"
//                     >
//                       {link}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;















// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import odishaImg1 from "../assets/od1.jpeg";
// import odishaImg2 from "../assets/od2.jpeg";
// import odishaImg3 from "../assets/od3.webp";
// import odishaImg4 from "../assets/od4.jpeg";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [bgImage, setBgImage] = useState(odishaImg1);

//   const links = ["Home", "About Odisha", "Destinations", "Culture", "Contact"];

//   // Function to handle image change on hover
//   const handleHover = (link) => {
//     switch (link) {
//       case "Home":
//         setBgImage(odishaImg1);
//         break;
//       case "About Odisha":
//         setBgImage(odishaImg2);
//         break;
//       case "Destinations":
//         setBgImage(odishaImg3);
//         break;
//       case "Culture":
//         setBgImage(odishaImg4);
//         break;
//       default:
//         setBgImage(odishaImg1);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center px-6 py-4 bg-black/60 backdrop-blur-md">
//         <h1 className="text-white text-2xl font-bold">Odisha 360°</h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="p-2 rounded-md hover:bg-white/20 transition"
//         >
//           <Menu size={28} className="text-white" />
//         </button>
//       </div>

//       {/* Fullscreen Drawer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col md:flex-row"
//           >
//             {/* Background image section */}
//             <div className="relative w-full md:w-1/2 h-1/3 md:h-full overflow-hidden">
//               <motion.img
//                 key={bgImage} // re-render + animate when image changes
//                 src={bgImage}
//                 alt="Odisha"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50"></div>
//               <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
//                 <h2 className="text-4xl font-bold mb-2">Odisha</h2>
//                 <p className="text-lg italic">India’s Best Kept Secret</p>
//               </div>
//             </div>

//             {/* Menu links section */}
//             <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative text-white">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-6 right-6 text-gray-300 hover:text-white"
//               >
//                 <X size={28} />
//               </button>

//               <ul className="space-y-8 text-2xl md:text-3xl font-semibold text-center">
//                 {links.map((link, index) => (
//                   <motion.li
//                     key={index}
//                     whileHover={{ scale: 1.1, color: "#facc15" }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="cursor-pointer"
//                     onMouseEnter={() => handleHover(link)} // hover effect
//                   >
//                     {link}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, User, Search } from "lucide-react";
// import odishaImg1 from "../assets/od1.jpeg";
// import odishaImg2 from "../assets/od2.jpeg";
// import odishaImg3 from "../assets/od3.webp";
// import odishaImg4 from "../assets/od4.jpeg";


// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [bgImage, setBgImage] = useState(odishaImg1);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const links = ["Home", "About Odisha", "Destinations", "Culture", "Contact"];

//   const handleHover = (link) => {
//     switch (link) {
//       case "Home":
//         setBgImage(odishaImg1);
//         break;
//       case "About Odisha":
//         setBgImage(odishaImg2);
//         break;
//       case "Destinations":
//         setBgImage(odishaImg3);
//         break;
//       case "Culture":
//         setBgImage(odishaImg4);
//         break;
//       default:
//         setBgImage(odishaImg1);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchTerm);
//     setSearchTerm("");
//     setShowSearch(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center px-6 py-4 text-white">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">KalingaVerse</h1>

//         {/* Right side icons */}
//         <div className="flex items-center space-x-4">
//           {/* Search Icon */}
//           <div className="relative">
//             <button
//               onClick={() => setShowSearch(!showSearch)}
//               className="p-2 rounded-full hover:bg-white/20 transition"
//             >
//               <Search size={24} />
//             </button>

//             {/* Toggle search input */}
//             <AnimatePresence>
//               {showSearch && (
//                 <motion.form
//                   onSubmit={handleSearch}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   className="absolute right-0 top-12"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="px-3 py-1 rounded-full text-black focus:outline-none"
//                   />
//                 </motion.form>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Login Icon */}
//           <button className="p-2 rounded-full hover:bg-white/20 transition">
//             <User size={24} />
//           </button>

//           {/* Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="p-2 rounded-md hover:bg-white/20 transition"
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </div>

//       {/* Fullscreen Drawer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col md:flex-row"
//           >
//             {/* Background image section */}
//             <div className="relative w-full md:w-1/2 h-1/3 md:h-full overflow-hidden">
//               <motion.img
//                 key={bgImage}
//                 src={bgImage}
//                 alt="Odisha"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-white/50"></div>
//               <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
//                 <h2 className="text-4xl font-bold mb-2">Odisha</h2>
//                 <p className="text-lg italic">India’s Best Kept Secret</p>
//               </div>
//             </div>

//             {/* Menu links section */}
//             <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative text-white">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-6 right-6 text-gray-300 hover:text-white"
//               >
//                 <X size={28} />
//               </button>

//               <ul className="space-y-8 text-2xl md:text-3xl font-semibold text-center">
//                 {links.map((link, index) => (
//                   <motion.li
//                     key={index}
//                     whileHover={{ scale: 1.1, color: "#facc15" }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="cursor-pointer"
//                     onMouseEnter={() => handleHover(link)}
//                   >
//                     {link}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;





// linked with the routes.




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, User, Search } from "lucide-react";
// import { Link } from "react-router-dom";   // <-- Added
// import odishaImg1 from "../assets/od1.jpeg";
// import odishaImg2 from "../assets/od2.jpeg";
// import odishaImg3 from "../assets/od3.webp";
// import odishaImg4 from "../assets/od4.jpeg";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [bgImage, setBgImage] = useState(odishaImg1);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const links = ["Home", "About Odisha", "Destinations", "Culture", "Contact"];

//   const handleHover = (link) => {
//     switch (link) {
//       case "Home":
//         setBgImage(odishaImg1);
//         break;
//       case "About Odisha":
//         setBgImage(odishaImg2);
//         break;
//       case "Destinations":
//         setBgImage(odishaImg3);
//         break;
//       case "Culture":
//         setBgImage(odishaImg4);
//         break;
//       default:
//         setBgImage(odishaImg1);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchTerm);
//     setSearchTerm("");
//     setShowSearch(false);
//   };

//   // Convert link text → route path
//   const getRoute = (link) => {
//     switch (link) {
//       case "Home":
//         return "/";
//       case "About Odisha":
//         return "/about-odisha";
//       case "Destinations":
//         return "/destination";
//       case "Culture":
//         return "/culture";
//       case "Contact":
//         return "/contact";
//       default:
//         return "/";
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center px-6 py-4 text-white">
//         <h1 className="text-2xl font-bold">KalingaVerse</h1>

//         <div className="flex items-center space-x-4">
//           {/* Search Icon */}
//           <div className="relative">
//             <button
//               onClick={() => setShowSearch(!showSearch)}
//               className="p-2 rounded-full hover:bg-white/20 transition"
//             >
//               <Search size={24} />
//             </button>

//             <AnimatePresence>
//               {showSearch && (
//                 <motion.form
//                   onSubmit={handleSearch}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   className="absolute right-0 top-12"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="px-3 py-1 rounded-full text-black focus:outline-none"
//                   />
//                 </motion.form>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Login Icon */}
//           <button className="p-2 rounded-full hover:bg-white/20 transition">
//             <User size={24} />
//           </button>

//           {/* Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="p-2 rounded-md hover:bg-white/20 transition"
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </div>

//       {/* Fullscreen Drawer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col md:flex-row"
//           >
//             {/* Background image section */}
//             <div className="relative w-full md:w-1/2 h-1/3 md:h-full overflow-hidden">
//               <motion.img
//                 key={bgImage}
//                 src={bgImage}
//                 alt="Odisha"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-white/50"></div>
//               <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
//                 <h2 className="text-4xl font-bold mb-2">Odisha</h2>
//                 <p className="text-lg italic">India’s Best Kept Secret</p>
//               </div>
//             </div>

//             {/* Menu links section */}
//             <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative text-white">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-6 right-6 text-gray-300 hover:text-white"
//               >
//                 <X size={28} />
//               </button>

//               <ul className="space-y-8 text-2xl md:text-3xl font-semibold text-center">
//                 {links.map((link, index) => (
//                   <motion.li
//                     key={index}
//                     whileHover={{ scale: 1.1, color: "#facc15" }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="cursor-pointer"
//                     onMouseEnter={() => handleHover(link)}
//                   >
//                     <Link to={getRoute(link)} onClick={() => setOpen(false)}>
//                       {link}
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;









// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, User, Search } from "lucide-react";
// import { NavLink, useLocation } from "react-router-dom"; // <-- useLocation
// import odishaImg1 from "../assets/od1.jpeg";
// import odishaImg2 from "../assets/od2.jpeg";
// import odishaImg3 from "../assets/od3.webp";
// import odishaImg4 from "../assets/od4.jpeg";

// const Navbar = () => {
//   const location = useLocation(); // <-- current route
//   const [open, setOpen] = useState(false);
//   const [bgImage, setBgImage] = useState(odishaImg1);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const links = ["Home", "About Odisha", "Destinations", "Culture", "Contact"];

//   const handleHover = (link) => {
//     switch (link) {
//       case "Home": setBgImage(odishaImg1); break;
//       case "About Odisha": setBgImage(odishaImg2); break;
//       case "Destinations": setBgImage(odishaImg3); break;
//       case "Culture": setBgImage(odishaImg4); break;
//       default: setBgImage(odishaImg1);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchTerm("");
//     setShowSearch(false);
//   };

//   const getRoute = (link) => {
//     switch (link) {
//       case "Home": return "/";
//       case "About Odisha": return "/about-odisha";
//       case "Destinations": return "/destination";
//       case "Culture": return "/culture";
//       case "Contact": return "/contact";
//       default: return "/";
//     }
//   };

//   // Decide navbar background based on current page
//   const navbarBgClass = location.pathname === "/" ? "bg-transparent" : "bg-black/60 backdrop-blur-md";

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 ${navbarBgClass}`}>
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center px-6 py-4 text-white">
//         <h1 className="text-2xl font-bold">KalingaVerse</h1>

//         <div className="flex items-center space-x-4">
//           {/* Search Icon */}
//           <div className="relative">
//             <button
//               onClick={() => setShowSearch(!showSearch)}
//               className="p-2 rounded-full hover:bg-white/20 transition"
//             >
//               <Search size={24} />
//             </button>

//             <AnimatePresence>
//               {showSearch && (
//                 <motion.form
//                   onSubmit={handleSearch}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   className="absolute right-0 top-12"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="px-3 py-1 rounded-full text-black focus:outline-none"
//                   />
//                 </motion.form>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Login Icon */}
//           <button className="p-2 rounded-full hover:bg-white/20 transition">
//             <User size={24} />
//           </button>

//           {/* Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="p-2 rounded-md hover:bg-white/20 transition"
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </div>

//       {/* Fullscreen Drawer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col md:flex-row"
//           >
//             {/* Background image section */}
//             <div className="relative w-full md:w-1/2 h-1/3 md:h-full overflow-hidden">
//               <motion.img
//                 key={bgImage}
//                 src={bgImage}
//                 alt="Odisha"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-white/50"></div>
//               <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
//                 <h2 className="text-4xl font-bold mb-2">Odisha</h2>
//                 <p className="text-lg italic">India’s Best Kept Secret</p>
//               </div>
//             </div>

//             {/* Menu links section */}
//             <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative text-white">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-6 right-6 text-gray-300 hover:text-white"
//               >
//                 <X size={28} />
//               </button>

//               <ul className="space-y-8 text-2xl md:text-3xl font-semibold text-center">
//                 {links.map((link, index) => (
//                   <motion.li
//                     key={index}
//                     whileHover={{ scale: 1.1, color: "#facc15" }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="cursor-pointer"
//                     onMouseEnter={() => handleHover(link)}
//                   >
//                     <NavLink
//                       to={getRoute(link)}
//                       onClick={() => setOpen(false)}
//                       className={({ isActive }) =>
//                         isActive ? "text-yellow-400" : "text-white"
//                       }
//                     >
//                       {link}
//                     </NavLink>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;










import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Search } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import odishaImg1 from "../assets/od1.jpeg";
import odishaImg2 from "../assets/od2.jpeg";
import odishaImg3 from "../assets/od3.webp";
import odishaImg4 from "../assets/od4.jpeg";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [bgImage, setBgImage] = useState(odishaImg1);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const links = ["Home", "About Odisha", "Destinations", "Culture", "Contact"];

  const handleHover = (link) => {
    switch (link) {
      case "Home": setBgImage(odishaImg1); break;
      case "About Odisha": setBgImage(odishaImg2); break;
      case "Destinations": setBgImage(odishaImg3); break;
      case "Culture": setBgImage(odishaImg4); break;
      default: setBgImage(odishaImg1);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm("");
    setShowSearch(false);
  };

  const getRoute = (link) => {
    switch (link) {
      case "Home": return "/";
      case "About Odisha": return "/about-odisha";
      case "Destinations": return "/destination";
      case "Culture": return "/culture";
      case "Contact": return "/contact";
      default: return "/";
    }
  };

  // Navbar background based on route
  const navbarBgClass = location.pathname === "/" ? "bg-transparent" : "bg-black/60 backdrop-blur-md";

  return (
    <>
      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 ${navbarBgClass}`}>
        <div className="flex justify-between items-center px-6 py-4 text-white">
          <h1 className="text-2xl font-bold">KalingaVerse</h1>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-full hover:bg-white/20 transition"
              >
                <Search size={24} />
              </button>

              <AnimatePresence>
                {showSearch && (
                  <motion.form
                    onSubmit={handleSearch}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute right-0 top-12"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-3 py-1 rounded-full text-black focus:outline-none"
                    />
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Login */}
            <button className="p-2 rounded-full hover:bg-white/20 transition">
              <User size={24} />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-md hover:bg-white/20 transition"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col md:flex-row bg-black/80 backdrop-blur-lg"
          >
            {/* Left: Background Image */}
            <div className="relative w-full md:w-1/2 h-full overflow-hidden">
              <motion.img
                key={bgImage}
                src={bgImage}
                alt="Odisha"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Odisha</h2>
                <p className="text-lg md:text-xl italic">India’s Best Kept Secret</p>
              </div>
            </div>

            {/* Right: Menu Links */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative text-white px-6">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-gray-300 hover:text-white"
              >
                <X size={28} />
              </button>

              <ul className="space-y-8 text-2xl md:text-3xl font-semibold text-center">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1, color: "#facc15" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="cursor-pointer"
                    onMouseEnter={() => handleHover(link)}
                  >
                    <NavLink
                      to={getRoute(link)}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "text-yellow-400" : "text-white"
                      }
                    >
                      {link}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

