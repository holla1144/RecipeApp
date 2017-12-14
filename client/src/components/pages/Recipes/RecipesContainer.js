import React from 'react';
import MainContainer from '../../MainContent/MainContainer';

class RecipesPage extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MainContainer pageName="Recipes" />
    )
  }
}

export default RecipesPage;
