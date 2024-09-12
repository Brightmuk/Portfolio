import '../css/Footer.css';
import linkedIn from '../svg/linkedin.svg';
import github from '../svg/github.svg';
import {Link} from 'react-router-dom';

export default function Footer() {
    const currentDate = new Date();
    return (
        <div className='footer'>
            <div className='socials'>
                <a href="https://www.linkedin.com/in/brightmukonesi/" target='blank'>
                    <img src={linkedIn} alt="Linkedin"></img>
                </a>
                <a href="https://github.com/Brightmuk/" target='blank'>
                    <img src={github} alt="Linkedin"></img>
                </a>

            </div>
            <div className='rights'>
                All rights © reserved Bright Mukonesi {currentDate.getFullYear()} | <Link to="/privacy" className='link'>Privacy policy</Link> | <Link to="/contact" className='link'>Contact</Link> | <Link to="/" className='link'>Home</Link> 
            </div>

        </div>
    )
}
export function MobileFooter(){
    const currentDate = new Date();
    return (
        <div className='mobile-footer'>
            <div className='rights'>
                All rights © reserved Bright Mukonesi {currentDate.getFullYear()} | <Link to="/privacy" className='link'>Privacy policy</Link> | <Link to="/contact" className='link'>Contact</Link> | <Link to="/" className='link'>Home</Link> |
                <a href="https://github.com/Brightmuk/" target='blank'>
                    <img src={github} alt="Linkedin"></img>
                    
                </a>
                <a href="https://www.linkedin.com/in/brightmukonesi/" target='blank'>
                <img src={linkedIn} alt="Linkedin"></img>
                </a>
            </div>
      
        </div>
    )
}