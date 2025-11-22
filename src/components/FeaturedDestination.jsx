// import React from 'react'
// import { roomsDummyData } from '../assets/assets'
//  import HeritageCard from './HeritageCard'
// import Title from './Title'
// import { useNavigate } from 'react-router-dom'
 

// const FeaturedDestination = () => {

//   const navigate =useNavigate()
//   return (
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//       <Title title='Featured Destination' subTitle='Explore Odisha’s timeless heritage as you journey through centuries of art, culture, and devotion. Every monument tells a story—carved in stone, preserved in tradition, and celebrated through generations. Discover the iconic sites that define the soul of Odisha.'/>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 w-full justify-items-center">
//         {roomsDummyData.slice(0,6).map((room, index)=>(
//           <HeritageCard key={room._id} room={room} index={index}/>
//         ))}
//       </div>

//       <button onClick={()=>{navigate('/desti'); scrollTo(0,0)}}
//        className='my-16 px-4 py-2 text-sm font-medium border border-gray'>View All Destinations</button>
//     </div>
//   )
// }

// export default FeaturedDestination



import React, { useEffect, useState } from 'react'
import { roomsDummyData } from '../assets/assets'
import HeritageCard from './HeritageCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { assets } from "../assets/assets";


const FeaturedDestination = () => {
  const navigate = useNavigate()

  // 🔹 Auto slide index (0 → 1 → 0)
  const [slide, setSlide] = useState(0)

  // 🔹 Auto switch every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 0 ? 1 : 0))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // 🔹 Show 3 cards per slide
  const visibleCards = roomsDummyData.slice(slide * 3, slide * 3 + 3)

  return (
<div
  className="
    flex flex-col items-center px-6 md:px-16 lg:px-24 py-12
    bg-gradient-to-b from-[#d7cbb9] to-[#b8a893]
    bg-no-repeat bg-cover bg-center
  "
  style={{ backgroundImage: `url(${assets.location})` }}
>


      {/* 🔹 Section height reduced (py-20 → py-12) */}

      <Title 
        title='Odisha’s Iconic Heritage Sites'
        subTitle='Explore Odisha’s timeless heritage through centuries of art, culture, and devotion.'
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-full justify-items-center">
        {visibleCards.map((room, index) => (
          <HeritageCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button 
        onClick={() => { navigate('/destination'); scrollTo(0,0) }}
        className='my-12 px-4 py-2 text-sm font-medium border border-gray'
      >
        View All Destinations
      </button>
    </div>
  )
}

export default FeaturedDestination

