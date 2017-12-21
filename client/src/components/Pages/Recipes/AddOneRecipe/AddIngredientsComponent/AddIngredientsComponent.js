import React from 'react';
import IngredientsInput from './IngredientsInput';

const IngredientsComponent = (props) => {

  const IngredientsInputs = props.intialIngredients.map((ingredient, ingredientIndex) => {
    return <IngredientsInput key={"ingredientInput-" + ingredientIndex} index ={ ingredientIndex } valueName={ ingredient.name }
                             valueAmount={ ingredient.amount } handleRemove={ props.handleRemove } handleChange={ props.handleChange }/>
  });

  return (
    <div className="Form-section">
      <label className="Form-label">Ingredients: </label>
        <div className="Ingredients col-6">
        { IngredientsInputs }
        </div>
      <span className="Form-greenBtn" onClick={ props.handleAdd } >Add</span>
    </div>
  )
};

export default IngredientsComponent
