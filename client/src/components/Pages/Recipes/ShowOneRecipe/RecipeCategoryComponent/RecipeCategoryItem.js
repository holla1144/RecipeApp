import React from 'react';

const RecipeCategoryItem = ( props ) => {
  const CategoryText = props.text.charAt(0).toUpperCase() + props.text.substr(1);
  return (
    <p> { CategoryText } </p>
  )
};

export default RecipeCategoryItem;
