import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-lemon-o"></span>
      {/* <span className="icon fa-diamond"></span> */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Coding Cabana</h1>
        <p>
          A group of founders building products for the next decade.{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul style={{marginRight: "12px"}}>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Companies
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            People
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Location {" "}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
