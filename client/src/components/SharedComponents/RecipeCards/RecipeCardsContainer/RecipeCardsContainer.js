import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import {
  Link
} from 'react-router-dom'

const RecipeCardsContainer = ( props ) => {
  const recipeCards = props.data.map((recipeObject, i) => {
    return <Link key={ 'recipeCardLink-' + i } to={'/recipes/' + recipeObject._id}><RecipeCard key={ 'recipeCard-' + i } recipeData={ recipeObject } /></Link>
  });

  return (
    <div className={ "RecipeCardContainer" + " " + props.classList }>
      { recipeCards }
    </div>
  )
};

export default RecipeCardsContainer;
