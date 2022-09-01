import Home from "./pages/Home";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Biodata from "./pages/Biodata";
import Tutorial from "./pages/Tutorial"
import Question_A from "./pages/Question_A"
import Question_B from "./pages/Question_B"
import Question_C from "./pages/Question_C";
import Question_D from "./pages/Question_D";
import Question_E from "./pages/Question_E";
import Question_F from "./pages/Question_F";
import Question_G from "./pages/Question_G";
import Question_H from "./pages/Question_H";
import Question_I from "./pages/Question_I";
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
            <Route path="/Tutorial" element={<Tutorial/>}/>
            <Route path="/Question_A" element={<Question_A/>}/>
            <Route path="/Question_B" element={<Question_B/>}/>
            <Route path="/Question_C" element={<Question_C/>}/>
            <Route path="/Question_D" element={<Question_D/>}/>
            <Route path="/Question_E" element={<Question_E/>}/>
            <Route path="/Question_F" element={<Question_F/>}/>
            <Route path="/Question_G" element={<Question_G/>}/>
            <Route path="/Question_H" element={<Question_H/>}/>
            <Route path="/Question_I" element={<Question_I/>}/>
            <Route path="/LastPage" element={<LastPage/>}/>
            <Route path="/Table" element={<Table/>}/>
           </Routes>
        </Router>
</div>
</div>
  );
}


export default App;