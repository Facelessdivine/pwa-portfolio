
import { Link } from 'react-router-dom'

import './index.scss'

import mePhoto from '../../assets/images/me.png'
const Home = () => {

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">

          <h1>Hola! Soy Rosa y soy Software Developer</h1>
          <br />

          <h2>Software Developer / Rosa Alejandra Legarda Bencomo</h2>
          <Link to="/contact" className="flat-button">
            CONTÁCTAME
          </Link>
        </div>
        <img src={mePhoto} alt='yo' id='rosafoto'></img>
      </div>
    </>
  )
}

export default Home
