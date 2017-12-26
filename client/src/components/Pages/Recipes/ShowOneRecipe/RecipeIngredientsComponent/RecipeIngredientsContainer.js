import React from 'react';
import RecipeIngredientItem from './RecipeIngredientItem';

const RecipeIngredientsContainer = ( props ) => {
  const ingredientItems = props.ingredients.map((recipeItemObject, index) => {
    return <RecipeIngredientItem key={"recipeIngredientItem-" + index} name={ recipeItemObject.name } amount={ recipeItemObject.amount } />
  });
  return (
    <div>
      <h2>Indredients: </h2>
      { ingredientItems }
    </div>
  )
};

export default RecipeIngredientsContainer;
