import React from 'react';
import RecipeDirectionItem from './RecipeDirectionItem';

const RecipeDirectionsContainer = ( props ) => {

  const directionItems = props.directions.map((directionsObject, index) => {
    return <RecipeDirectionItem key={ "recipeDirectionItem-" + index } index={ index } text={directionsObject} />
  });
  return (
    <div>
      <h2>Directions: </h2>
      { directionItems }
    </div>
  )
};

export default RecipeDirectionsContainer;
