
// // src/components/KonarkWheel.jsx
// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";

// // Make sure these files exist in src/assets/
// import temple from "../assets/temple.png";
// import beach from "../assets/beach.png";
// import tribe from "../assets/tribe.png";
// import cuisine from "../assets/cuisine.png";
// import art from "../assets/art.png";
// import wildlife from "../assets/wildlife.png";
// import festival from "../assets/festival.png";
// import waterfall from "../assets/waterfall.png";

// const segments = [
//   { id: 0, title: "Temples & Monuments", img: temple, text: "Ancient temples, stone carvings and historic monuments that tell Odisha's story." },
//   { id: 1, title: "Beaches & Coastline", img: beach, text: "Puri and Chandrabhaga — pristine shores, sunrise rituals and coastal cuisine." },
//   { id: 2, title: "Tribal Culture", img: tribe, text: "Rich tribal traditions, handcrafts, and tribal festivals with living heritage." },
//   { id: 3, title: "Odisha Cuisine", img: cuisine, text: "Seafood, pithas, and regional flavours — a culinary journey across the state." },
//   { id: 4, title: "Handicrafts & Art", img: art, text: "Exquisite appliqué, patachitra paintings, and centuries-old craftsmanship." },
//   { id: 5, title: "Wildlife & Nature", img: wildlife, text: "Bhitarkanika, Similipal — mangroves, elephants, birds and wild landscapes." },
//   { id: 6, title: "Festivals & Dance", img: festival, text: "Rath Yatra, classical dance forms and vibrant festival celebrations." },
//   { id: 7, title: "Waterfalls & Hills", img: waterfall, text: "Scenic waterfalls and hidden hill retreats for the adventurous traveler." },
// ];

// const KonarkWheel = () => {
//   const [active, setActive] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const wheelRef = useRef(null);

//   const count = segments.length;
//   const radius = 140;

//   return (
//     <section className="w-full bg-gradient-to-b from-black via-purple-900 to-black text-white py-16 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

//         {/* LEFT: Wheel */}
//         <div
//           className="w-full md:w-1/2 flex justify-center"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]">
//             <motion.div
//               ref={wheelRef}
//               animate={{ rotate: isHovering ? 3 : 0 }}
//               transition={{ type: "spring", stiffness: 60, damping: 12 }}
//               className="absolute inset-0 rounded-full flex items-center justify-center"
//             >
//               <div className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-amber-400/90 to-amber-300/80 flex items-center justify-center shadow-xl">
//                 <div className="text-black font-semibold text-sm md:text-base text-center">Konark Chakra</div>
//               </div>

//               {/* Wheel segments */}
//               {segments.map((seg, i) => {
//                 const angle = (i / count) * Math.PI * 2;
//                 const x = Math.cos(angle) * radius;
//                 const y = Math.sin(angle) * radius;
//                 const rotateDeg = (angle * 180) / Math.PI + 90;

//                 return (
//                   <motion.button
//                     key={seg.id}
//                     onClick={() => setActive(i)}
//                     whileHover={{ scale: 1.08 }}
//                     className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-white/6 backdrop-blur-sm border border-white/10 shadow-md cursor-pointer focus:outline-none"
//                     style={{
//                       transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotateDeg}deg)`,
//                       transition: "transform 0.35s ease",
//                       zIndex: i === active ? 40 : 20,
//                     }}
//                     aria-pressed={i === active}
//                     title={seg.title}
//                   >
//                     <motion.div
//                       initial={{ opacity: 0.95 }}
//                       animate={{ opacity: i === active ? 1 : 0.9 }}
//                       transition={{ duration: 0.25 }}
//                       className="w-full h-full rounded-full flex items-center justify-center"
//                       style={{
//                         boxShadow: i === active ? "0 16px 40px rgba(0,0,0,0.5)" : undefined,
//                         background: i === active ? "linear-gradient(135deg, rgba(255,183,77,0.15), rgba(255,183,77,0.06))" : undefined,
//                         border: i === active ? "1px solid rgba(255,183,77,0.2)" : undefined,
//                         transform: `rotate(${-rotateDeg}deg)`,
//                       }}
//                     >
//                       <span className="text-xs md:text-sm text-white text-center px-2">{seg.title.split(" ")[0]}</span>
//                     </motion.div>
//                   </motion.button>
//                 );
//               })}
//             </motion.div>

