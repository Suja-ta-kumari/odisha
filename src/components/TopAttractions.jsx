// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import img1 from "../assets/od1.jpeg";
// import img2 from "../assets/od2.jpeg";
// import img3 from "../assets/od3.webp";
// import img4 from "../assets/od4.jpeg";

// const attractions = [
//   { title: "Konark Sun Temple", img: img1 },
//   { title: "Puri Jagannath Temple", img: img2 },
//   { title: "Chilika Lake", img: img3 },
//   { title: "Dhauli Shanti Stupa", img: img4 },
// ];

// const TopAttractions = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
//   };

//   return (
//     <section className="relative w-full py-16 bg-gradient-to-b from-purple-900 to-black text-white">
//       {/* Section Title */}
//       <div className="px-6 md:px-20 mb-10">
//         <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
//           Top Attractions
//         </h2>
//         <p className="text-gray-300 mt-2 text-lg max-w-2xl">
//           Explore the most iconic and breathtaking destinations across Odisha.
//         </p>
//       </div>

//       {/* Carousel Wrapper */}
//       <div className="relative flex items-center px-6 md:px-16">
//         {/* Left Arrow */}
//         <button
//           onClick={scrollLeft}
//           className="hidden md:flex absolute left-4 z-20 p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition"
//         >
//           <ChevronLeft className="text-white" size={28} />
//         </button>

//         {/* Scrollable Container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-scroll scrollbar-none scroll-smooth py-4"
//         >
//           {attractions.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="min-w-[260px] md:min-w-[320px] bg-white/5 rounded-2xl overflow-hidden shadow-lg border border-white/10 backdrop-blur-md"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-48 md:h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl md:text-2xl font-semibold">
//                   {item.title}
//                 </h3>
//                 <button className="mt-3 text-amber-300 font-medium hover:underline">
//                   View More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={scrollRight}
//           className="hidden md:flex absolute right-4 z-20 p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition"
//         >
//           <ChevronRight className="text-white" size={28} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TopAttractions;





import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/od1.jpeg";
import img2 from "../assets/od2.jpeg";
import img3 from "../assets/od3.webp";
import img4 from "../assets/od4.jpeg";

const attractions = [
  {
    title: "Konark Sun Temple",
    description:
      "13th-century architectural masterpiece adorned with intricate carvings.",
    img: img1,
  },
  {
    title: "Puri Jagannath Temple",
    description:
      "One of India’s holiest temples, a center of devotion and culture.",
    img: img2,
  },
  {
    title: "Chilika Lake",
    description:
      "Asia’s largest brackish water lagoon, home to migratory birds.",
    img: img3,
  },
  {
    title: "Dhauli Shanti Stupa",
    description:
      "A serene white peace pagoda symbolizing non-violence and tranquility.",
    img: img4,
  },
];

const TopAttractions = () => {
  const [current, setCurrent] = useState(0);
  const total = attractions.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence>
        {attractions.map(
          (item, index) =>
            index === current && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Right Content Box */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md p-6 rounded-xl max-w-sm md:max-w-md"
                >
                  <h2 className="text-3xl md:text-5xl font-extrabold text-amber-400">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-gray-100 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-5 px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-lg">
                    View More →
                  </button>
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition"
        aria-label="Previous"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition"
        aria-label="Next"
      >
        <ChevronRight size={28} className="text-white" />
      </button>
    </section>
  );
};

export default TopAttractions;










// src/components/Attractions.jsx
// import React from "react";
// import { motion } from "framer-motion";

// import temple from "../assets/temple.png";
// import beach from "../assets/beach.png";
// import tribe from "../assets/tribe.png";
// import cuisine from "../assets/cuisine.png";
// import art from "../assets/art.png";
// import wildlife from "../assets/wildlife.png";

// const attractions = [
//   { img: temple, title: "Ancient Temples", desc: "Discover Odisha's rich spiritual heritage and architectural marvels." },
//   { img: beach, title: "Serene Beaches", desc: "Relax on tranquil beaches and enjoy the coastal beauty." },
//   { img: tribe, title: "Tribal Culture", desc: "Experience the vibrant tribal art and traditions of Odisha." },
//   { img: cuisine, title: "Odisha Cuisine", desc: "Savor delicious traditional dishes from Odisha." },
//   { img: art, title: "Arts & Crafts", desc: "Explore intricate handicrafts and artistic heritage." },
//   { img: wildlife, title: "Wildlife & Nature", desc: "Get close to Odisha's lush forests and exotic wildlife." },
// ];

// const Attractions = () => {
//   return (
//     <section className="relative w-full py-24 bg-black/80 text-white px-6 sm:px-10 md:px-20 lg:px-32">
//       {/* Section Header */}
//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-12"
//       >
//         <p className="text-sm sm:text-base uppercase tracking-wider text-amber-300 mb-2">
//           Explore Odisha
//         </p>
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
//           Must-Visit Attractions
//         </h2>
//         <p className="mt-4 text-white/80 max-w-xl mx-auto">
//           From ancient temples to tranquil beaches, Odisha offers a rich blend of culture, heritage, and natural beauty.
//         </p>
//       </motion.div>

//       {/* Attractions Grid */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         initial="hidden"
//         animate="show"
//         variants={{
//           hidden: {},
//           show: { transition: { staggerChildren: 0.2 } },
//         }}
//       >
//         {attractions.map((item, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               show: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           >
//             <motion.img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//               initial={{ scale: 1.12, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//             />
//             <div className="p-5">
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-white/80 text-sm">{item.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Attractions;












