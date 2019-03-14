import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* Work */}
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
            <div className="timeline-content" />
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">2013 - 2019</span>
        </header>
        <div className="timeline-item is-primary">
          <div className="time-line-marker is-primary">
            <div className="timeline-content">
              <div className="box">
                <div className="content has-text-justified">
                  <h4 className="title is-5 has-text-right">
                    Front End Web Development
                  </h4>
                  Develop Front End using latest standards with HTML5/CSS3 with
                  added funtionality using JavaScript and Vue.js.
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">2013 - 2019</span>
        </header>
        <div className="timeline-item is-primary">
          <div className="time-line-marker is-primary">
            <div className="timeline-content">
              <div className="box">
                <div className="content has-text-justified">
                  <h4 className="title is-5 has-text-left">
                    Front End Web Development
                  </h4>
                  Develop Front End using latest standards with HTML5/CSS3 with
                  added funtionality using JavaScript and Vue.js.
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">2013 - 2019</span>
        </header>
        <div className="timeline-item is-primary">
          <div className="time-line-marker is-primary">
            <div className="timeline-content">
              <div className="box">
                <div className="content has-text-justified">
                  <h4 className="title is-5 has-text-right">
                    Front End Web Development
                  </h4>
                  Develop Front End using latest standards with HTML5/CSS3 with
                  added funtionality using JavaScript and Vue.js.
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">2013 - 2019</span>
        </header>
        <div className="timeline-item is-primary">
          <div className="time-line-marker is-primary">
            <div className="timeline-content">
              <div className="box">
                <div className="content has-text-justified">
                  <h4 className="title is-5 has-text-left">
                    Front End Web Development
                  </h4>
                  Develop Front End using latest standards with HTML5/CSS3 with
                  added funtionality using JavaScript and Vue.js.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ExperiencePage
