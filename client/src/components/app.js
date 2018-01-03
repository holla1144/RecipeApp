import React from 'react';
import Header from './SharedComponents/Header/HeaderContainer';
import CategoriesPage from './Pages/Categories/CategoriesContainer';
import RecipesPage from './Pages/Recipes/RecipesContainer';
import AboutPage from './Pages/About/AboutContainer';
import HomePage from './Pages/Home/HomeContainer';
import Modal from './SharedComponents/ModalComponent/ModalContainer';
import ShowOneRecipe from './Pages/Recipes/ShowOneRecipe/ShowOneRecipe';
import AddOneRecipe from './Pages/Recipes/AddOneRecipe/AddOneRecipe';
import LoginForm from './Pages/Login/LoginForm';
import SignupForm from './Pages/Signup/SignupForm';
import MainContentContainer from './SharedComponents/MainContentContainer/MainContentContainer'
import { setToken, getToken, removeToken, verifyToken }  from '../services/services';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalMessage: '',
      modalStyle: '',
      userLoggedIn: false,
      userData: {
        username: '',
        userFavorites: [],
        userRecipes: [],
        userId: '',
        userType: ''
      }
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.extractTokenData = this.extractTokenData.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleModalOpen(modalStyle, modalMessage){
    this.setState({
      modalVisible: true,
      modalMessage: modalMessage,
      modalStyle: modalStyle,
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

  componentDidMount() {
    const token = getToken();

    if (token === null) {
      return
    }

    const tokenValid = verifyToken(token);

    if (tokenValid) {
      this.extractTokenData(token);
      return;
    }

    this.handleUserLogout();
  }

  handleUserLogout(){
    removeToken();
    this.setState({
      userLoggedIn: false,
      userData: {}
    })
  }

  handleUserLogin(token){
    setToken(token, this.extractTokenData(token));
  }

  extractTokenData(JWT) {
    const payload = JWT.split('.')[1];
    const decodedPayload = atob(payload);
    const payloadData = JSON.parse(decodedPayload).data;

    this.setState({
      userLoggedIn: true,
      userData: {
        username: payloadData.username,
        userFavorites: payloadData.favorites,
        userRecipes: payloadData.recipes,
        userId: payloadData._id,
        userType: payloadData.userType
      }
    }, () => {
      console.log(this.state);
    });
  }

  render(){
        return(
          <Router basename="/">
            <div>
              <Header userLoggedIn={this.state.userLoggedIn} handleUserLogout={this.handleUserLogout} />
              <MainContentContainer>
                <Switch>
                  <Route exact path="/" component={ HomePage }/>
                  <Route path="/login"  render={(routeProps) => {
                    return this.state.userLoggedIn ? <Redirect to='/'/> : <LoginForm {...routeProps} setToken={ this.handleUserLogin } modalOpen={this.handleModalOpen }/>}} />
                  <Route path="/signup" render={(routeProps) => {
                    return this.state.userLoggedIn ? <Redirect to='/' /> : <SignupForm {...routeProps} setToken={ this.handleUserLogin } modalOpen={this.handleModalOpen }/>}} />
                  <Route path="/about" component={ AboutPage }/>
                  <Route exact path="/recipes" component={ RecipesPage } />
                  <Route path="/recipes/new" render={( routeProps ) => {
                    return this.state.userData.userType !== 3 ? <Redirect to="/recipes" /> :  <AddOneRecipe { ...routeProps } userData={ this.state.userData } modalOpen={ this.handleModalOpen } />}}/>
                  <Route path="/recipes/:recipeId" render={( routeProps ) => { return <ShowOneRecipe { ...routeProps } modalOpen={ this.props.handleModalOpen } />}}/>
                  <Route path="/categories" component={ CategoriesPage }/>
                  <Redirect to="/"/>
                </Switch>
              </MainContentContainer>
              <Modal modalMessage={ this.state.modalMessage } handleModalClose={ this.handleModalClose } modalStyle={ this.state.modalStyle } visible={ this.state.modalVisible } />
            </div>
          </Router>
        )
      }
  }

export default App;