//             {/* SVG spokes */}
//             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//               <g transform="translate(210,210)">
//                 <circle r="200" cx="0" cy="0" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
//                 {[...Array(count)].map((_, i) => {
//                   const ang = (i / count) * Math.PI * 2;
//                   const x1 = Math.cos(ang) * 30;
//                   const y1 = Math.sin(ang) * 30;
//                   const x2 = Math.cos(ang) * 190;
//                   const y2 = Math.sin(ang) * 190;
//                   return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />;
//                 })}
//               </g>
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT: Details panel */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ x: 40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl">
//             <div className="flex gap-4 md:gap-6">
//               <img
//                 src={segments[active].img}
//                 alt={segments[active].title}
//                 className="w-28 h-20 md:w-40 md:h-28 object-cover rounded-lg border border-white/10"
//               />
//               <div>
//                 <h3 className="text-xl md:text-2xl font-semibold">{segments[active].title}</h3>
//                 <p className="mt-2 text-sm md:text-base text-white/85 max-w-xl">{segments[active].text}</p>
//                 <div className="mt-4 flex items-center gap-3">
//                   <a
//                     href="#explore"
//                     className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
//                   >
//                     Explore More
//                   </a>
//                   <button
//                     onClick={() => setActive((prev) => (prev + 1) % segments.length)}
//                     className="px-3 py-2 rounded-full border border-white/20 text-sm hover:bg-white/5 transition"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
//               <div>
//                 <div className="text-xs text-white/70">Best time to visit</div>
//                 <div className="mt-1">Oct — Mar</div>
//               </div>
//               <div>
//                 <div className="text-xs text-white/70">Duration</div>
//                 <div className="mt-1">Half day — 2 days</div>
//               </div>
//             </div>
//           </div>
//           <p className="mt-4 text-xs text-white/60">Tip: Hover segments on desktop, tap on mobile.</p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default KonarkWheel;





// src/components/KonarkWheel.jsx
// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";

// import temple from "../assets/temple.png";
// import beach from "../assets/beach.png";
// import tribe from "../assets/tribe.png";
// import cuisine from "../assets/cuisine.png";
// import art from "../assets/art.png";
// import wildlife from "../assets/wildlife.png";
// import festival from "../assets/festival.png";
// import waterfall from "../assets/waterfall.png";

// const segments = [
//   { id: 0, title: "Temples", img: temple, text: "Ancient temples, stone carvings and historic monuments that tell Odisha's story." },
//   { id: 1, title: "Beaches", img: beach, text: "Puri and Chandrabhaga — pristine shores, sunrise rituals and coastal cuisine." },
//   { id: 2, title: "Tribal Culture", img: tribe, text: "Rich tribal traditions, handcrafts, and tribal festivals with living heritage." },
//   { id: 3, title: "Cuisine", img: cuisine, text: "Seafood, pithas, and regional flavours — a culinary journey across the state." },
//   { id: 4, title: "Art", img: art, text: "Exquisite appliqué, patachitra paintings, and centuries-old craftsmanship." },
//   { id: 5, title: "Wildlife", img: wildlife, text: "Bhitarkanika, Similipal — mangroves, elephants, birds and wild landscapes." },
//   { id: 6, title: "Festivals", img: festival, text: "Rath Yatra, classical dance forms and vibrant festival celebrations." },
//   { id: 7, title: "Waterfalls", img: waterfall, text: "Scenic waterfalls and hidden hill retreats for the adventurous traveler." },
// ];

// const KonarkWheel = () => {
//   const [active, setActive] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const wheelRef = useRef(null);

