import React from 'react';
import './App.css';
import { Component } from 'react';
import Header from './Header.js';
import Recipe from './Recipe.js';
import AboutAuthor from './AboutAuthor.js';
import Footer from './Footer.js';
import './styles/home.css'
import './styles/reset.css'
import './styles/style.css'
class App extends Component{

render() {
return(
    <>
    <Header />
    <div class="dial-line"></div>
    <main>
    <Recipe />
    <AboutAuthor />
    </main>
    <div class="dial-line"></div>
    <Footer />
    </>

)

}

}

export default App;