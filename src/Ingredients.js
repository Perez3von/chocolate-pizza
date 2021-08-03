import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';

const ingredients = [

{
name: 'milk',
amount:'1 1/2 cups'

},
{
    name: 'mascarpone',
    amount:'1/2 cup'
}
    
]

class Ingredients extends Component {
   
    render() { 
        return ( 
       
        <div id="ingredients">
                <ul className="ingredient-list">
                    {ingredients.map(item =>{

                        return <IngredientItem name={item.name} amount={item.amount}/>
                    }) }
                    
                    <li><input type="checkbox" /><label>1/2 cup mascarpone</label></li>
                    <li><input type="checkbox" /><label>1/2 tsp pink salt</label></li>
                    <li><input type="checkbox" /><label>1 lb Black Mission Figs</label></li>
                    <li><input type="checkbox" /><label>1/2 cup brown sugar</label></li>
                    <li><input type="checkbox" /><label>2-4 tbsp water</label></li>
                </ul>
                <ul className="ingredient-list">
                    <li><input type="checkbox" /><label>1 1/2 cups heavy cream</label></li>
                    <li><input type="checkbox" /><label>1/3 cup granulated sugar</label></li>
                    <li><input type="checkbox" /><label>2 egg yolks</label></li>
                    <li><input type="checkbox" /><label>1 lemon, juiced</label></li>
                    <li><input type="checkbox" /><label>2 tbsp butter</label></li>
                    <li><input type="checkbox" /><label>1 cup honey roasted pecans, roughly chopped</label></li>
                </ul>
            </div>
       
        );
    }
}
 
export default Ingredients;