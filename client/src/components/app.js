import React from 'react';
import Header from './SharedComponents/Header/HeaderContainer';
import CategoriesPage from './Pages/Categories/CategoriesContainer';
import RecipesPage from './Pages/Recipes/RecipesContainer';
import AboutPage from './Pages/About/AboutContainer';
import HomePage from './Pages/Home/HomeContainer';
import Modal from './SharedComponents/ModalComponent/ModalContainer';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
          <Router>
            <div>
              <Header />
              <Switch>
                <Route test="test" exact path="/" component={ HomePage }/>
                <Route path="/about" component={ AboutPage }/>
                <Route path="/recipes" render={( routeProps ) => { return <RecipesPage { ...routeProps } modalOpen={ this.handleModalOpen } modalClose={ this.handleModalClose }/>}} />
                <Route path="/categories" component={ CategoriesPage }/>
              </Switch>
              <Modal modalMessage={ this.state.modalMessage } handleModalClose={ this.handleModalClose } modalStyle={ this.state.modalStyle } visible={ this.state.modalVisible } />
            </div>
          </Router>
        )
      }
  }

export default App;
