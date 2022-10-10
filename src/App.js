import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbars from "./components/Navbars/Navbars";
import  Footer  from "./components/Footer/Footer";
import HomeCarousel from "./components/Home/HomeCarousel/HomeCarousel";

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <HomeCarousel></HomeCarousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
