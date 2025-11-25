import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import flag from "./flag.jpg";
import marada from "./marada.png";
import dalu from "./dalu.png";
import samles from "./samles.png";
import konark from "./konark.png";
import tara from "./tara.png";
import location from "./location.jpg";
import odishaaa from "./odishaaa.jpg";
import heri from "./heri.png";
import marada1 from "./marada1.jpeg"
import marada2 from "./marada2.jpeg"
import marada3 from "./marada3.jpeg"
import monkCharacter from "./monkCharacter.png"
import dhauli from "./dhauli.jpg"
import dhauli1 from "./dhauli1.jpg"
import dhauli2 from "./dhauli2.jpg"
import dhauli3 from "./dhauli3.jpg"
import samleswari1 from "./samleswari1.jpg"
import samleswari2 from "./samleswari2.webp"
import samleswari3 from "./samleswari3.webp"
import samleswari from "./samleswari.webp"
import kon from "./kon.jpeg"
import kon1 from "./kon1.jpeg"
import kon2 from "./kon2.jpeg"
import kon3 from "./kon3.jpeg"
import maradaa from "./maradaa.jpg"
import tarini from "./tarini.webp"
import tarini1 from "./tarini1.jpg"
import tarini2 from "./tarini2.jpg"
import tarini3 from "./tarini3.jpeg"





