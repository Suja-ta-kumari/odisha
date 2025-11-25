import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/hero.jpg";
import img2 from "../assets/od5.png";
import img3 from "../assets/od7.jpg";

const images = [img1, img2, img3];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-screen pt-24 overflow-hidden">

      {/* Background Slider */}
      <AnimatePresence>
        <motion.img
          key={idx}
          src={images[idx]}
          alt="slide"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Gradients + Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(247, 246, 246, 0.3)_0%,rgba(0,0,0,0.7)_65%,rgba(0,0,0,0.9)_100%)]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="px-6 sm:px-10 md:px-20 lg:px-32 max-w-[760px] text-white">

          {/* Small Tag */}
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="inline-block bg-white/10 px-3 py-1 rounded-full 
            text-xs sm:text-sm uppercase tracking-[0.18em] text-white/90 mb-5"
          >
            Discover Odisha
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="
              font-serif 
              text-4xl sm:text-5xl lg:text-6xl 
              leading-[1.15] sm:leading-[1.12] lg:leading-[1.1]
              font-semibold drop-shadow-xl
            "
            style={{ letterSpacing: "-0.015em" }}
          >
            Experience the <span className="text-amber-300">heritage</span> and <br />
            the coastal serenity of Odisha
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="
              mt-6 
              text-sm sm:text-base lg:text-lg 
              text-white/90 
              max-w-xl 
              leading-relaxed
            "
          >
            Ancient temples, tranquil beaches, vibrant festivals — a land where
            stories live in the stones and the sea.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Secondary Button (Learn More) */}
            <a
              href="#learn"
              className="
                inline-flex items-center justify-center
                px-7 py-3 rounded-full
                font-medium text-sm sm:text-base
                text-white/90 border border-white/30
                backdrop-blur-sm
                hover:border-white hover:text-white hover:bg-white/10
                transition-all duration-300
              "
            >
              Learn More
            </a>
            
  



          </motion.div>

          {/* Credit */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-6 text-[10px] sm:text-xs text-white/70"
          >
            Photo credit: Odisha Tourism • Best time to visit: Oct — Mar
          </motion.p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === idx ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
