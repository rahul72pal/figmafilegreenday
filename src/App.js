import "./App.css";
import About from "./components/About";
import Bestsellers from "./components/Bestsellers";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <div className='bg-[#ffffff] w-[100vw] h-[100%] overflow-x-hidden'>
      <Home/>
      <About/>
      <Products/>
      <Bestsellers/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
