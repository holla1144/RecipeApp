import React from 'react';
import { getOneRecipe } from '../../../../services/services';
import RecipeTitleComponent from './RecipeTitleComponent/RecipeTitleComponent';
import RecipeDescriptionComponent from './RecipeDescriptionComponent/RecipeDescriptionComponent';
import RecipeIngredientsContainer from './RecipeIngredientsComponent/RecipeIngredientsContainer';
import RecipeCategoryContainer from './RecipeCategoryComponent/RecipeCategoryContainer';
import RecipeDirectionsContainer from './RecipeDirectionsComponent/RecipeDirectionsContainer';

class ShowOneRecipe extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      recipeId: '',
      recipeData: {
        title: '',
        description: '',
        category: [],
        ingredients: [],
        directions: []
      }
    }
  }

  componentDidMount(){
    const newRecipeId = this.props.match.params.recipeId;

    getOneRecipe(newRecipeId).then((response) => {
      if (response.status !== 200) {
        throw new Error('Something has gone terribly wrong');
      }

      return response.json();

    }).then((formattedResponse) => {
      const newRecipeData = formattedResponse.data.data;
      this.setState({
        recipeId: newRecipeId,
        recipeData: newRecipeData
      }, () => { console.log(this.state.recipeData)})
    }).catch((err) => {
      this.props.modalOpen('negative', err.message);
    })

  };

  render() {
    return (
      <div>
        <RecipeTitleComponent title={ this.state.recipeData.title }/>
        <RecipeCategoryContainer category={ this.state.recipeData.category }/>
        <RecipeDescriptionComponent description={ this.state.recipeData.description }/>
        <RecipeIngredientsContainer ingredients={ this.state.recipeData.ingredients }/>
        <RecipeDirectionsContainer directions={ this.state.recipeData.directions } />
      </div>
    )
  }
};

export default ShowOneRecipe;
