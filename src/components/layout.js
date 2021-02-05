import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import thumbnail from "../images/thumbnail.png";

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
              {
                name: `image`,
                content: thumbnail,
              },
              {
                name: `og:image`,
                content: thumbnail,
              },
              {
                name: `twitter:image:src`,
                content: thumbnail,
              },
              {
                name: `fb:admins`,
                content: thumbnail,
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
