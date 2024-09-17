import React, {useEffect} from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Stack from './Components/Stack';
import ContactMe from './Components/Contact';
import ScrollToTopButton from './Components/ScrollTop';

function App() {
  useEffect(() => {
    document.title = "Ghira's Portfolio";
  }, []);
  
  return (
    <div className="App">
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      <Navbar/>
      <Home/>
      <About/>
      <Stack/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;

