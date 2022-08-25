import React from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Biodata from "./pages/Biodata";
import Tutorial from "./pages/Tutorial"
import Question from "./pages/Question"
import LastPage from "./pages/LastPage"
import DataSiswa from "./pages/DataSiswa"
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
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Biodata" element={<Biodata/>}/>
            <Route path="/DataSiswa" element={<DataSiswa/>}/>
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