// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { roomsDummyData } from '../assets/assets'

// const HeritageDetail = () => {
//     const {id} = useParams()
//     const [room,setRoom] = useState(null)
//     const[mainImage,setMainImage] = useState(null)

//     useEffect(()=>{
//        const room = roomsDummyData.find(room=> room._id === id)
//        room && setRoom(room)
//        room && setMainImage(room.images[0])

//     },[])
//   return room && (
//     <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
//         {/* Room detail */}
//         <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
//             <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='font-inner text-sm'>({room.roomType})</span></h1>
//         </div>
      
//     </div>
//   )
// }

// export default HeritageDetail;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { roomsDummyData } from '../assets/assets';

// const HeritageDetail = () => {
//   const { id } = useParams();
//   const [room, setRoom] = useState(null);
//   const [mainImage, setMainImage] = useState(null);

//   useEffect(() => {
//     const selectedRoom = roomsDummyData.find(
//       r => String(r._id) === id
//     );

//     if (selectedRoom) {
//       setRoom(selectedRoom);
//       setMainImage(selectedRoom.images[0]);
//     }
//   }, [id]);

//   if (!room) return <h2 className="pt-40 text-center">Loading...</h2>;

//   return (
//     <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
//       <h1 className="text-3xl md:text-4xl font-playfair text-gray-800">
//         {room.name}
//       </h1>

//       <p className="mt-2 text-gray-600">
//         <span className="font-semibold">Address:</span> {room.address}
//       </p>

//       <p className="text-gray-600">
//         <span className="font-semibold">Established:</span> {room.established}
//       </p>


//       {/* room imges */}
//       <div className='flex flex-col lg:flex-row mt-6 gap-6'>
//         <div className='lg:w-1/2 w-full'>
//             <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
//         </div>
//         <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
//             {room?.images.length> 1 && room.images.map((image, index)=>(
//                 <img onClick={()=> setMainImage(image)}
//                  key={index} src={image} alt="Room Image" 
//                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage===image && 'outline-3 outline-orange-500'}`} />
//             ))}
//         </div>
//       </div>





//     </div>

    

    
//   );
// };

// export default HeritageDetail;














// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { roomsDummyData } from '../assets/assets';

// const HeritageDetail = () => {
//   const { id } = useParams();
//   const [room, setRoom] = useState(null);
//   const [mainImage, setMainImage] = useState(null);

//   useEffect(() => {
//     const selectedRoom = roomsDummyData.find(r => String(r._id) === id);
//     if (selectedRoom) {
//       const firstImage = selectedRoom.images?.[0] || '/placeholder.jpg';
//       setRoom(selectedRoom);
//       setMainImage(firstImage);
//     }
//   }, [id]);

//   if (!room) return <h2 className="pt-40 text-center text-gray-700">Loading...</h2>;

//   return (
//     <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
//       {/* Room Name */}
//       <h1 className="text-3xl md:text-4xl font-playfair text-gray-800">
//         {room.name}
//       </h1>

//       {/* Room Details */}
//       <p className="mt-2 text-gray-600">
//         <span className="font-semibold">Address:</span> {room.address}
//       </p>
//       <p className="text-gray-600">
//         <span className="font-semibold">Established:</span> {room.established}
//       </p>

//       {/* Room Images */}
//       <div className='flex flex-col lg:flex-row mt-6 gap-6'>
//         {/* Main Image */}
//         <div className='lg:w-1/2 w-full'>
//           <img
//             src={mainImage}
//             alt={room.name}
//             className='w-full h-80 md:h-96 lg:h-[400px] rounded-xl shadow-lg object-cover transition-all duration-300'
//           />
//         </div>

//         {/* Thumbnails */}
//         <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
//           {room?.images.length > 1 && room.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`${room.name} image ${index + 1}`}
//               onClick={() => setMainImage(image)}
//               className={`w-full h-32 md:h-36 lg:h-32 rounded-xl shadow-md object-cover cursor-pointer transition-all duration-300
//                 ${mainImage === image ? 'ring-4 ring-orange-500' : ''}`}
//             />
//           ))}
//         </div>

