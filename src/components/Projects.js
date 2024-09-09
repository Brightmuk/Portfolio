import '../css/Projects.css';
import linkIcon from '../svg/link.svg';

const projects = [
    { 'name': 'SakaHapa','date':'June 2020 - Aug 2024',  'description': 'SakaHapa is a sourcing App where a buyer can specify the kind of product, he/she is looking to purchase and any seller within a 40km radius that has the same item or something similar to it can respond with a picture and price', 'img': '/images/sakahapa.png', 'technologies': ['Flutter', 'Dart', 'Firestore', 'CloudSQL', 'NodeJs'],  'link': 'https://sakahapa.com' },
    { 'name': 'MStreamer','date':'July 2024', 'description': 'An online music streaming site like spotify. Features include playlists, playing songs from the server and many more', 'img': '/images/mstreamer.png', 'technologies': ['RectJs', 'Javascript', 'HTML/CSS', 'NodeJS', 'API'],  'link': 'https://mstreamer.onrender.com' },
    { 'name': 'KCA Timetables','date':'March 2022 - Sept 2023', 'description': 'KCA Timetables allows you to scan KCA University excel sheet timetables into a presentable view of the mobile app.Currently, the app is tailored for KCA University timetables only.The are also other features that bring a better experience for students such as', 'img': '/images/kcatt.png', 'technologies': ['Flutter', 'Dart'],  'link': 'https://play.google.com/store/apps/details?id=com.brightdesigns.kcatimetables' },
    { 'name': 'WecanRush','date':'May 2020 - 2023', 'img': '/images/rush.png', 'description': 'Package delivery made digitally easier! Bid farewell to all kinds of limits from package deliverers as you can use a cool new courier delivery and tracking app – WecanRush! Running an offline or online business and need to deliver packages to your customers?', 'technologies': ['Flutter', 'Dart', 'API'],  'link': '' },
]

export default function Projects() {
    return (
        <div className="projects">
            <h3>Highlighted Projects</h3>
            <div className="projects-content">

                {projects.map((project, index) => (
                    <div className='project' key={index}>
                        <a href={project.link} target='blank'>
                        <img className='project-link' src={linkIcon} alt="Linkedin"></img>
                        </a>
                        <div className='project-img'>
                        <img  src={process.env.PUBLIC_URL + project.img} alt="img"></img>
                        </div>
                        
                        <div className="project-content">
                            <h5 className="period">{project.date}</h5>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>

                            <div className="technologies">
                                {project.technologies.map((tech, i)=>(
                                    <div key={i}>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}