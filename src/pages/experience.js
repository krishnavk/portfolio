import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceSummary from "../components/experiencesummary"

const ExperiencePage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <ExperienceSummary />
  </Layout>
)

export default ExperiencePage
