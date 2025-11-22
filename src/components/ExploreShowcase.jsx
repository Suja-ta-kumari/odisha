// import React from "react";
// import { motion } from "framer-motion";

// import od1 from "../assets/od1.jpeg";
// import od2 from "../assets/od2.jpeg";
// import od3 from "../assets/od3.webp";
// import od4 from "../assets/od4.jpeg";

// const places = [
//   {
//     title: "Temples & Monuments",
//     subtitle: "A saga of excellence",
//     img: od1,
//   },
//   {
//     title: "Beaches & Coastline",
//     subtitle: "Serenity meets adventure",
//     img: od2,
//   },
//   {
//     title: "Nature & Wildlife",
//     subtitle: "Untouched beauty of Odisha",
//     img: od3,
//   },
//   {
//     title: "Art & Culture",
//     subtitle: "Dance, craft and heritage",
//     img: od4,
//   },
// ];

// const ExploreShowcase = () => {
//   return (
//     <section className="w-full py-20 bg-gradient-to-b from-black to-purple-900 text-white px-6 md:px-20">
//       {/* Heading */}
//       <div className="mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
//           Explore Odisha
//         </h2>
//         <p className="text-gray-300 mt-3 text-lg max-w-xl">
//           Dive into the rich heritage, pristine landscapes, and vibrant culture
//           of India’s best kept secret.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {places.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="relative group overflow-hidden rounded-3xl shadow-xl border border-white/10"
//           >
//             {/* Image */}
//             <img
//               src={item.img}
//               className="w-full h-[320px] object-cover transform group-hover:scale-110 transition duration-700"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>

//             {/* Text */}
//             <div className="absolute bottom-6 left-6">
//               <h3 className="text-3xl font-bold">{item.title}</h3>
//               <p className="text-lg text-gray-300 mt-1">{item.subtitle}</p>

//               <button className="mt-3 px-4 py-1.5 border border-white/40 rounded-full text-sm hover:bg-white/20 transition">
//                 View More →
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExploreShowcase;


















import React from "react";
import { motion } from "framer-motion";

import temple from "../assets/temple.png";
import beach from "../assets/beach.png";
import tribe from "../assets/tribe.png";
import cuisine from "../assets/cuisine.png";
import art from "../assets/art.png";
import wildlife from "../assets/wildlife.png";

const attractions = [
  { img: temple, title: "Ancient Temples", desc: "Discover Odisha's rich spiritual heritage and architectural marvels." },
  { img: beach, title: "Serene Beaches", desc: "Relax on tranquil beaches and enjoy the coastal beauty." },
  { img: tribe, title: "Tribal Culture", desc: "Experience the vibrant tribal art and traditions of Odisha." },
  { img: cuisine, title: "Odisha Cuisine", desc: "Savor delicious traditional dishes from Odisha." },
  { img: art, title: "Arts & Crafts", desc: "Explore intricate handicrafts and artistic heritage." },
  { img: wildlife, title: "Wildlife & Nature", desc: "Get close to Odisha's lush forests and exotic wildlife." },
];

const Attractions = () => {
  return (
    <section className="relative w-full py-24 bg-black/80 text-white px-6 sm:px-10 md:px-20 lg:px-32">
      {/* Section Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-sm sm:text-base uppercase tracking-wider text-amber-300 mb-2">
          Explore Odisha
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Must-Visit Attractions
        </h2>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          From ancient temples to tranquil beaches, Odisha offers a rich blend of culture, heritage, and natural beauty.
        </p>
      </motion.div>

      {/* Attractions Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {attractions.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
              initial={{ scale: 1.12, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Attractions;