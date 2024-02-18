import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services2 from "./components/moreServices/Services2"
import Cloud from "./components/cloud/Cloud";
import Apps from "./components/Apps/Apps"
import Summit from "./components/Summit/Summit";
import News from "./components/News/News";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  return (
    <div className="font-ubuntu">
      <Navbar></Navbar>
      <Sidebar></Sidebar>

      <Hero></Hero>
      <div className="p-[24px]">
        <Services2></Services2>
        <Cloud></Cloud>
        <Apps></Apps>
        <Summit></Summit>
        <News></News>


      </div>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
