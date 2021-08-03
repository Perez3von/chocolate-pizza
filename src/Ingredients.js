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
},
{
    name: 'pink salt',
    amount:'1/2 tsp'
},
{
    name: 'Black Mission Figs',
    amount:'1 lb'
},
{
    name: 'brown sugar',
    amount:'1/2 cup'
},
{
    name: 'water',
    amount:'2-4 tbsp'
}
    
]

const listTwo =  [

    {
    name: 'heavy cream',
    amount:'1 1/2 cups'
    
    },
    {
        name: 'granulated sugar',
        amount:'1/3 cup'
    },
    {
        name: 'egg yolks',
        amount:'2'
    },
    {
        name: 'juiced',
        amount:'1 lemon'
    },
    {
        name: 'butter',
        amount:'1 tbsp'
    },
    {
        name: 'honey roasted pecans, roughly chopped',
        amount:'1 cup'
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
                    
                </ul>
                <ul className="ingredient-list">
                            {listTwo.map(item =>{

                                return <IngredientItem name={item.name} amount={item.amount}/>
                                }) }
                                                
                </ul>
            </div>
       
        );
    }
}
 
export default Ingredients;