import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';


const RecipeCardsContainer = ( props ) => {
  const recipeCards = props.data.map((recipeObject, i) => {
    return <RecipeCard key={ 'recipeCard-' + i } linkTo={'/recipes/' + recipeObject._id} recipeData={ recipeObject } />
  });

  return (
    <div className={`RecipeCardContainer ${props.classList}`} >
      { recipeCards }
    </div>
  )
};

export default RecipeCardsContainer;
