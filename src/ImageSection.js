import React, { Component } from 'react';
import pizza from './assets/choco-pizza.png'
class ImageSection extends Component {
    
    render() { 
        return (  
        <img src={pizza} alt="chocolate pizza"/>);
    }
}
 
export default ImageSection;