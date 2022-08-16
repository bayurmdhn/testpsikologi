import React from 'react'
import Home from "./pages_user/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Biodata from "./pages_user/Biodata";
import Tutorial from "./pages_user/Tutorial"
import Question from "./pages_user/Question"
import LastPage from "./pages_user/LastPage"
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
            <Route path="/LastPage" element={<LastPage/>}/>
           </Routes>
        </Router>
</div>
</div>
  );
}


export default App;