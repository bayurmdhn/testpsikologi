import React from 'react'
import Login from "./Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DataSiswa from "./DataSiswa"
import background from ".//bg.png"

function AdminApp() {
  return (
    <div className="w-full flex justify-center" id="Login">
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
            <Route path="/" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>
           </Routes>
        </Router>
</div>
</div>
  );
}


export default AdminApp;