import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header/"
import Footer from "../footer/"
import "./layout.sass"

const Layout = ({ children }) => (
      <Fragment>
        <Header />
        <main>{children}</main>
        <Footer />
      </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
