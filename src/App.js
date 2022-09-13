import Home from "./pages/Home";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Biodata from "./pages/Biodata";
import Report from "./pages/Report";
import Tutorial_1 from "./pages/Tutorials/Tutorial_1";import Question_1 from "./pages/Questions/Question_1";
import Tutorial_2 from "./pages/Tutorials/Tutorial_2";import Question_2 from "./pages/Questions/Question_2";
import Tutorial_3 from "./pages/Tutorials/Tutorial_3";import Question_3 from "./pages/Questions/Question_3";
import Tutorial_4 from "./pages/Tutorials/Tutorial_4";import Question_4 from "./pages/Questions/Question_4";
import Tutorial_5 from "./pages/Tutorials/Tutorial_5";import Question_5 from "./pages/Questions/Question_5";
import Tutorial_6 from "./pages/Tutorials/Tutorial_6";import Question_6 from "./pages/Questions/Question_6";
import Tutorial_7 from "./pages/Tutorials/Tutorial_7";import Question_7 from "./pages/Questions/Question_7";
import Tutorial_8 from "./pages/Tutorials/Tutorial_8";import Question_8 from "./pages/Questions/Question_8";
import Tutorial_9 from "./pages/Tutorials/Tutorial_9";import Question_9 from "./pages/Questions/Question_9";
import LastPage from "./pages/LastPage"
import Table from "./pages/Table";
import User from "./pages/User"
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
            <Route path="/User" element={<User/>}/>
            <Route path="/Table" element={<Table/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Biodata" element={<Biodata/>}/>
            <Route path="/LastPage" element={<LastPage/>}/>
            <Route path="/Report" element={<Report/>}/>
            <Route path="/Tutorial_1" element={<Tutorial_1/>}/> <Route path="/Question_1" element={<Question_1/>}/>
            <Route path="/Tutorial_2" element={<Tutorial_2/>}/> <Route path="/Question_2" element={<Question_2/>}/>
            <Route path="/Tutorial_3" element={<Tutorial_3/>}/> <Route path="/Question_3" element={<Question_3/>}/>
            <Route path="/Tutorial_4" element={<Tutorial_4/>}/> <Route path="/Question_4" element={<Question_4/>}/>
            <Route path="/Tutorial_5" element={<Tutorial_5/>}/> <Route path="/Question_5" element={<Question_5/>}/>
            <Route path="/Tutorial_6" element={<Tutorial_6/>}/> <Route path="/Question_6" element={<Question_6/>}/>
            <Route path="/Tutorial_7" element={<Tutorial_7/>}/> <Route path="/Question_7" element={<Question_7/>}/>
            <Route path="/Tutorial_8" element={<Tutorial_8/>}/> <Route path="/Question_8" element={<Question_8/>}/>
            <Route path="/Tutorial_9" element={<Tutorial_9/>}/> <Route path="/Question_9" element={<Question_9/>}/>
           </Routes>
        </Router>
</div>
</div>
  );
}


export default App;