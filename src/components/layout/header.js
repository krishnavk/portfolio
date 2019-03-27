import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import skills from "../../pages/skills"
import experience from "../../pages/experience"

const Header = ({ siteTitle }) => {
  const [showBurger, setShowBurger] = useState(false)

  return (
    <nav className="navbar is-info is-fixed-top is-fullheight-with-navbar">
      <div className="navbar-brand">
        <div
          className="navbar-burger"
          onClick={() => setShowBurger(!showBurger)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={showBurger ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            <span className="icon">
              <i className="fas fa-home" />
            </span>
            <span>Home</span>
          </Link>
        </div>

        <div className="navbar-end">
          <a
            href="https://www.linkedin.com/in/krishnavk"
            target="_blank"
            className="navbar-item"
          >
            <span className="icon">
              <i className="fab fa-linkedin" />
            </span>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/krishnavk"
            target="_blank"
            className="navbar-item"
          >
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            <span>Github Repo</span>
          </a>
          <a
            href="https://drive.google.com/open?id=1ggk0XehxShNT9bbOjOg6-_mVephLZU-L"
            target="_blank"
            className="navbar-item"
          >
            <span className="icon">
              <i className="fas fa-file-pdf" />
            </span>
            <span>Resume</span>
          </a>
          <Link className="navbar-item" to="/skills">
            <span className="icon">
              <i className="fas fa-toolbox" />
            </span>
            <span>Skills</span>
          </Link>
          <Link className="navbar-item" to="/experience">
            <span className="icon">
              <i className="fas fa-laptop-code" />
            </span>
            <span>Work experience</span>
          </Link>
          <a className="navbar-item">
            <span className="icon">
              <i className="fas fa-address-card" />
            </span>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
