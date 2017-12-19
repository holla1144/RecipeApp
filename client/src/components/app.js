import React from 'react';
import Header from './SharedComponents/Header/HeaderContainer';
import CategoriesPage from './pages/Categories/CategoriesContainer';
import AddOneRecipe from './Pages/Recipes/AddOneRecipe/AddOneRecipeContainer';
import RecipesPage from './pages/Recipes/RecipesContainer';
import AboutPage from './pages/About/AboutContainer';
import HomePage from './pages/Home/HomeContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};

    this.getDeviceWidth = () => {
      return window.outerWidth;
    }
  }

  render(){
        return(
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={ HomePage }/>
              <Route path="/about" component={ AboutPage }/>
              <Route path="/recipes" component={ RecipesPage }/>
              <Route path="/categories" component={ CategoriesPage }/>
              <Route path="/new" component={ AddOneRecipe }/>
            </div>
          </Router>
        )
      }
  }

export default App;
