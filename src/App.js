import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Register from "./component/register";
import Navbar from "./component/Navbar";
import Home from "./component/home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
