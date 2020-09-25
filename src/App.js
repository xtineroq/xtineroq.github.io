import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import portfolioData from './Utils/portfolioData.json'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { farFaEye } from '@fortawesome/free-solid-svg-icons'

// library.add(farFaEye)

function App() {

  return (
    <div className="App">
      <Header data={portfolioData}/>
      <Projects data={portfolioData}/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
