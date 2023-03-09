import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import peppamint from '../../assets/images/peppamint.jfif'
import candylane from '../../assets/images/candylane.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={peppamint} alt='logo' />
            <img className='sub-logo' src={candylane} alt='candylane' />

        </Link>
        <nav>
            <NavLink exact to='/' activeclassname='active'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact to='/about' className="about-link" activeclassname='active'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact to='/portfolio' className="portfolio-link" activeclassname='active'>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact to='/contact' className="contact-link" activeclassname='active'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jack-schliewe/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/MrJappy'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
            {/* can add more */}
        </ul>
    </div>
)

export default Sidebar

