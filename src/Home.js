import './css/App.css';
import Clock from './components/Clock';
import React, { useRef, useEffect, useState } from 'react';
import "./fonts/DS-DIGI.TTF";
import PastComponent from './components/PastComponent';
import Footer, { MobileFooter } from './components/Footer';
import Future from './components/FutureComponent';


export default function Home() {
  const scrollContainerRef = useRef(null);
  const [currentDiv, setCurrentDiv] = useState(0);


  const scrollToDiv = (index) => {
    if (scrollContainerRef.current) {
      const scrollDiv = scrollContainerRef.current.children[index];
      scrollDiv.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentDiv(index)
   
  };


  useEffect(() => {
    scrollToDiv(1);
  }, []);
  

  return (
    <div className="App">

      <div className="scroll-container">
        <div className="scroll-div" >
          <div className="scroll-container" ref={scrollContainerRef}>
            <div className="scroll-div" >
              <PastComponent/>
            </div>
            <div className="scroll-div clock-container" >
              <Clock />
              <p className="hello">Hello, I'm Bright<br></br><span>A Software Developer</span></p>
            
              </div>
            <div className="scroll-div" >
              <Future/>
            </div>
          </div>
          </div>
      </div>

      <div className='time-traveller'>
        <div className='text'>TIME MACHINE</div>
      <div className="time-buttons">
        <button onClick={() => scrollToDiv(0)} style={{ opacity: currentDiv === 0 ? 1 : 0.3, fontSize: currentDiv === 0 ? 16 : 12 }}>PAST</button>
        <button onClick={() => scrollToDiv(1)} style={{ opacity: currentDiv === 1 ? 1 : 0.3, fontSize: currentDiv === 1 ? 16 : 12 }}>PRESENT</button>
        <button onClick={() => scrollToDiv(2)} style={{ opacity: currentDiv === 2 ? 1 : 0.3, fontSize: currentDiv === 2 ? 16 : 12 }}>FUTURE</button>
      </div>
      <MobileFooter/>
      </div>

      <Footer/>
     
    </div>
  );
}


