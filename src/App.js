import './App.css';
import About from './Components/About';
import ContactMe from './Components/ContactMe';
import Home from './Components/Home';
import MyNavBar from './Components/MyNavBar';
import Projects from './Components/Project';
import Project2 from './Components/Project_2';

// import NavBar from './Components/NavBar';
import { useState } from 'react';
import {BrowserRouter,  Route ,Routes } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');

  const changeMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529'; //#212529
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#FFF7F1';
      document.body.style.color = 'black';
    }
  }




//  "homepage": "https://ChinmayLale.github.io/Astroworld",
  return (
    <>
    {/* <NavBar mode={Mode} changeMode={changeMode}/> */}
    <MyNavBar mode={Mode} changeMode={changeMode}/>
    
    {/* <BrowserRouter basename='/Astroworld'> */}
      <Routes>
        <Route path="/" element={<Home mode={Mode} changeMode={changeMode}/>}/>
        <Route path="/about" element={<About mode={Mode}/>}/>
        <Route path="/projects" element={<Projects mode={Mode}/>}/>
        <Route path="/projects_2" element={<Project2 mode={Mode}/>}/>
        <Route path="/contactme" element={<ContactMe mode={Mode}/>}/>
      </Routes> 
    {/* </BrowserRouter>  */}
    {/* <Link to={<About mode={Mode}/>}/> */}
    </>
  );
}

export default App;
