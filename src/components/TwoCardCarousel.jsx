import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeritageCard from "./HeritageCard";

const TwoCardCarousel = ({ rooms }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 2;

  const next = () => {
    setStartIndex((prev) => (prev + cardsPerPage) % rooms.length);
  };

  const prev = () => {
    setStartIndex(
      (prev) => (prev - cardsPerPage + rooms.length) % rooms.length
    );
  };

  // Current 2 cards
  const currentRooms = [];
  for (let i = 0; i < cardsPerPage; i++) {
    currentRooms.push(rooms[(startIndex + i) % rooms.length]);
  }

  return (
    <div className="relative px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Destinations</h2>

      <div className="flex overflow-hidden">
        <AnimatePresence initial={false}>
          {currentRooms.map((room, index) => (
            <motion.div
              key={room._id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-1/2 px-2"
            >
              <HeritageCard room={room} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded shadow"
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded shadow"
      >
        {">"}
      </button>
    </div>
  );
};

export default TwoCardCarousel;
