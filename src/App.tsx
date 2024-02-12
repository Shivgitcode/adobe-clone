import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services2 from "./components/moreServices/Services2"

function App() {
  return (
    <div className="font-ubuntu">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services2></Services2>
    </div>
  );
}

export default App;
