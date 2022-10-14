import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Navbars from "./Pages/Shared/Navbars";
import Footer from "./Pages/Shared/Footer";
import Courses from "./Pages/Courses/Courses";
import Review from "./Pages/Review/Review";

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/review" element={<Review />} />
        
        <Route path="/about" element={<About />} />
        
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
