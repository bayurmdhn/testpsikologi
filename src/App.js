import Home from "./pages/Home";
import React from 'react'
// import divBacground from "./background";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Biodata from "./pages/Biodata";


function App() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center"
      // style={divBacground}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Biodata" element={<Biodata/>}/>
          </Routes>
        </Router>
    </div>
  );
}


export default App;
