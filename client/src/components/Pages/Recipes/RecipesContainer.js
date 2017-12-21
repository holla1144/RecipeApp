import React from 'react';
import MainContainer from '../../SharedComponents/MainContent/MainContainer';
import AddRecipeLinkContainer from './AddRecipeLinkComponent/AddRecipeLinkContainer';
import RecipeCardsContainer from '../../SharedComponents/RecipeCards/RecipeCardsContainer/RecipeCardsContainer';
import { getManyRecipes } from '../../../services/httpRequests';
import AddOneRecipe from './AddOneRecipe/AddOneRecipeContainer';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


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
    return (
      <MainContainer pageName="Recipes">
        <Link to={this.props.match.url + '/all' } className="add-recipe-link_span_text"> All </Link>
        <Route path={ this.props.match.url + '/all' } render={( routeProps ) => { console.log('route rendered');
          return <RecipeCardsContainer { ...routeProps } data={ this.state.recipeData } />}} />
        <Link to={this.props.match.url + '/new'} className="add-recipe-link_span_text"> Add </Link>
        <Route path={ this.props.match.url + '/new' } render={( routeProps ) => { console.log('route rendered');
          return <AddOneRecipe { ...routeProps } modalOpen={ this.props.modalOpen } />}} />
      </MainContainer>
    )
  }
}

export default RecipesPage;
