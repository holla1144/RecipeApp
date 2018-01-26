import React from 'react';
import { getOneRecipe } from '../../../../services/services';
import RecipeTitleComponent from './RecipeTitleComponent/RecipeTitleComponent';
import RecipeDescriptionComponent from './RecipeDescriptionComponent/RecipeDescriptionComponent';
import RecipeIngredientsContainer from './RecipeIngredientsComponent/RecipeIngredientsContainer';
import RecipeCategoryContainer from './RecipeCategoryComponent/RecipeCategoryContainer';
import RecipeDirectionsContainer from './RecipeDirectionsComponent/RecipeDirectionsContainer';
import LikeComponent from '../../../SharedComponents/LikeComponent/LikeComponent';

class ShowOneRecipe extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      recipeId: '',
      itemType: 1,
      recipeData: {
        title: '',
        description: '',
        category: [],
        ingredients: [],
        directions: [],
        author: ''
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
      })
    }).catch((err) => {
      this.props.modalOpen('negative', err.message);
    })
  };

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <RecipeTitleComponent title={ this.state.recipeData.title }/>
        <RecipeCategoryContainer category={ this.state.recipeData.category }/>
        <RecipeDescriptionComponent description={ this.state.recipeData.description }/>
        <RecipeIngredientsContainer ingredients={ this.state.recipeData.ingredients }/>
        <RecipeDirectionsContainer directions={ this.state.recipeData.directions } />
        <LikeComponent userId={this.props.userData.userId} itemId={ this.state.recipeId } itemType={this.state.itemType}/>
      </div>
    )
  }
};

export default ShowOneRecipe;
