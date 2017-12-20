import React from 'react';
import MainContainer from '../../../SharedComponents/MainContent/MainContainer';
import AddOneRecipeForm from './AddOneRecipeForm';

class AddOneRecipe extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer pageName="Add a new dish">
        <AddOneRecipeForm modalOpen={ this.props.modalOpen } modalClose={ this.props.modalClose }/>
      </MainContainer>
    )
  }
}

export default AddOneRecipe;
