import Home from "./pages/Home";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Biodata from "./pages/Biodata";
import Tutorial_A from "./pages/Tutorials/Tutorial_A"
import Question_A from "./pages/Questions/Question_A";
import Tutorial_B from "./pages/Tutorials/Tutorial_B"
import Question_B from "./pages/Questions/Question_B";
import Tutorial_C from "./pages/Tutorials/Tutorial_C"
import Question_C from "./pages/Questions/Question_C";
import Tutorial_D from "./pages/Tutorials/Tutorial_D"
import Question_D from "./pages/Questions/Question_D";
import Tutorial_E from "./pages/Tutorials/Tutorial_E"
import Question_E from "./pages/Questions/Question_E";
import Tutorial_F from "./pages/Tutorials/Tutorial_F"
import Question_F from "./pages/Questions/Question_F";
import Tutorial_G from "./pages/Tutorials/Tutorial_G"
import Question_G from "./pages/Questions/Question_G";
import Tutorial_H from "./pages/Tutorials/Tutorial_H"
import Question_H from "./pages/Questions/Question_H";
import Tutorial_I from "./pages/Tutorials/Tutorial_I"
import Question_I from "./pages/Questions/Question_I";
import LastPage from "./pages/LastPage"
import Table from "./pages/Table"
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
            <Route path="/Table" element={<Table/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_A/>}/><Route path="/Question_A" element={<Question_A/>}/>
            <Route path="/Tutorial_B" element={<Tutorial_B/>}/> <Route path="/Question_B" element={<Question_B/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_C/>}/><Route path="/Question_C" element={<Question_C/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_D/>}/><Route path="/Question_D" element={<Question_D/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_E/>}/><Route path="/Question_E" element={<Question_E/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_F/>}/><Route path="/Question_F" element={<Question_F/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_G/>}/><Route path="/Question_G" element={<Question_G/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_H/>}/><Route path="/Question_H" element={<Question_H/>}/>
            <Route path="/Tutorial_A" element={<Tutorial_I/>}/><Route path="/Question_I" element={<Question_I/>}/>
            <Route path="/LastPage" element={<LastPage/>}/>
            <Route path="/Table" element={<Table/>}/>
           </Routes>
        </Router>
</div>
</div>
  );
}


export default App;