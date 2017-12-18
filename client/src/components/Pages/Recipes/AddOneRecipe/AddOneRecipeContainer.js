import React from 'react';
import MainContainer from '../../../MainContent/MainContainer';
import AddOneRecipeForm from './AddOneRecipeForm';

class AddOneRecipe extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer pageName="Add a new dish">
        <AddOneRecipeForm/>
      </MainContainer>
    )
  }
}

export default AddOneRecipe;
