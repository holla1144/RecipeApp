import React from 'react';

const RecipeIngredientItem = ( props ) => {
  return (
    <div>
      <span>Name: </span>
      <span> { props.name } </span>
      <span>Amount: </span>
      <span> { props.amount } </span>
    </div>
  )
};

export default RecipeIngredientItem;
