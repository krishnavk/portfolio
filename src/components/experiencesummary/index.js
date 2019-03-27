import React, { Fragment } from "react"
import Experience from '../experience'
import './experiencesummary.sass'

const ExperienceSummary = () => (
  <Fragment>
    <section className="section has-margin-top-2">
      <div className="container has-padding-bottom-2">
        <h1 className="title is-1 has-text-centered">Work experience</h1>
      </div>
      <div className="timeline container is-centered">
        <header className="timeline-header">
          <span className="tag is-medium is-primary" />
        </header>
        <div className="timeline-item is-primary">
          <div className="time-line-marker is-primary">
            <div className="timeline-content empty" />
          </div>
        </div>
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </div>
    </section>
  </Fragment>
)

export default ExperienceSummary
