import React from 'react';
import RecipeCardsContainer from '../../SharedComponents/RecipeCards/RecipeCardsContainer/RecipeCardsContainer';
import PageHeader from '../../SharedComponents/PageHeader/PageHeader';
import { getManyRecipes } from '../../../services/services';

class RecipesPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      recipeData: [],
      filter: ''
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
      <div className="RecipesPage">
        <PageHeader>
          <p className="RecipesPage-title float-left">Recipes</p>
          <select className="float-right">
            <option>All</option>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Popular</option>
            <option>Liked by you</option>
          </select>
        </PageHeader>
        <RecipeCardsContainer data={ this.state.recipeData } classList={"col-12 col-lg-8 col-xl-6 centered"} modalOpen={ this.props.handleModalOpen } />
      </div>
    )
  }
}

export default RecipesPage;
