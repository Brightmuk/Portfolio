import './App.css';
import { currentDigitalTime } from './DigitTimeAlgorithim';
import Bottom from './svg/bottom';
import BottomLeft from './svg/bottom-left';
import BottomRight from './svg/bottom-right';
import Center from './svg/center';
import Top from './svg/top';
import TopLeft from './svg/top-left';
import TopRight from './svg/top-right';

function App() {
  var time = currentDigitalTime();

  return (
    <div className="App">
     <div className='clock'>
      <div id="first" className='digit'>
        <Top on={time.first['top']}/>
        <TopLeft on={time.first['top-left']} className='bit'/>
        <TopRight on={time.first['top-right']} className='bit'/>
        <Center on={time.first['center']} className='bit'/>
        <BottomLeft on={time.first['bottom-left']} className='bit'/>
        <BottomRight on={time.first['bottom-right']} className='bit'/>
        <Bottom on={time.first['bottom']} className='bit'/>
      </div>
      <div id="second" className='digit'>
        <Top on={time.first['top']}/>
        <TopLeft on={time.second['top-left']} className='bit'/>
        <TopRight on={time.second['top-right']} className='bit'/>
        <Center on={time.second['center']} className='bit'/>
        <BottomLeft on={time.second['bottom-left']} className='bit'/>
        <BottomRight on={time.second['bottom-right']} className='bit'/>
        <Bottom on={time.second['bottom']} className='bit'/>
      </div>
      <div className='colon'>
        <div className='box'></div>
        <div className='box'></div>
      </div>
      <div id="third" className='digit'>
        <Top on={time.third['top']}/>
        <TopLeft on={time.third['top-left']} className='bit'/>
        <TopRight on={time.third['top-right']} className='bit'/>
        <Center on={time.third['center']} className='bit'/>
        <BottomLeft on={time.third['bottom-left']} className='bit'/>
        <BottomRight on={time.third['bottom-right']} className='bit'/>
        <Bottom on={time.third['bottom']} className='bit'/>
      </div>
      <div id="fourth" className='digit'>
        <Top on={time.fourth['top']}/>
        <TopLeft on={time.fourth['top-left']} className='bit'/>
        <TopRight on={time.fourth['top-right']} className='bit'/>
        <Center on={time.fourth['center']} className='bit'/>
        <BottomLeft on={time.fourth['bottom-left']} className='bit'/>
        <BottomRight on={time.fourth['bottom-right']} className='bit'/>
        <Bottom on={time.fourth['bottom']} className='bit'/>
      </div>
     </div>
    </div>
  );
}

export default App;
