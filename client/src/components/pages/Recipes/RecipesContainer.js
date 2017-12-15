import React from 'react';
import MainContainer from '../../MainContent/MainContainer';
import AddRecipeLinkContainer from './AddRecipeLinkComponent/AddRecipeLinkContainer';

class RecipesPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer pageName="Recipes">
        <AddRecipeLinkContainer />
      </MainContainer>
    )
  }
}

export default RecipesPage;
