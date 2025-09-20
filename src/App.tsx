import Navbar from "./component/layout/Navbar"
import Home from './component/section/Home';
import Contact from './component/section/Contact';
import Project from './component/section/Project';
import Skill from "./component/section/Skill";

import './App.css'
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
