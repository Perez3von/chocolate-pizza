import React, { Component } from 'react';
import fork from './assets/logo.png'
class Footer extends Component {
    
    render() { 
        return ( 

        <footer>
        <div id="fork-knife-line">
            <hr />
            <img src={fork} alt="fork-knife-logo" id="fork-knife-logo-footer" />
        </div>
        <div id="delicious">
            <span>Delicious &#169 2013 &#8226 All Rights Reserved.</span>
            <span>Proudly published with Ghost.</span>
        </div>
    </footer>
         );
    }
}
 
export default Footer;