import PropTypes from 'prop-types'
import React from 'react'
import nader from '../images/nader.jpg'
import cayucos from '../images/Sunset.png'
import sfsunset from '../images/sfsunset.jpeg'
import helena from '../images/helenamerk.jpeg'
import alec from '../images/alec.jpg'
import ali from '../images/ali.jpg'
import kate from '../images/kate.jpg'
import evan from '../images/evan.jpeg'
import izu from '../images/izu.jpeg'
import Grid from '@material-ui/core/Grid'

function Main(props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [msg, setMsg] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)

  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  const submitData = async () => {
    setSubmitting(true)
    const response = await fetch('https://4wzjxgkv.brev.dev/api/websiteForm', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        message: msg,
      }),
    })
    console.log(response)
    if (response.status === 200) {
      setOpen(true)
    }
    setSubmitting(false)
  }

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="companies"
        className={`${props.article === 'companies' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
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
            <span role="img" aria-label="brev">
              🤙
            </span>{' '}
            Brev
            <p>AI Dev tools</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ padding: '50px' }}
            onClick={() => {
              window.open('https://techcrunch.com/2022/02/10/remote-work-and-events-startup-twine-acquires-yc-backed-glimpse-to-launch-on-zoom/', '_blank')
            }}
          >
            <span role="img" aria-label="glimpse">
              🌀
            </span>{' '}
            Spirals
            <p>Climate Tech</p>
          </Grid>
          <Grid item xs={12} sm={6} style={{ padding: '50px' }}>
            <span role="img" aria-label="stealth">
              🐳
            </span>{' '}
            All G
            <p>Climate Tech</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ padding: '50px' }}
            onClick={() => {
              window.open('https://strangemood.org', '_blank')
            }}
          >
            <span role="img" aria-label="trove">
              🤖🦾
            </span>{' '}
            Fable AI
            <p>Generative AI</p>
          </Grid>
        </Grid>
        {close}
      </article>

      <article
        id="people"
        className={`${props.article === 'people' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
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
              github={'https://github.com/brevdev'}
            />
          </Grid>
          <Grid item xs={4}>
            <Profile
              img={alec}
              name={'Alec Fong'}
              twitter={'https://twitter.com/the__fong'}
              github={'https://github.com/theFong'}
            />
          </Grid>
          <Grid item xs={4}>
            <Profile
              img={izu}
              name={'Izu Elechi'}
              twitter={'https://twitter.com/izuchukwuuu'}
              github={'https://github.com/izuchukwu'}
            />
          </Grid>
          <Grid item xs={4}>
            <Profile
              img={kate}
              name={'Kate Chen'}
              twitter={'https://twitter.com/katezchenn'}
              github={'https://github.com/katzchen0713'}
            />
          </Grid>
        </Grid>
        {close}
      </article>

      <article
        id="location"
        className={`${props.article === 'location' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
          }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Location</h2>
        <span className="image main">
          <img src={sfsunset} alt="" />
          {/* <img src={cayucos} alt="" /> */}
        </span>
        <b>San Francisco, CA</b>
        <p>
          We spent the pandemic Airbnb-hopping beach towns along California's central coast, but we're happy to be back in San Francisco. It's truly a magical city.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
          }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>

        {/* <ul>
          <li>Helena Merk: helena [at] codingcabana [dot] com</li>
          <li>Nader Khalil: nader [at] codingcabana [dot] com</li>
          
        </ul> */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ textAlign: 'center' }}
        >
          <Grid item xs={4}>
            <ContactProfile
              img={helena}
              name={'Helena Merk'}
              email={'helena@codingcabana.com'}
            />
          </Grid>
          <Grid item xs={4}>
            <ContactProfile
              img={nader}
              name={'Nader Khalil'}
              email={'nader@codingcabana.com'}
            />
          </Grid>
          <Grid item xs={4}>
            <Profile
              img={alec}
              name={'Alec Fong'}
              twitter={'https://twitter.com/the__fong'}
            />
          </Grid>
          <Grid item xs={4}>
            <Profile
              img={ali}
              name={'Ali Ahmed'}
              twitter={'https://twitter.com/ali_wetrill'}
            />
          </Grid>
          <Grid item xs={4}>
            <Profile
              img={evan}
              name={'Evan Conrad'}
              twitter={'https://twitter.com/evanjconrad'}
            />
          </Grid>
          <Grid item xs={4}>
            <Profile
              img={kate}
              name={'Kate Chen'}
              twitter={'https://twitter.com/katezchenn'}
            />
          </Grid>
        </Grid>
        {/* {open && <h3 style={{ color: 'green' }}>Your message was sent!</h3>}

        <h2 className="major">Contact</h2>
        <form onsubmit="return capture();">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
          </div>
        </form>
        <ul className="actions">
          <li>
            <button
              onClick={submitData}
              style={submitting ? { boxShadow: 'none' } : {}}
            >
              <p className={submitting ? 'ellipsis' : ''}>
                {submitting ? '           ' : 'Send Message'}
              </p>
            </button>
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
        {close} */}
      </article>
    </div>
  )
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

const Profile = (props) => {
  return (
    <>
      <img
        src={props.img}
        alt=""
        style={{
          borderRadius: '100%',
          height: '165px',
          width: '150px',
          objectFit: 'cover',
        }}
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
const ContactProfile = (props) => {
  return (
    <>
      <img
        src={props.img}
        alt=""
        style={{
          borderRadius: '100%',
          height: '165px',
          width: '150px',
          objectFit: 'cover',
        }}
      />
      <p>{props.name}</p>
      <ul className="icons">
        <li>
          {props.email}
        </li>

      </ul>
    </>
  )
}
