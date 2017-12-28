import React from 'react';
import Input from '../Input';

const IngredientsInput = (props) => {
    return (
      <div className="Ingredients-inputContainer">
        <Input onChange={props.onChange} validation={props.validation} index={props.index} value={ props.valueName } name="name" placeholder="Name" required />
        <Input onChange={props.onChange} validation={props.validation} index={props.index} value={ props.valueAmount } name="amount" placeholder="Amount" required />
        <span className= {props.index === 0 ? "hidden" : "Ingredients-removeIngredient"} onClick={() => { props.handleRemove( props.index )}}>x</span>
      </div>
    )
};

export default IngredientsInput;
