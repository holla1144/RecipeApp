import React from 'react';
import Header from './SharedComponents/Header/HeaderContainer';
import CategoriesPage from './pages/Categories/CategoriesContainer';
import AddOneRecipe from './Pages/Recipes/AddOneRecipe/AddOneRecipeContainer';
import RecipesPage from './pages/Recipes/RecipesContainer';
import AboutPage from './pages/About/AboutContainer';
import HomePage from './pages/Home/HomeContainer';
import Modal from './SharedComponents/ModalComponent/ModalContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalMessage: '',
      modalStyle: ''
    };

    this.getDeviceWidth = () => {
      return window.outerWidth;
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

  handleModalClose(){
    this.setState({
      modalVisible: false,
      modalMessage: '',
      modalStyle: ''
    })
  }

  render(){
        return(
          <Router>
            <div>
              <Header />
              <Route test="test" exact path="/" component={ HomePage }/>
              <Route path="/about" component={ AboutPage }/>
              <Route path="/recipes" component={ RecipesPage } />
              <Route path="/categories" component={ CategoriesPage }/>
              <Route path="/new" render={( routeProps )=> { return <AddOneRecipe { ...routeProps } modalOpen={ this.handleModalOpen } modalClose={ this.handleModalClose }/>}} />
              <Modal modalMessage={ this.state.modalMessage } handleModalClose={ this.handleModalClose } modalStyle={ this.state.modalStyle } modalVisible={ this.state.modalVisible } />
            </div>
          </Router>
        )
      }
  }

export default App;
