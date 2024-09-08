import '../css/Footer.css';
import linkedIn from '../svg/linkedin.svg';
import github from '../svg/github.svg';


export default function Footer(){
    const currentDate = new Date();
    return(
        <div className='footer'>
            <div className='socials'>
            <img src={linkedIn} alt="Linkedin"></img>
            <img src={github} alt="Linkedin"></img>
            </div>
            <div className='rights'>
                All rights © reserved Bright Mukonesi {currentDate.getFullYear()}
            </div>

        </div>
    )
}