import React from 'react';
import MainContainer from '../../../SharedComponents/MainContent/MainContainer';
import AddOneRecipeForm from './AddOneRecipeForm';

const AddOneRecipe = ( props ) => {
  return (
    <MainContainer pageName="Add a new dish">
      <AddOneRecipeForm userData={ props.userData } modalOpen={ props.modalOpen } modalClose={ props.modalClose }/>
    </MainContainer>
  )
};

export default AddOneRecipe;
