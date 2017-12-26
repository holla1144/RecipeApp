import React from 'react';
import RecipeCategoryItem from './RecipeCategoryItem';

const RecipeCategoryContainer = ( props ) => {
  const categoryItems = props.category.map((categoryText, i) => {
    return <RecipeCategoryItem key={ 'categoryItem-' + i} text={ categoryText }/>
  });
  return (
    <div>
      { categoryItems }
    </div>
  )
};

export default RecipeCategoryContainer;
