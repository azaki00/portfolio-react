import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import GOT from "./components/got/GOT";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/got" element={<GOT />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
