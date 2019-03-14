import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Hero = ({ siteTitle }) => (
  <div className="hero is-info is-medium">
    <div className="hero-body">
      <div className="container has-text-centered">
        <figure className="image container is-128x128">
          <img
            className="is-rounded is-center image-rounded-border-white"
            align="middle"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
        <h1 className="title is-1">Krishna Kishore</h1>
        <h2 className="subtitle is-3">
          Full stack developer, Architect and Mentor
        </h2>
      </div>
    </div>
  </div>
)

export default Hero
