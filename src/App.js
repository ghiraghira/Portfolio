import React from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Stack from './Components/Stack';

function App() {
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
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

