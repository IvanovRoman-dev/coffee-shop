import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

import cart from '../images/add-to-basket.svg'

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">coffeeshop</Link>
          <nav className="navbar__nav">
            <ul className={`navbar__items ${menuOpen ? 'active' : "" }`}>
              <li className="navbar__item">
                <Link to="/page-2" className="navbar__link">наши товары</Link>
              </li>
              <li className="navbar__item">
                <Link to="" className="navbar__link">рецепты</Link>
              </li>
              <li className="navbar__item">
                <Link to="" className="navbar__link">мир кофе</Link>
              </li>
              <li className="navbar__item">
                <Link to="" className="navbar__link">акции</Link>
              </li>
            </ul>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)}>X</button>
          <div className="navbar__cart">
              <span className="navbar__cart-text">корзина</span>
              <img 
                src={cart} 
                alt="cart"
                className="navbar__cart-ico"
                />
          </div>
        </div>
      </div>
    </header>
  )
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
