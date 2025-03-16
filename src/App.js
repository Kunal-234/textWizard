import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const[mode ,setMode]=useState("dark");
  const toggleMode=()=>{
    if(mode==="dark")
    {
      document.body.classList.remove("lightMode")
      document.body.classList.add("darkMode")
      setMode("light")
    }
    else{
      document.body.classList.remove("darkMode")
      document.body.classList.add("lightMode")
      setMode("dark")
    }
  }

  return (
    <>
     <Router>
      <div className="container my-3">
      <Navbar mode={mode} toggleMode={toggleMode} title='TextWizard' about='About us'/>
      <Routes>
          <Route path='/' element={<TextForm mode={mode} heading='TextWizard'/>}/ > 
          <Route path='/about' element={<About mode={mode}/>} /> 
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