//   const count = segments.length;
//   const radius = 140;

//   return (
//     <section className="w-full bg-gradient-to-b from-black via-purple-900 to-black text-white py-16 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

//         {/* LEFT: Wheel */}
//         <div
//           className="w-full md:w-1/2 flex justify-center"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]">
//             <motion.div
//               ref={wheelRef}
//               animate={{ rotate: isHovering ? 3 : 0 }}
//               transition={{ type: "spring", stiffness: 60, damping: 12 }}
//               className="absolute inset-0 rounded-full flex items-center justify-center"
//             >
//               {/* Konark Chakra center image */}
//               <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl">
//                 <img src={temple} alt="Konark Chakra" className="w-full h-full object-cover" />
//               </div>

//               {/* Wheel segments with images */}
//               {segments.map((seg, i) => {
//                 const angle = (i / count) * Math.PI * 2;
//                 const x = Math.cos(angle) * radius;
//                 const y = Math.sin(angle) * radius;

//                 return (
//                   <motion.button
//                     key={seg.id}
//                     onClick={() => setActive(i)}
//                     whileHover={{ scale: 1.1 }}
//                     className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md cursor-pointer border border-white/20 focus:outline-none`}
//                     style={{
//                       transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                       zIndex: i === active ? 40 : 20,
//                     }}
//                     title={seg.title}
//                   >
//                     <img
//                       src={seg.img}
//                       alt={seg.title}
//                       className={`w-full h-full object-cover rounded-full ${i === active ? "ring-4 ring-amber-400/50" : ""}`}
//                     />
//                   </motion.button>
//                 );
//               })}
//             </motion.div>

//             {/* SVG spokes */}
//             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//               <g transform="translate(210,210)">
//                 <circle r="200" cx="0" cy="0" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
//                 {[...Array(count)].map((_, i) => {
//                   const ang = (i / count) * Math.PI * 2;
//                   const x1 = Math.cos(ang) * 30;
//                   const y1 = Math.sin(ang) * 30;
//                   const x2 = Math.cos(ang) * 190;
//                   const y2 = Math.sin(ang) * 190;
//                   return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />;
//                 })}
//               </g>
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT: Details panel */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ x: 40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl flex flex-col md:flex-row gap-6 md:gap-8">
            
//             {/* Segment Image */}
//             <img
//               src={segments[active].img}
//               alt={segments[active].title}
//               className="w-full md:w-48 md:h-36 object-cover rounded-lg border border-white/10"
//             />

//             {/* Segment Text */}
//             <div className="flex-1">
//               <h3 className="text-xl md:text-2xl font-semibold">{segments[active].title}</h3>
//               <p className="mt-2 text-sm md:text-base text-white/85 max-w-xl">
//                 {segments[active].text} <br />
//                 Learn more about this segment, places to visit, and tips for the best experience.
//               </p>
//               <div className="mt-4 flex items-center gap-3">
//                 <a
//                   href="#explore"
//                   className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
//                 >
//                   Explore More
//                 </a>
//                 <button
//                   onClick={() => setActive((prev) => (prev + 1) % segments.length)}
//                   className="px-3 py-2 rounded-full border border-white/20 text-sm hover:bg-white/5 transition"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
//             <div>
//               <div className="text-xs text-white/70">Best time to visit</div>
//               <div className="mt-1">Oct — Mar</div>
//             </div>
//             <div>
//               <div className="text-xs text-white/70">Duration</div>
//               <div className="mt-1">Half day — 2 days</div>
//             </div>
//           </div>
//           <p className="mt-4 text-xs text-white/60">Tip: Hover segments on desktop, tap on mobile.</p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default KonarkWheel;








import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import temple from "../assets/temple.png";
import beach from "../assets/beach.png";
import tribe from "../assets/tribe.png";
import cuisine from "../assets/cuisine.png";
import art from "../assets/art.png";
import wildlife from "../assets/wildlife.png";
import festival from "../assets/festival.png";
import waterfall from "../assets/waterfall.png";

