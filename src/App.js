import './App.css';
import Bottom from './svg/bottom';
import BottomLeft from './svg/bottom-left';
import BottomRight from './svg/bottom-right';
import Center from './svg/center';
import Top from './svg/top';
import TopLeft from './svg/top-left';
import TopRight from './svg/top-right';

function App() {
  return (
    <div className="App">
     <div className='clock'>
      <div id="first" className='digit'>
        <Top on={true}/>
        <TopLeft on={true} className='bit'/>
        <TopRight on={true} className='bit'/>
        <Center on={true} className='bit'/>
        <BottomLeft on={true} className='bit'/>
        <BottomRight on={true} className='bit'/>
        <Bottom on={true} className='bit'/>
      </div>
      <div id="first" className='digit'>
        <Top on={true}/>
        <TopLeft on={true} className='bit'/>
        <TopRight on={true} className='bit'/>
        <Center on={true} className='bit'/>
        <BottomLeft on={true} className='bit'/>
        <BottomRight on={true} className='bit'/>
        <Bottom on={true} className='bit'/>
      </div>
      <div className='colon'>
        <div className='box'></div>
        <div className='box'></div>
      </div>
      <div id="first" className='digit'>
        <Top on={true}/>
        <TopLeft on={true} className='bit'/>
        <TopRight on={true} className='bit'/>
        <Center on={true} className='bit'/>
        <BottomLeft on={true} className='bit'/>
        <BottomRight on={true} className='bit'/>
        <Bottom on={true} className='bit'/>
      </div>
      <div id="first" className='digit'>
        <Top on={true}/>
        <TopLeft on={true} className='bit'/>
        <TopRight on={true} className='bit'/>
        <Center on={true} className='bit'/>
        <BottomLeft on={true} className='bit'/>
        <BottomRight on={true} className='bit'/>
        <Bottom on={true} className='bit'/>
      </div>
     </div>
    </div>
  );
}

export default App;
