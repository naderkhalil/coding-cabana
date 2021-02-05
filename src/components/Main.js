import PropTypes from 'prop-types'
import React from 'react'
import nader from '../images/nader.png'
import helena from '../images/helenamerk.jpeg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Grid from '@material-ui/core/Grid'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="companies"
          className={`${this.props.article === 'companies' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Companies</h2>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              xs={12}
              sm={6}
              style={{ padding: '50px' }}
              onClick={() => {
                window.open('https://brev.dev', '_blank')
              }}
            >
              🥞 Brev
              <p>The shortest stack you'll ever need.</p>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ padding: '50px' }}
              onClick={() => {
                window.open('https://joinglimpse.com', '_blank')
              }}
            >
              🚀 Glimpse
              <p>Video calls for humans who like humans.</p>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: '50px' }}>
              👣 Stealth @ Growth
              <p>__________________</p>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ padding: '50px' }}
              onClick={() => {
                window.open('https://trove.so', '_blank')
              }}
            >
              🤫 Trove
              <p>The internet's internet.</p>
            </Grid>
          </Grid>
          {close}
        </article>

        <article
          id="people"
          className={`${this.props.article === 'people' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">People</h2>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ textAlign: 'center' }}
          >
            <Grid item xs={4}>
              <Profile
                img={nader}
                name={'Nader Khalil'}
                twitter={'https://twitter.com/naderlikeladder'}
                github={'https://github.com/naderlikeladder'}
              />
            </Grid>
            <Grid item xs={4}>
              <Profile
                img={helena}
                name={'Helena Merk'}
                twitter={'https://twitter.com/helenamerk'}
                github={'https://github.com/helenamerk'}
              />
            </Grid>
            <Grid item xs={4}>
              <Profile
                img={nader}
                name={'Nader Khalil'}
                twitter={'https://twitter.com/naderlikeladder'}
                github={'https://github.com/naderlikeladder'}
              />
            </Grid>
            <Grid item xs={4}>
              <Profile
                img={nader}
                name={'Nader Khalil'}
                twitter={'https://twitter.com/naderlikeladder'}
                github={'https://github.com/naderlikeladder'}
              />
            </Grid>
            <Grid item xs={4}>
              <Profile
                img={nader}
                name={'Nader Khalil'}
                twitter={'https://twitter.com/naderlikeladder'}
                github={'https://github.com/naderlikeladder'}
              />
            </Grid>
            <Grid item xs={4}>
              <Profile
                img={nader}
                name={'Nader Khalil'}
                twitter={'https://twitter.com/naderlikeladder'}
                github={'https://github.com/naderlikeladder'}
              />
            </Grid>
          </Grid>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p> */}
          {close}
        </article>

        <article
          id="location"
          className={`${this.props.article === 'location' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Location</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

const Profile = props => {
  return (
    <>
      <img
        src={props.img}
        alt=""
        style={{ borderRadius: '100%', height: '165px', width: '150px' }}
      />
      <p>{props.name}</p>
      <ul className="icons">
        {props.twitter && (
          <li>
            <a href={props.twitter} className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
        )}
        {props.fb && (
          <li>
            <a href={props.fb} className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
        )}
        {props.instagram && (
          <li>
            <a href={props.instagram} className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
        )}
        {props.github && (
          <li>
            <a href={props.github} className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        )}
      </ul>
    </>
  )
}