const segments = [
  { id: 0, title: "Temples", img: temple, text: "Ancient temples, stone carvings and historic monuments that tell Odisha's story." },
  { id: 1, title: "Beaches", img: beach, text: "Puri and Chandrabhaga — pristine shores, sunrise rituals and coastal cuisine." },
  { id: 2, title: "Tribal Culture", img: tribe, text: "Rich tribal traditions, handcrafts, and tribal festivals with living heritage." },
  { id: 3, title: "Cuisine", img: cuisine, text: "Seafood, pithas, and regional flavours — a culinary journey across the state." },
  { id: 4, title: "Art", img: art, text: "Exquisite appliqué, patachitra paintings, and centuries-old craftsmanship." },
  { id: 5, title: "Wildlife", img: wildlife, text: "Bhitarkanika, Similipal — mangroves, elephants, birds and wild landscapes." },
  { id: 6, title: "Festivals", img: festival, text: "Rath Yatra, classical dance forms and vibrant festival celebrations." },
  { id: 7, title: "Waterfalls", img: waterfall, text: "Scenic waterfalls and hidden hill retreats for the adventurous traveler." },
];

const KonarkWheel = () => {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const wheelRef = useRef(null);

  const count = segments.length;
  const radius = 140;

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">

        {/* LEFT: Wheel */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]">
            <motion.div
              ref={wheelRef}
              animate={{ rotate: isHovering ? 360 : 0 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full flex items-center justify-center"
            >
              {/* Konark Chakra center image */}
              <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl">
                <img src={temple} alt="Konark Chakra" className="w-full h-full object-cover" />
              </div>

              {/* Wheel segments with images */}
              {segments.map((seg, i) => {
                const angle = (i / count) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.button
                    key={seg.id}
                    onClick={() => setActive(i)}
                    whileHover={{ scale: 1.1 }}
                    className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md cursor-pointer border border-white/20 focus:outline-none transition-transform duration-300`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      zIndex: i === active ? 40 : 20,
                    }}
                    title={seg.title}
                  >
                    <img
                      src={seg.img}
                      alt={seg.title}
                      className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
                        i === active ? "ring-4 ring-amber-400/50 scale-110 shadow-xl" : ""
                      }`}
                    />
                  </motion.button>
                );
              })}
            </motion.div>

            {/* SVG spokes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <g transform="translate(210,210)">
                <circle r="200" cx="0" cy="0" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                {[...Array(count)].map((_, i) => {
                  const ang = (i / count) * Math.PI * 2;
                  const x1 = Math.cos(ang) * 30;
                  const y1 = Math.sin(ang) * 30;
                  const x2 = Math.cos(ang) * 190;
                  const y2 = Math.sin(ang) * 190;
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />;
                })}
              </g>
            </svg>
          </div>
        </div>

        {/* RIGHT: Details panel */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl flex flex-col md:flex-row gap-6 md:gap-8">
            
            {/* Segment Image */}
            <img
              src={segments[active].img}
              alt={segments[active].title}
              className="w-full md:w-48 md:h-36 object-cover rounded-lg border border-white/10"
            />

            {/* Segment Text */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-200">{segments[active].title}</h3>
              <p className="mt-2 text-sm md:text-base text-white/85 max-w-xl">
                {segments[active].text} <br />
                Learn more about this segment, places to visit, and tips for the best experience.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#explore"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
                >
                  Explore More
                </a>
                <button
                  onClick={() => setActive((prev) => (prev + 1) % segments.length)}
                  className="px-3 py-2 rounded-full border border-white/20 text-sm hover:bg-white/5 transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
            <div>
              <div className="text-xs text-white/70">Best time to visit</div>
              <div className="mt-1">Oct — Mar</div>
            </div>
            <div>
              <div className="text-xs text-white/70">Duration</div>
              <div className="mt-1">Half day — 2 days</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/60">Tip: Hover segments on desktop, tap on mobile.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default KonarkWheel;
