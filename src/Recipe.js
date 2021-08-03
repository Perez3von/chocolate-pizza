import React, { Component } from 'react';
import ImageSection from './ImageSection.js';
import Instructions from './Instructions.js';
import Ingredients from './Ingredients.js';
import print from './assets/print-icon.png'
class Recipe extends Component {
    
    render() { 
        return (
            <article>
            <div id="article-head">
            <div id="main-top-left">
                <h1>Chocolate Pizza</h1>
                <span className="light-mono">Posted on 15 Dec 2013 / Desserts</span>
            </div>
            <div id="main-top-right">
                <img src= {print} alt="print-logo" id="printer-icon"/>
                <span className="light-mono">Print</span>
            </div>
            
            
        </div>
        <ImageSection />
        <Instructions />
        <Ingredients />
        </article>
          );
    }
}
 
export default Recipe;