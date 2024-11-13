import { useEffect, useState } from 'react';
import '../css/Clock.css';
import { currentDigitalTime, defaultTime } from '../DigitTimeAlgorithim';
import Bottom from '../svg/bottom';
import BottomLeft from '../svg/bottom-left';
import BottomRight from '../svg/bottom-right';
import Center from '../svg/center';
import Top from '../svg/top';
import TopLeft from '../svg/top-left';
import TopRight from '../svg/top-right';

export default function Clock() {
    const [time, SetTime] = useState(defaultTime());
    const date = new Date()
    useEffect(() => {

        const interval = setInterval(() => {

            var digitalValue = currentDigitalTime();
            SetTime(digitalValue)

        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='clock'>
           
            <div id="first" className='digit'>
                <Top on={time.first.top} />
                <TopLeft on={time.first.topLeft} className='bit' />
                <TopRight on={time.first.topRight} className='bit' />
                <Center on={time.first.center} className='bit' />
                <BottomLeft on={time.first.bottomLeft} className='bit' />
                <BottomRight on={time.first.bottomRight} className='bit' />
                <Bottom on={time.first.bottom} className='bit' />
            </div>
            <div id="second" className='digit'>
                <Top on={time.second.top} />
                <TopLeft on={time.second.topLeft} className='bit' />
                <TopRight on={time.second.topRight} className='bit' />
                <Center on={time.second.center} className='bit' />
                <BottomLeft on={time.second.bottomLeft} className='bit' />
                <BottomRight on={time.second.bottomRight} className='bit' />
                <Bottom on={time.second.bottom} className='bit' />
            </div>
            <div className='colon'>
                <div className='box'></div>
                <div className='box'></div>
            </div>
            <div id="third" className='digit'>
                <Top on={time.third.top} />
                <TopLeft on={time.third.topLeft} className='bit' />
                <TopRight on={time.third.topRight} className='bit' />
                <Center on={time.third.center} className='bit' />
                <BottomLeft on={time.third.bottomLeft} className='bit' />
                <BottomRight on={time.third.bottomRight} className='bit' />
                <Bottom on={time.third.bottom} className='bit' />
            </div>
            <div id="fourth" className='digit'>
                <Top on={time.fourth.top} />
                <TopLeft on={time.fourth.topLeft} className='bit' />
                <TopRight on={time.fourth.topRight} className='bit' />
                <Center on={time.fourth.center} className='bit' />
                <BottomLeft on={time.fourth.bottomLeft} className='bit' />
                <BottomRight on={time.fourth.bottomRight} className='bit' />
                <Bottom on={time.fourth.bottom} className='bit' />
            </div>
            <div className='colon'>
                <div className='box'></div>
                <div className='box'></div>
            </div>
            <div id="fifth" className='digit'>
                <Top on={time.fifth.top} />
                <TopLeft on={time.fifth.topLeft} className='bit' />
                <TopRight on={time.fifth.topRight} className='bit' />
                <Center on={time.fifth.center} className='bit' />
                <BottomLeft on={time.fifth.bottomLeft} className='bit' />
                <BottomRight on={time.fifth.bottomRight} className='bit' />
                <Bottom on={time.fifth.bottom} className='bit' />
            </div>
            <div id="sixth" className='digit'>
                <Top on={time.sixth.top} />
                <TopLeft on={time.sixth.topLeft} className='bit' />
                <TopRight on={time.sixth.topRight} className='bit' />
                <Center on={time.sixth.center} className='bit' />
                <BottomLeft on={time.sixth.bottomLeft} className='bit' />
                <BottomRight on={time.sixth.bottomRight} className='bit' />
                <Bottom on={time.sixth.bottom} className='bit' />
            </div>
        </div>
    )
}