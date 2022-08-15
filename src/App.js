import React from 'react'
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Biodata from "./pages/Biodata";
import Tutorial from "./pages/Tutorial"
import Question from "./pages/Question"
import background from ".//bg.png"


function App() {
  return (
    <div className="w-full flex justify-center" id="home">
    <div className="w-full h-screen flex flex-col items-center justify-center"
      style={{
        width: '100%',
        height: '650px',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover' 
      }}
    >
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Biodata" element={<Biodata/>}/>
            <Route path="/Tutorial" element={<Tutorial/>}/>
            <Route path="/Question" element={<Question/>}/>
           </Routes>
        </Router>
</div>
</div>
  );
}


export default App;