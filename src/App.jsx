// import React from 'react'
// import Navbar from './components/Navbar'
// import { useLocation } from 'react-router-dom'



// const App = () => {

//   const isOwnerPath = useLocation().pathname.includes("owner");
//   return (
//     <div>
     
//        { !isOwnerPath && <Navbar />}
//        <div className='min-h-[70vh]'>

//        </div>
      
//     </div>
//   )
// }

// export default App





import React from "react";
import Navbar from "./components/Navbar";
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Culture from "./pages/Culture";
import AboutOdisha from "./pages/AboutOdisha";
import HeritageDetail from "./pages/HeritageDetail";

function App() {
  return (
    <div className="min-h-screen ">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/destination/:id' element={<HeritageDetail/>}/>
        <Route path='/about-odisha' element={<AboutOdisha/>}/>
        <Route path='/culture' element={<Culture/>}/>

      </Routes>
    
    </div>
  );
}


export default App;

















