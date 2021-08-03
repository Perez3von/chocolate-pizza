import React, { Component } from 'react';
import selfie from './assets/van-pic.png'
class AboutAuthor extends Component {
    
    render() { 
        return (

            <div id="author-bio">
            <img src={selfie} alt="vanessa selfie"/>
            <div id="span-container">
                <h3>Vanessa Stevenson</h3>
                <span class="body-text">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
            </div>
            <button id="share-recipe">SHARE RECIPE</button>
            </div>

          );
    }
}
 
export default AboutAuthor;