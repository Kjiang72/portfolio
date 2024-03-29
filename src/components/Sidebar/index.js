import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/profile.jpg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser, faSuitcase} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to='/'>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt='Kevin Jiang'/>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        {/* <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink> */}
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href ='https://www.linkedin.com/in/kevin-jiang-5956231ab'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Kjiang72" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar