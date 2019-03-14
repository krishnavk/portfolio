import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Introduction = ({ siteTitle }) => (
  <p className="container box no-border subtitle is-5 has-text-centered">
    Hi, I'm Krishna, a full-stack developer with 12 years of experience in
    building Desktop and web applications on various platforms / technologies
    like JavaScript, Java, and Python. From last 3 years focusing on enchaning /
    moderinising the digitial user experience at Unisys using reactjs. Also,
    organise meetups on trending technologies and mentoring the startups. If you
    would like to explore something together,
    <br />
    <br />
    get in touch @{" "}
    <span className="icon">
      <i className="fas fa-envelope" />
    </span>
    <span>
      <a href="mailto: krishnavkishore@gmail.com">krishnavkishore@gmail.com</a>
    </span>{" "}
    or{" "}
    <span className="icon">
      <i className="fas fa-mobile" />
    </span>
    <span>
      <a href="tel:+919480184901">+91-9480184901</a>
    </span>
  </p>
)

export default Introduction
