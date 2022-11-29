import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Dashboard from "./Pages/Dashboard/Dashboard";
import UpdateUser from "./Pages/Dashboard/UpdateUser/UpdateUser";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import CourseDetails from "./Pages/Courses/CourseDetails";
// import app from "./firebase.init";
// import { getAuth } from "firebase/auth";

// import MessengerSendToMessenger from "react-messenger-send-to-messenger";
// import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

// const auth = getAuth(app);
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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updateTeacher/:id" element={<UpdateUser />}></Route>
        <Route path="/teacherDetails/:id" element={<TeacherDetails />} />
        <Route path="/courseDetails/:id" element={<CourseDetails></CourseDetails>}></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
      </Routes>
      <Footer></Footer>
      <ScrollToTop smooth color="black" className="scroll_top"></ScrollToTop>
      {/* <MessengerSendToMessenger
        pageId="106685705609442"
        appId="606751324554237"
      /> */}
      {/* <MessengerCustomerChat pageId="106685705609442" appId="606751324554237" /> */}
    </div>
  );
}

export default App;
