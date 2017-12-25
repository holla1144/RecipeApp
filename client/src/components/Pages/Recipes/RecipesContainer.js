import React from 'react';
import MainContainer from '../../SharedComponents/MainContent/MainContainer';
import RecipeCardsContainer from '../../SharedComponents/RecipeCards/RecipeCardsContainer/RecipeCardsContainer';
import { getManyRecipes } from '../../../services/httpRequests';
import ShowOneRecipe from './ShowOneRecipe/ShowOneRecipe';

import {
  Route,
  Switch,
} from 'react-router-dom'


class RecipesPage extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props);

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
        <Switch>
          <Route exact={ true } path="/recipes/:recipe" render={(RouteProps) => {return <ShowOneRecipe { ...RouteProps }/> }} />
          <Route exact={ true } path="/recipes" render={(routeProps) => {
            return <RecipeCardsContainer { ...routeProps } data={ this.state.recipeData } modalOpen={ this.props.handleModalOpen } />
          }} />
        </Switch>
      </MainContainer>
    )
  }
}

export default RecipesPage;
