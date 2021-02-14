import React from 'react';
import { Link } from 'gatsby'

import instaIco from '../images/social/insta.svg'
import facebookIco from '../images/social/facebook.svg'
import twitterIco from '../images/social/twitter.svg'
import ivLogo from '../images/iv-logo-white.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="social">
                        <Link to="" className="social__link social__link--insta">
                            <img src={instaIco} alt="instagram"/>
                        </Link>
                        <Link to="" className="social__link social__link--facebook">
                            <img src={facebookIco} alt="facebook"/>
                        </Link>
                        <Link to="" className="social__link social__link--twitter">
                            <img src={twitterIco} alt="twitter"/>
                        </Link>
                    </div>
                    <div className="footer__copyright">
                        <span className="footer__copyright-text footer__copyright-text--first">designed by</span>
                        <img 
                            src={ivLogo} 
                            alt="iv-logo"
                            className="footer__copyright-img" />
                        <span className="footer__copyright-text footer__copyright-text--second">design</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