export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    flag,
    marada,
    samles,
    konark,
    tara,
    dalu,
    location,
    odishaaa,
    marada1,
    marada2,
    marada3,
    monkCharacter,
    dhauli,
    dhauli1,
    dhauli2,
    dhauli3,
    samleswari,
    samleswari1,
    samleswari2,
    samleswari3,
    kon,
    kon1,
    kon2,
    kon3,
    maradaa,
    tarini,
    tarini1,
    tarini2,
    tarini3
    

   
    
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        // "_id": "67f7647c197ac559e4089b96",
        // "hotel": hotelDummyData,
        // "roomType": "Double Bed",
        // "pricePerNight": 399,
        // "amenities": ["Room Service", "Mountain View", "Pool Access"],
        // "images": [marada, roomImg2, roomImg3, roomImg4],
        // "isAvailable": true,
        // "createdAt": "2025-04-10T06:26:04.013Z",
        // "updatedAt": "2025-04-10T06:26:04.013Z",
        // "__v": 0


        "_id": "heritage_001",
        "name": "Sarana Srikhetra Marada Jagannath Temple",
        "address": "Marada, Ganjam District, Odisha – PIN 761105",
        "established": "1733 AD",
        "contact": "+91-1234567890",
        "owner": userDummyData,
        "images": [maradaa, marada1, marada2, marada3],
        // "city": "Gangtok",
        "createdAt": "2025-04-10T06:22:11.663Z",
        "updatedAt": "2025-04-10T06:22:11.663Z",
        "__v": 0,
        "history": `Sarana Srikhetra Marada Jagannath Temple, established in 1733 AD, is one of the most revered religious sites in Ganjam District, Odisha. 
        The temple is dedicated to Lord Jagannath and has been a center of devotion and pilgrimage for nearly three centuries. 
        Built with intricate architecture reflecting the Kalinga style, the temple showcases exquisite carvings and sculptures that depict various aspects of Hindu mythology. 

        Throughout its history, the temple has played a significant role in the local culture, hosting annual festivals such as Rath Yatra, which attracts thousands of devotees from nearby villages and towns. 
        The temple administration has maintained the traditional rituals and ceremonies, preserving centuries-old practices of worship and devotion. 

        Apart from its spiritual significance, Sarana Srikhetra Marada Jagannath Temple has also been a hub of social and cultural gatherings, fostering community bonding and charitable activities. 
        Visitors not only come for prayers but also admire the scenic surroundings, peaceful ambiance, and the historical heritage that the temple embodies.`,
        "timeline": [
  {
    year: "14th Century",
    title: "Traditional Worship Origins",
    description: "Local beliefs trace the roots of Jagannath worship in the region to early cultural practices."
  },
  {
    year: "18th Century",
    title: "Temple Establishment",
    description: "The shrine structure was established as a spiritual center for surrounding communities."
  },
  {
    year: "20th Century",
    title: "Cultural Recognition",
    description: "The temple grew in prominence as a major local pilgrimage site."
  },
  {
    year: "Present Day",
    title: "Annual Rituals and Devotees",
    description: "Known as 'Sarana Srikhetra', the site attracts large gatherings for regional celebrations."
  }
]


    },
    {
        // "_id": "67f76452197ac559e4089b8e",
        // "hotel": hotelDummyData,
        // "roomType": "Double Bed",
        // "pricePerNight": 299,
        // "amenities": ["Room Service", "Mountain View", "Pool Access"],
        // "images": [dalu, roomImg3, roomImg4, roomImg1],
        // "isAvailable": true,
        // "createdAt": "2025-04-10T06:25:22.593Z",
        // "updatedAt": "2025-04-10T06:25:22.593Z",
        // "__v": 0

        "_id": "heritage_002",
        "name": "Dhauligiri Shanti Stupa",
        "address": "Puri road, Bhubaneswar, Dhauli, Odisha 751002",
        "established": "1972",
        "contact": "+91-1234567890",
        "owner": userDummyData,
        "images": [dhauli, dhauli1, dhauli2, dhauli3],
        // "city": "Gangtok",
        "createdAt": "2025-04-10T06:22:11.663Z",
        "updatedAt": "2025-04-10T06:22:11.663Z",
        "__v": 0,
        "history": `Dhauligiri Shanti Stupa, also known as the Peace Pagoda, is a prominent Buddhist monument located in the Dhauligiri region. 
        Built to promote peace, harmony, and the teachings of Buddha, the stupa is situated in a serene and scenic environment, offering panoramic views of the surrounding mountains and valleys. 

        The stupa was constructed as part of the international Peace Pagoda movement, which aims to inspire people towards non-violence and inner peace. 
        It is an architectural marvel featuring traditional Buddhist design elements, including a large dome, prayer wheels, and intricately carved statues of Buddha and other deities. 

        Dhauligiri Shanti Stupa has become a major pilgrimage and tourist attraction, drawing visitors from across the world who come to meditate, participate in religious ceremonies, and experience the tranquility of the location. 
        The site also hosts various cultural and spiritual events throughout the year, reflecting the rich Buddhist heritage and traditions of the region. 

        Apart from its spiritual significance, the stupa serves as a symbol of global unity, compassion, and the universal message of peace. 
        Visitors often enjoy long walks along the surrounding trails, capturing the breathtaking landscapes and soaking in the peaceful atmosphere that the monument radiates.`,
        "timeline": [
  {
    year: "261 BCE",
    title: "Kalinga War",
    description: "The bloody war here led Emperor Ashoka to embrace Buddhism."
  },
  {
    year: "3rd Century BCE",
    title: "Ashokan Inscriptions",
    description: "Rock edicts promoting peace and dharma were carved at Dhauli."
  },
  {
    year: "1972",
    title: "Shanti Stupa Construction",
    description: "The Peace Pagoda was built by Japan Buddha Sangha and Kalinga Nippon Buddha Sangha."
  },
  {
    year: "Present",
    title: "Symbol of Peace",
    description: "A global symbol promoting non-violence, meditation, and harmony."
  }
]


    },
    {
        // "_id": "67f76406197ac559e4089b82",
        // "hotel": hotelDummyData,
        // "roomType": "Double Bed",
        // "pricePerNight": 249,
        // "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        // "images": [samles, roomImg4, roomImg1, roomImg2],
        // "isAvailable": true,
        // "createdAt": "2025-04-10T06:24:06.285Z",
        // "updatedAt": "2025-04-10T06:24:06.285Z",
        // "__v": 0

        "_id": "heritage_003",
        "name": "Shree Shree Samaleswari",
        "address": "Ray Pada, Khetrajpur, Sambalpur, Odisha 768003, India",
        "established": "Mid-16th Century",
        "contact": "+91-1234567890",
        "owner": userDummyData,
        "images": [samleswari, samleswari1, samleswari2, samleswari3],
        // "city": "Gangtok",
        "createdAt": "2025-04-10T06:22:11.663Z",
        "updatedAt": "2025-04-10T06:22:11.663Z",
        "__v": 0,
        "history": `Shree Shree Samaleswari Temple, located in Sambalpur, Odisha, is one of the most revered Hindu temples in western Odisha. 
        Dedicated to Goddess Samaleswari, the presiding deity of Sambalpur, the temple has been a center of spiritual and cultural importance for centuries. 
        The temple is believed to have been originally constructed several centuries ago, with renovations and expansions carried out over time to accommodate the growing number of devotees. 

        The temple architecture showcases traditional Odisha style, with beautifully carved stone pillars, intricate sculptures, and a majestic sanctum. 
        The deity is worshipped with great devotion, and the temple is especially vibrant during festivals such as Nuakhai, Durga Puja, and Dussehra, attracting thousands of devotees from across the state. 

        Shree Shree Samaleswari Temple is not only a spiritual hub but also a cultural landmark, reflecting the rich heritage and traditions of Odisha. 
        It serves as a place for community gatherings, religious ceremonies, and charitable activities, making it a cornerstone of local society. 
        Visitors often experience a peaceful ambiance, engaging in prayers, rituals, and exploring the historic significance of the temple and its surroundings.`,
        "timeline": [
  {
    year: "1541",
    title: "Temple Construction",
    description: "Built during the Chauhan dynasty to honor Maa Samaleswari."
  },
  {
    year: "17th Century",
    title: "Expansion and Patronage",
    description: "Kings funded temple rituals and elevated it as a cultural center."
  },
  {
    year: "20th Century",
    title: "Regional Pilgrimage Growth",
    description: "Gained prominence as Western Odisha's spiritual identity."
  },
  {
    year: "Present",
    title: "Major Festival – Nuakhai",
    description: "Lakhs of devotees visit during the agricultural celebration."
  }
]


    },
    {
        // "_id": "67f763d8197ac559e4089b7a",
        // "hotel": hotelDummyData,
        // "roomType": "Single Bed",
        // "pricePerNight": 199,
        // "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        // "images": [konark, roomImg1, roomImg2, roomImg3],
        // "isAvailable": true,
        // "createdAt": "2025-04-10T06:23:20.252Z",
        // "updatedAt": "2025-04-10T06:23:20.252Z",
        // "__v": 0

        "_id": "heritage_004",
        "name": "Konark Sun Temple",
        "address": "Konark Sun Temple Complex, Konark, Puri District, Odisha, India - 752111",
        "established": "13th Century CE",
        "contact": "+91-1234567890",
        "owner": userDummyData,
        "images": [kon, kon1, kon2, kon3],
        // "city": "Gangtok",
        "createdAt": "2025-04-10T06:22:11.663Z",
        "updatedAt": "2025-04-10T06:22:11.663Z",
        "__v": 0,
        "history": `Konark Sun Temple, located in Konark, Odisha, is a 13th-century architectural marvel dedicated to Lord Surya, the Sun God. 
        Built by King Narasimhadeva I of the Eastern Ganga dynasty around 1250 AD, the temple is famously designed in the shape of a colossal chariot with intricately carved stone wheels, pillars, and walls. 

        The temple is a UNESCO World Heritage Site and is considered one of the finest examples of Kalinga architecture. 
        Its sculptures and carvings depict a wide range of themes, including mythology, daily life, animals, and erotic art, showcasing the rich artistic and cultural heritage of medieval Odisha. 

        Konark Sun Temple was originally constructed to serve as a monumental chariot of the Sun God, symbolizing the cycle of time. 
        The temple's majestic structure, detailed carvings, and astronomical alignment demonstrate the advanced engineering and architectural skills of the era. 

        Over centuries, the temple has faced natural decay and partial destruction, yet it continues to attract millions of devotees, tourists, historians, and photographers from around the world. 
        Annual festivals like the Konark Dance Festival celebrate traditional Odissi dance and music, highlighting Odisha’s vibrant cultural legacy. 

        Today, the temple stands not only as a religious site but also as an enduring symbol of India’s historical, artistic, and spiritual achievements, making it a must-visit heritage monument.`,
        "timeline": [
  {
    year: "1250 CE",
    title: "Construction",
    description: "Built by King Narasimhadeva I in the form of a celestial chariot."
  },
  {
    year: "16th Century",
    title: "Structural Decline",
    description: "Temple began to deteriorate due to natural and human damage."
  },
  {
    year: "1900s",
    title: "Restoration Efforts",
    description: "Archaeological Survey of India began preservation work."
  },
  {
    year: "1984",
    title: "UNESCO World Heritage Status",
    description: "Recognized globally for its architectural and cultural significance."
  }
]


    },
     {
        // "_id": "67f763d8197ac559e4089bn6",
        // "hotel": hotelDummyData,
        // "roomType": "Single Bed",
        // "pricePerNight": 199,
        // "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        // "images": [tara, roomImg1, roomImg2, roomImg3],
        // "isAvailable": true,
        // "createdAt": "2025-04-10T06:23:20.252Z",
        // "updatedAt": "2025-04-10T06:23:20.252Z",
        // "__v": 0

        "_id": "heritage_005",
        "name": "Maa Tara Tarini Temple",
        "address": "Temple Road Dt, near Rushikulya River, Raipur, Purusottampur, Odisha 761018, India.",
        "established": "8th Century AD",
        "contact": "+91-1234567890",
        "owner": userDummyData,
        "images": [tarini, tarini1, tarini2, tarini3],
        // "city": "Gangtok",
        "createdAt": "2025-04-10T06:22:11.663Z",
        "updatedAt": "2025-04-10T06:22:11.663Z",
        "__v": 0,
        "history": `Maa Tara Tarini Temple, located atop the picturesque Kumari Hills on the banks of the Rushikulya River in Ganjam district of Odisha, is one of the oldest and most revered Shakti Peethas in India. The shrine is believed to be associated with the ancient legend of Goddess Sati, where her breasts are said to have fallen, making the site a sacred centre of divine feminine worship.

        The origins of the temple trace back to prehistoric times, with strong connections to tribal traditions, early fertility worship, and Tantric practices. The name “Tara” also links the site to Buddhist Tantrism and Vajrayana traditions, showcasing the region’s layered cultural evolution.

        During the medieval period, particularly around the 16th and 17th centuries, the temple complex began to take structural form with royal patronage and increased devotional prominence. In the modern era, extensive renovations in the early 2000s enhanced the temple’s architecture, accessibility, and pilgrim facilities, including pathways and ropeway services.

        Today, Maa Tara Tarini Temple stands as a major spiritual and cultural landmark, attracting millions of devotees, especially during the vibrant Chaitra festival held in March and April. The temple symbolizes the enduring legacy of Shakta worship in Odisha and remains a powerful representation of India’s ancient spiritual heritage, cultural continuity, and architectural devotion.`,

        "timeline": [
  {
    year: "Prehistoric Era",
    title: "Shakti Peetha Origins",
    description: "Believed to be one of the oldest Mother Goddess worship sites."
  },
  {
    year: "17th Century",
    title: "Hilltop Shrine Development",
    description: "Temple complex expanded on the Kumari hills."
  },
  {
    year: "2000s",
    title: "Major Renovation",
    description: "Modern temple architecture and pilgrim facilities added."
  },
  {
    year: "Present",
    title: "Chaitra Festival Significance",
    description: "One of the largest gatherings for Goddess Tara worship."
  }
]


    },
    {
//   "_id": "67f763d8197ac559e4089b17", // unique id
//   "hotel": hotelDummyData,
//   "roomType": "Single Bed",
//   "pricePerNight": 220,
//   "amenities": ["Free WiFi", "Room Service", "Pool Access"],
//   "images": [roomImg1, roomImg2, roomImg3, roomImg4],
//   "isAvailable": true,
//   "createdAt": "2025-04-10T06:27:00.000Z",
//   "updatedAt": "2025-04-10T06:27:00.000Z",
//   "__v": 0


        "_id": "heritage_006",
        "name": "Sarana Srikhetra Marada Jagannath Temple",
        "address": "Marada, Ganjam District, Odisha – PIN 761105",
        "established": "1733 AD",
        "contact": "+91-1234567890",
        "owner": userDummyData,
        "images": [maradaa, marada1, marada2, marada3],
        // "city": "Gangtok",
        "createdAt": "2025-04-10T06:22:11.663Z",
        "updatedAt": "2025-04-10T06:22:11.663Z",
        "__v": 0,
        "history": `Sarana Srikhetra Marada Jagannath Temple, located in Marada, Ganjam District, Odisha, was established in 1733 AD and has since been a significant spiritual and cultural center in the region. 
        Dedicated to Lord Jagannath, the temple attracts thousands of devotees every year, particularly during major festivals like Rath Yatra and other religious celebrations. 

        The temple's architecture reflects the traditional Kalinga style, with intricately carved stone structures, ornate pillars, and beautifully decorated sanctum. 
        Over the centuries, it has been maintained and renovated by local rulers and devotees to preserve its spiritual sanctity and cultural heritage. 

        Sarana Srikhetra Marada Jagannath Temple is not only a place of worship but also a hub for cultural and social gatherings. 
        Devotees participate in rituals, charitable activities, and community events that strengthen the local traditions and foster a sense of unity. 

       The temple's serene environment, combined with its historical significance and architectural grandeur, makes it a must-visit site for pilgrims and tourists alike. 
       Visitors often explore the temple grounds, admire the artistry, and immerse themselves in the spiritual atmosphere that the temple radiates.`,
       "timeline": [
  {
    year: "14th Century",
    title: "Traditional Worship Origins",
    description: "Local beliefs trace the roots of Jagannath worship in the region to early cultural practices."
  },
  {
    year: "18th Century",
    title: "Temple Establishment",
    description: "The shrine structure was established as a spiritual center for surrounding communities."
  },
  {
    year: "20th Century",
    title: "Cultural Recognition",
    description: "The temple grew in prominence as a major local pilgrimage site."
  },
  {
    year: "Present Day",
    title: "Annual Rituals and Devotees",
    description: "Known as 'Sarana Srikhetra', the site attracts large gatherings for regional celebrations."
  }
]

 
}

]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b16",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/