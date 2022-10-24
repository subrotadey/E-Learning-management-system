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
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import WebHeader from "./Pages/Home/WebHeader";

function App() {
  return (
    <div className="App">
      <WebHeader></WebHeader>
      <Navbars></Navbars>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
