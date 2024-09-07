import './css/App.css';
import Clock from './Clock';
import React, { useRef, useEffect, useState } from 'react';
import "./fonts/DS-DIGI.TTF";
import PastComponent from './components/PastComponent';

function App() {
  const scrollContainerRef = useRef(null);
  const scrollPageRef = useRef(null);
  const [currentDiv, setCurrentDiv] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToDiv = (index) => {
    if (scrollContainerRef.current) {
      const scrollDiv = scrollContainerRef.current.children[index];
      scrollDiv.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentDiv(index)
  };
  const scrollToPage = (index) => {
    if (scrollContainerRef.current) {
      const scrollPage = scrollPageRef.current.children[index];
      scrollPage.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentPage(index)
  };

  useEffect(() => {
    // scrollToDiv(1);
  }, []);
  

  return (
    <div className="App">

      <div className="scroll-container" ref={scrollPageRef}>
        <div className="scroll-div" >
          <div className="scroll-container" ref={scrollContainerRef}>
            <div className="scroll-div" >
              <PastComponent/>
            </div>
            <div className="scroll-div clock-container" >
              <Clock />
              <p className="hello">Hello, I'm Bright<br></br><span>A Software Developer</span></p>

              </div>
            <div className="scroll-div" >Future content</div>
          </div></div>
        <div className="scroll-div" >Second Page</div>
        <div className="scroll-div" >Third Page</div>
        <div className="scroll-div" >Fourth Page</div>
      </div>

      <div className="time-buttons">
        <button onClick={() => scrollToDiv(0)} style={{ opacity: currentDiv === 0 ? 1 : 0.3, fontSize: currentDiv === 0 ? 16 : 12 }}>PAST</button>
        <button onClick={() => scrollToDiv(1)} style={{ opacity: currentDiv === 1 ? 1 : 0.3, fontSize: currentDiv === 1 ? 16 : 12 }}>PRESENT</button>
        <button onClick={() => scrollToDiv(2)} style={{ opacity: currentDiv === 2 ? 1 : 0.3, fontSize: currentDiv === 2 ? 16 : 12 }}>FUTURE</button>
      </div>
      <div className="nav-buttons">
        <button onClick={() => scrollToPage(0)} style={{ opacity: currentPage === 0 ? 1 : 0.3, fontSize: currentPage === 0 ? 16 : 12 }}>HOME</button>
        <button onClick={() => scrollToPage(1)} style={{ opacity: currentPage === 1 ? 1 : 0.3, fontSize: currentPage === 1 ? 16 : 12 }}>SKILLS</button>
        <button onClick={() => scrollToPage(2)} style={{ opacity: currentPage === 2 ? 1 : 0.3, fontSize: currentPage === 2 ? 16 : 12 }}>PROJECTS</button>
        <button onClick={() => scrollToPage(3)} style={{ opacity: currentPage === 3 ? 1 : 0.3, fontSize: currentPage === 3 ? 16 : 12 }}>CONTACT</button>
      </div>
    </div>
  );
}

export default App;
