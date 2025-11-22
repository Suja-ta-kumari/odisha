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



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";

const HeritageDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    // scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    // find specific heritage detail
    const selectedRoom = roomsDummyData.find(
      (r) => String(r._id) === String(id)
    );

    if (selectedRoom) {
      setRoom(selectedRoom);
      setMainImage(selectedRoom.images[0]);
    }
  }, [id]);

  // if not found
  if (!room)
    return (
      <h2 className="pt-40 text-center text-xl text-gray-600">
        Loading details...
      </h2>
    );

  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-playfair text-gray-800">
        {room.name}
      </h1>

      {/* Basic Details */}
      <p className="mt-3 text-gray-600">
        <span className="font-semibold">Address:</span> {room.address}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold">Established:</span> {room.established}
      </p>

      {room.description && (
        <p className="mt-4 text-gray-700 leading-relaxed">
          {room.description}
        </p>
      )}

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row mt-8 gap-6">

        {/* Main Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt={room.name}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images.length > 1 &&
            room.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={room.name}
                onClick={() => setMainImage(image)}
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer 
                ${
                  mainImage === image &&
                  "outline outline-3 outline-orange-500"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeritageDetail;
