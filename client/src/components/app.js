import React from 'react';
import Header from './SharedComponents/Header/HeaderContainer';
import CategoriesPage from './Pages/Categories/CategoriesContainer';
import RecipesPage from './Pages/Recipes/RecipesContainer';
import AboutPage from './Pages/About/AboutContainer';
import HomePage from './Pages/Home/HomeContainer';
import Modal from './SharedComponents/ModalComponent/ModalContainer';
import ShowOneRecipe from './Pages/Recipes/ShowOneRecipe/ShowOneRecipe';
import AddOneRecipeContainer from './Pages/Recipes/AddOneRecipe/AddOneRecipeContainer';
import LoginContainer from './Pages/Login/LoginContainer';
import SignUpContainer from './Pages/Signup/SignupContainer';

import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalMessage: '',
      modalStyle: ''
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalOpen(modalStyle, modalMessage){
    this.setState({
      modalVisible: true,
      modalMessage: modalMessage,
      modalStyle: modalStyle
    })
  };

  handleModalClose(e){
    e.stopPropagation();

    this.setState({
      modalVisible: false,
      modalMessage: '',
      modalStyle: ''
    })
  }

  render(){
        return(
          <Router basename="/">
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={ HomePage }/>
                <Route path="/login" render={(routeProps) => {return <LoginContainer {...routeProps} modalOpen={this.handleModalOpen }/>}} />
                <Route path="/signup" render={(routeProps) => {return <SignUpContainer {...routeProps} modalOpen={this.handleModalOpen }/>}} />
                <Route path="/about" component={ AboutPage }/>
                <Route exact path="/recipes" component={ RecipesPage } />
                <Route path="/recipes/new" render={( routeProps ) => { return <AddOneRecipeContainer { ...routeProps } modalOpen={ this.handleModalOpen } />}}/>
                <Route path="/recipes/:recipeId" render={( routeProps ) => { return <ShowOneRecipe { ...routeProps } modalOpen={ this.props.handleModalOpen } />}}/>
                <Route path="/categories" component={ CategoriesPage }/>
                <Redirect to="/"/>
              </Switch>
              <Modal modalMessage={ this.state.modalMessage } handleModalClose={ this.handleModalClose } modalStyle={ this.state.modalStyle } visible={ this.state.modalVisible } />
            </div>
          </Router>
        )
      }
  }

export default App;
