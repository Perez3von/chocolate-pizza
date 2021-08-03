import React, { Component } from 'react';
import fb from './assets/fb-icon.png'
import twitter from './assets/twit-icon.png'
import gp from './assets/gp-icon.png'
import flic from './assets/flic-icon.png'
import insta from './assets/insta-icon.png'
import pint from './assets/pint-icon.png'
import rss from './assets/rss-icon.png'
import mail from './assets/mail-icon.png'
import fork from './assets/logo.png'

class Header extends Component {
    
    render() { 
        return (         
                <header>
                    <div id="header-left">
                        <img src={fork} alt="A fork and knife" id="fork-knife-logo"/>
                        <div id="header-text">
                            <span id="header-delicious">Delicious</span>
                            <span id="header-sub-text" className="light-mono">The best food blog on the web</span>
                        </div>
                    </div>
                    <div id="header-right">
                        <ul>
                            <li><img src={fb} alt="facebook icon"/></li>
                            <li><img src={twitter} alt="twitter icon"/></li>
                            <li><img src={gp} alt="google plus icon"/></li>
                            <li><img src={flic} alt="flicker icon"/></li>
                            <li><img src={insta} alt="instagram icon"/></li>
                            <li><img src={pint} alt="pinterest icon"/></li>
                            <li><img src={rss} alt="rss icon"/></li>
                            <li><img src={mail} alt="mail icon"/></li>
                        </ul>
                    </div>
                    <div className="dial-line"></div>
                </header>
           );
    }
}
 
export default Header;