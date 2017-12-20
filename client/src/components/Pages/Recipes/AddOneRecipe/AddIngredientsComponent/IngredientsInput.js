import React from 'react';
import CustomInput from '../../../../SharedComponents/CustomInputs/CustomInputField';

const IngredientsInput = (props) => {
    return (
      <div className="Ingredients-inputContainer">
        <CustomInput elementType='textInput'
                     classList={["Ingredients-input"]}
                     placeholder="Name"
                     type="text"
                     name="name"
                     index={ props.index }
                     value={ props.valueName }
                     handleChange={ props.handleChange }
                     validationType="isNotBlank"
                     containerClass="CustomInput--bottomPadding"
        />

        <CustomInput elementType='textInput'
                     classList={["Ingredients-input"]}
                     placeholder="Amount"
                     type="text"
                     name="amount"
                     index={ props.index }
                     value={ props.valueAmount }
                     handleChange={ props.handleChange }
                     validationType="isNotBlank"
                     containerClass="CustomInput--bottomPadding"
        />
        <span className= {props.index === 0 ? "hidden" : "Ingredients-removeIngredient"} onClick={() => { props.handleRemove( props.index )}}>x</span>
      </div>
    )
};

export default IngredientsInput;
