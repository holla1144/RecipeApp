import React from 'react';

const RecipeDirectionItem = ( props ) => {
  return (
    <div>
      <h6> Step { props.index + 1}:</h6>
      <p> { props.text }</p>
    </div>
  )
};

export default RecipeDirectionItem;
