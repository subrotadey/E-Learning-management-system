import "./App.css";
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Navbars from "./Pages/Shared/Navbars";
import Footer from "./Pages/Shared/Footer";
import Courses from "./Pages/Courses/Courses";
import Review from "./Pages/Review/Review";
import Contact from "./Pages/Contact/Contact";
import WebHeader from "./Pages/Home/WebHeader";
import Teachers from "./Pages/Teachers/Teachers";
import Blogs from "./Pages/Blogs/Blogs";
import TeacherDetails from "./Pages/Teachers/TeacherDetails";
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <div className="App">
      <WebHeader></WebHeader>
      
      <Navbars></Navbars>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<TeacherDetails />} />
      </Routes>
      <Footer></Footer>
      
      <ScrollToTop smooth color='black' className="scroll_top"></ScrollToTop>
    </div>
  );
}

export default App;
