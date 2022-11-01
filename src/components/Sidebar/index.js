import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/rose256.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faLaptop
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="rgb(254, 178, 237)"
          size="3x"
          className='close-icon' />
      </nav>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="rgb(254, 178, 237)"
        size="3x"
        className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
