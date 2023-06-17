import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/Hero";
import Project from "./components/project/Project";
import Construction from "./components/construction/Construction";
import Careers from "./components/careers/Careers";
import Info from "./components/info/Info";
import Featured from "./components/featured/Featured";
import News from "./components/news/News";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <Project/>
     <Construction/>
     <Careers/> 
     <Info/>
     <Featured/>
     <News/>
     <Footer/>
    </div>
  );
}
export default App;
