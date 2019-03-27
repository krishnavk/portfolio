import React, { Fragment } from "react"
const Skill = () => (
  <Fragment>
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>JavaScript</strong>
            <strong className="is-pulled-right">95%</strong>
            <progress
              className="progress is-small is-info"
              value="90"
              max="100"
            />
          </p>
        </div>
      </div>
    </article>
  </Fragment>
)

export default Skill
