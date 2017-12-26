import React from 'react';
import { toTitleCase } from '../../../../../services/helpers';

const RecipeTitleComponent = ( props ) => {
  const newTitle = toTitleCase( props.title );
  return (
    <h1> { newTitle } </h1>
  )
};

export default RecipeTitleComponent;
