import { useEffect, useRef, useState } from 'react';
import '../css/Past.css';
import Projects from './Projects';

const PastContent = () => {
    const [selectedDate, setSelectedDate] = useState(0);
    const pastContentRef = useRef([]);
    const scrollDateRef = useRef(null);
    const containerRef = useRef(null);

    const customScrollTo = (target) => {
        const container = containerRef.current;
        const start = container.scrollTop;
        const end = target.offsetTop;
        const distance = end - start;
        const duration = 500;
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const percentage = easeInOutQuad(Math.min(progress / duration, 1));
            container.scrollTop = start + distance * percentage;
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    const scrollToDate = (index) => {
        customScrollTo(pastContentRef.current[index]);
        setSelectedDate(index);
        scrollDateRef.current.children[index].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
        });
    };
    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        const index = pastContentRef.current.indexOf(entry.target);
                        setSelectedDate(index);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.6,
            }
        );

        pastContentRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {

            observer.disconnect();
        };
    }, []);

    return (
        <div className="past">
            <div className="nav">
                <div className="nav-content" ref={scrollDateRef}>
                    {['Projects', 2018, 2019, 2020,].map((year, index) => (
                        <div className='nav-section' key={index}>
                            <div className={selectedDate === index ? "vertical-line top-vertical-line-selected" : "vertical-line "}></div>
                            <div
                                onClick={() => scrollToDate(index)}
                                className={`date ${selectedDate === index ? 'selected' : ''}`}>
                                {year}
                            </div>
                            <div className={selectedDate === index ? "vertical-line bottom-vertical-line-selected" : "vertical-line "}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='past-content' ref={containerRef}>
                {['Projects', 'Something from 2018', 'Something from 2019', 'Something from 2020'].map(
                    (content, index) => (
                        content === 'Projects' ?
                            <div className='past-section'
                                ref={(el) => (pastContentRef.current[index] = el)}
                                key={index}>
                                <Projects />
                            </div>
                            :
                            <div className='past-section'
                                ref={(el) => (pastContentRef.current[index] = el)}
                                key={index} >
                                <p>{content}</p>
                            </div>

                    )
                )}
            </div>
        </div>
    );
};

export default PastContent;