//               {/* History Card */}
//       <div
//         style={{
//           marginTop: "30px",
//           padding: "25px",
//           backgroundColor: "#f7f7f7",
//           borderRadius: "12px",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//           maxWidth: "800px",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         <h2 style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "15px" }}>
//           History
//         </h2>
//         <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
//           {room.history}
//         </p>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default HeritageDetail;




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomsDummyData } from "../assets/assets";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";





const HeritageDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const selectedRoom = roomsDummyData.find(r => String(r._id) === id);
    if (selectedRoom) {
      const firstImage = selectedRoom.images?.[0] || '/placeholder.jpg';
      setRoom(selectedRoom);
      setMainImage(firstImage);
    }
  }, [id]);

  if (!room) return <h2 className="pt-40 text-center text-gray-700">Loading...</h2>;

  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Room Name */}
      <h1 className="text-3xl md:text-4xl font-playfair text-gray-800">
        {room.name}
      </h1>

      {/* Room Details */}
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Address:</span> {room.address}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Established:</span> {room.established}
      </p>

      {/* Room Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        {/* Main Image */}
        <div className='lg:w-1/2 w-full'>
          <img
            src={mainImage}
            alt={room.name}
            className='w-full h-80 md:h-96 lg:h-[400px] rounded-xl shadow-lg object-cover transition-all duration-300'
          />
        </div>

        {/* Thumbnails */}
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${room.name} image ${index + 1}`}
              onClick={() => setMainImage(image)}
              className={`w-full h-32 md:h-36 lg:h-32 rounded-xl shadow-md object-cover cursor-pointer transition-all duration-300
                ${mainImage === image ? 'ring-4 ring-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* History Card */}
{/* History Section */}
<div className="w-full flex justify-center mt-20 mb-28 px-4 md:px-10">
  <div className="bg-white rounded-[28px] shadow-[0_6px_26px_rgba(0,0,0,0.06)]
      max-w-6xl w-full p-10 md:p-14">

    <h2 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-8 text-center font-semibold">
      📜 History of {room.name}
    </h2>

    {room.history ? (
      <div className="space-y-6">
        {room.history.split("\n\n").map((para, index) => (
          <p
            key={index}
            className="text-gray-700 text-[17px] md:text-[19px] leading-[1.85] font-serif text-justify"
          >
            {para}
          </p>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 text-lg italic text-center">
        History information will be added soon.
      </p>
    )}

  </div>
</div>



{/* Guide Section */}
{/* Guide Section */}
<div className="mt-6 flex justify-center">
  <div className="bg-gradient-to-r from-amber-50 to-orange-100 rounded-3xl 
      shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-10 max-w-5xl w-full 
      flex flex-col md:flex-row items-center gap-10 border border-orange-200">

    {/* Character Image */}
    <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
      <img
        src={assets.monkCharacter}
        alt="Guide Character"
        className="w-full h-full object-contain drop-shadow-2xl animate-float"
      />
    </div>

    {/* Guide Text & Buttons */}
    <div className="max-w-xl text-center md:text-left">
      <h3 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-3">
        Your Interactive Heritage Guide
      </h3>

      <p className="text-gray-700 text-lg md:text-xl font-serif leading-relaxed mb-6">
        Discover this historic monument through immersive AR visuals, 
        breathtaking VR experiences, and engaging gamified journeys 
        guided by our friendly Monk explorer.
      </p>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 
            text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform">
          🔍 AR Mode
        </button>

        <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 
            text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform">
          🥽 VR Mode
        </button>

        <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 
            text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform">
          🎮 Gamified Mode
        </button>

      </div>
    </div>

  </div>
</div>


{/* Timeline Section */}
{room.timeline && (
  <div className="mt-12 border-l-4 border-orange-500 pl-6 space-y-8">

    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      🕰️ Timeline of Heritage
    </h2>

    {room.timeline.map((item, index) => (
      <div key={index} className="relative">

        {/* Dot */}
        <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>

        {/* Year */}
        <h3 className="text-xl font-semibold text-orange-700">
          {item.year}
        </h3>

        {/* Title */}
        <p className="text-gray-900 font-medium">
          {item.title}
        </p>

        {/* Description */}
        <p className="text-gray-600 mt-1">
          {item.description}
        </p>
      </div>
    ))}
  </div>
)}






    </div>
  );
};

export default HeritageDetail;








