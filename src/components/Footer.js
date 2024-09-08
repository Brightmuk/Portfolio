import '../css/Footer.css';
import linkedIn from '../svg/linkedin.svg';
import github from '../svg/github.svg';


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
                All rights © reserved Bright Mukonesi {currentDate.getFullYear()}
            </div>

        </div>
    )
}