import React from 'react';
import IngredientsInput from './IngredientsInput';

const AddIngredientsComponent = (props) => {

  const IngredientsInputs = props.intialIngredients.map((ingredient, ingredientIndex) => {
    return <IngredientsInput key={"ingredientInput-" + ingredientIndex} index ={ ingredientIndex } valueName={ ingredient.name }
                             valueAmount={ ingredient.amount } handleRemove={ props.handleRemove } handleChange={ props.handleChange }/>
  });

  return (
    <div className="add-recipe-form_section add-ingredients">
      <label>Add Ingredients</label>
      { IngredientsInputs }
      <span className="add-ingredients_add-one add-item-button" onClick={ props.handleAdd } >Add</span>
    </div>
  )
};

export default AddIngredientsComponent
