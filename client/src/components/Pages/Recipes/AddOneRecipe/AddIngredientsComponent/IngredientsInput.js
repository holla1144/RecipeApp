import React from 'react';

const IngredientsInput = (props) => {
    return (
      <div className="add-ingredients_ingredient-container">
        <input className="add-ingredients_ingredient-container_input" placeholder="Name" type="text" name="name" index={ props.index } value={ props.valueName } onChange={ props.handleChange }/>
        <input className="add-ingredients_ingredient-container_input" placeholder="Amount" type="text" name="amount" index={ props.index } value={ props.valueAmount } onChange={ props.handleChange }/>
        <span className= {props.index === 0 ? "hidden" : "add-ingredients_ingredient-container_remove-button"} onClick={() => { props.handleRemove( props.index )}}>x</span>
      </div>
    )
};

export default IngredientsInput;
