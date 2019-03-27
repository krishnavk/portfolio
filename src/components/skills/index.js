import React, { Fragment } from "react"
import Skill from "../skill"

const Skills = () => (
  <Fragment>
    <section className="section has-margin-top-2">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Skills</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card is-shadowless">
              <div className="card-content skills-content">
                <div className="content">
                  <Skill />
                  <Skill />
                  <Skill />
                  <Skill />
                  <Skill />
                  <Skill />
                  <Skill />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card is-shadowless">
              <div className="card-content skills-content">
                <div className="content">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

export default Skills
