import React, { Fragment } from "react"
import PropTypes from "prop-types"

import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
import "@fortawesome/fontawesome-free/scss/solid.scss"
import "@fortawesome/fontawesome-free/scss/brands.scss"
import "@fortawesome/fontawesome-free/scss/regular.scss"

import Header from "./header"
import Footer from "./footer"
import "../common.sass"

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
