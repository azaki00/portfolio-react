import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import GOT from "./components/got/GOT";

function App() {
  return (

    
    <Router>
      <nav className="navigation">
        <Link to='/'>Home</Link>
        <Link to='/got'>Game Of Thrones</Link>
        <Link to ='/3'>3</Link>
        <Link to ='/4'>4</Link>
        <Link to='/about'>About</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/got" element={<GOT/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
