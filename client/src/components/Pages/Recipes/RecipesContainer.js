import React from 'react';
import RecipeCardsContainer from '../../SharedComponents/RecipeCards/RecipeCardsContainer/RecipeCardsContainer';
import { getManyRecipes } from '../../../services/services';

class RecipesPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      recipeData: []
    }
  }

  componentDidMount(){
   getManyRecipes('all').then((response) => {
     if (response.status !== 200) {
       throw new Error('Sorry, something went wrong.');
     }

     return response.json();

    }).then((jsonResponse) => {
      const responseData = jsonResponse.data.data;
      this.setState({
        recipeData: responseData
      })

   }).catch((err) => {
      this.props.modalOpen('negative', err);
   });

  }

  render() {
    return <RecipeCardsContainer data={ this.state.recipeData } classList={"RecipeCardsContainer--grid"} modalOpen={ this.props.handleModalOpen } />
  }
}

export default RecipesPage;
