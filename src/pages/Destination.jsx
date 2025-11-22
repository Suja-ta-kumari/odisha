// import React from 'react'
// import { assets, roomsDummyData } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Destination = () => {
//   const navigate = useNavigate();
//   return (
//     <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
//     <div>
//       <div>
//         <h1 className='font-playfair text-4xl md:text-[40px]'>Discover Odisha’s Heritage</h1>
//         <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Unveil the charm of Odisha through its remarkable heritage sites—from the architectural wonder of Konark Sun Temple to the spiritual aura of Puri Jagannath Temple and the historic forts of Cuttack. A journey that celebrates culture, history, and timeless beauty.</p>
//       </div>
//       {roomsDummyData.map((room)=>(
//         <div>
//           <img onClick={()=> {navigate(`/rooms/${room._id}`); scrollTo(0,0)} }
//           src={room.images[0]} alt="img" title='View Room Details' 
//           className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
//           <div>
//             <p className='text-gray-500'>{room.hotel.city}</p>
//             <p onClick={()=> {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
//             className='text-gray-800 text-3xl font-playfair'>{room.hotel.name}</p>
//             <div className='flex items-center'>
//               {/* star rating */}

//             </div>
//             <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
//               <img src={assets.locationIcon} alt="location-icon" />
//             </div>
//             <span>{room.hotel.address}</span>


//           </div>
//         </div>

//       ))}

//     </div>
//     {/* filter */}
//     <div>

//     </div>
//     </div>
//   )
// }

// export default Destination


import React from 'react';
import { roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/odishaaa.jpg';

const Destination = () => {
  const navigate = useNavigate();

  const goToRoom = (id) => {
    navigate(`/destination/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='w-full'>

      {/* Hero / Banner Section */}
      <div
        className='w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative'
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/60'></div>

        {/* Banner Content */}
        <div className='absolute bottom-10 left-6 md:left-16 lg:left-24 text-white'>
          <p className='mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-md text-gray-100 drop-shadow-lg'>
            Explore the <span className='text-purple-300 font-semibold'>heritage</span>, <span className='text-pink-300 font-semibold'>culture</span>, and <span className='text-yellow-300 font-semibold'>breathtaking landscapes</span> of Odisha.
          </p>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className='mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 text-white font-semibold rounded-lg shadow-lg transition-all duration-300'
          >
            Discover More
          </button>
        </div>
      </div>

      {/* See to Believe Section */}
      <div className='container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 mt-12 text-center space-y-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>See to Believe</h2>
        <p className='text-gray-600 text-md md:text-lg max-w-3xl mx-auto'>
         Below is a visual treat of Temples & Monuments. Enjoy the immersive experience and experience the 360 degree views and virtual tours which are soon going to enhance your visual journey!
        </p>

      </div>

      {/* Rooms / Cards Section */}
      <div className='container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 mt-12 space-y-12'>
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className='flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300'
          >
            {/* Left: Image */}
            <div className='flex-1 lg:max-w-md'>
              <img
                src={room.images[0]}
                alt={room.name}
                className='w-full h-64 md:h-80 object-cover cursor-pointer hover:scale-105 transition-transform duration-300 rounded-l-2xl'
                onClick={() => goToRoom(room._id)}
              />
            </div>

            {/* Right: Content */}
            <div className='flex-1 flex flex-col justify-center space-y-2 p-6 lg:p-10'>
              <p className='text-indigo-500 font-medium text-sm'>{room.city || "Location"}</p>
              <h2
                className='text-2xl md:text-3xl font-playfair text-gray-800 cursor-pointer hover:text-purple-600 transition-colors'
                onClick={() => goToRoom(room._id)}
              >
                {room.name}
              </h2>
              <p className='text-gray-600'><span className='font-semibold text-pink-500'>Address:</span> {room.address}</p>
              <p className='text-gray-600'><span className='font-semibold text-purple-500'>Established:</span> {room.established}</p>
              {/* <p className='text-gray-600'><span className='font-semibold text-indigo-500'>Contact:</span> {room.contact}</p> */}
              <p className='text-gray-700 mt-2'>
                {room.description || "Explore this heritage site and its rich history."}
              </p>
              <button
                onClick={() => goToRoom(room._id)}
                className='mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 text-white rounded-lg font-medium transition-all duration-300 w-max'
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Destination;






