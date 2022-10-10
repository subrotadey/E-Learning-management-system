import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbars from "./components/Navbars/Navbars";
import  Footer  from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
