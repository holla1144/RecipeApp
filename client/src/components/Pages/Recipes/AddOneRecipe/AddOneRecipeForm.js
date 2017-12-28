import React from 'react';
import { addOneRecipe } from '../../../../services/httpRequests';
import { validateOneInput } from '../../../../services/formValidation';
import { validateAllInputs } from '../../../../services/formValidation';
import { validateForm } from '../../../../services/formValidation';
import CustomInput from '../../../SharedComponents/CustomInputs/Input';
import CustomTextarea from "../../../SharedComponents/CustomInputs/Textarea";
import CategorySelector from "./CategorySelector/CategorySelector";
import IngredientsComponent from "./IngredientsComponent/IngredientsComponent";
import DirectionsComponent from "./DirectionsComponent/DirectionsComponent";

class AddOneRecipeForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      category: [],
      ingredients: [{
        name: '',
        amount: ''
      }],
      directions: [''],
      titleValid: false,
      titleError: '',
      formIsValid: false,
      formErrors: []
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleCategorySelectorChange = this.handleCategorySelectorChange.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.updateDirections = this.updateDirections.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.triggerCategoryErrors = this.triggerCategoryErrors.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.formatIngredients = this.formatIngredients.bind(this);
    this.formatDirections = this.formatDirections.bind(this);
  }

  handleTextInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleCategorySelectorChange(categoryArray) {
    this.setState({
      category: categoryArray
    })
  }

  updateIngredients(ingredientsArray){
    this.setState({
      ingredients: ingredientsArray
    })
  }

  updateDirections(directionsArray){
    this.setState({
      directions: directionsArray
    })
  }

  formatIngredients(){
    //Remove any empty ingredients objects before submitting form
    let ingredientsArr = this.state.ingredients;
    ingredientsArr.forEach((ingredientObject, index) => {
      if (ingredientObject['name'] === '' || ingredientObject['amount'] === 0) {
        ingredientsArr.splice(index, 1);
      }
    });

    return ingredientsArr;
  };

  formatDirections(){
    //Remove empty 'direction' step before submitting form
    let directionsArr = this.state.steps;
    directionsArr.forEach((direction, index) => {
      if (direction === '') {
        directionsArr.splice(index, 1);
      }
    });

    return directionsArr;
  };

  triggerCategoryErrors(){
    const categorySelector = document.querySelector('.Select');
    const categoryError = categorySelector.parentElement.querySelector('.CustomInput-error');

    if (!categorySelector.classList.contains('has-value')) {
      categoryError.classList.remove('hidden');
      categorySelector.classList.add('invalid');
    }
  }

  validateForm() {
    const formValid = validateForm("addRecipeForm");

    this.setState({
      formIsValid: formValid
    })
  }

  handleFormChange(e) {
    validateOneInput(e.target);
    this.validateForm();
    }

  handleFormSubmit(e){
    e.preventDefault();
    this.triggerCategoryErrors();
    validateAllInputs();

    if (!this.state.formIsValid) {
      this.props.modalOpen('negative', 'You have errors in your form');
      return;
    }

    const newRecipe = {};
    newRecipe.title = this.state.title.trim();
    newRecipe.description = this.state.description.trim();
    newRecipe.category = this.state.category;
    newRecipe.ingredients = this.formatIngredients();
    newRecipe.directions = this.formatDirections();

    addOneRecipe(newRecipe).then((response) => {
      if (response.status !== 200) {
        throw new Error('Something has gone horribly wrong . . . ');
      }

      return response.json();

    }).then((jsonResponse) => {

      if (jsonResponse.status !== 200) {
        throw new Error(jsonResponse.data.message);
      }

      this.props.modalOpen('positive', jsonResponse.data.message);

    }).catch((err) => {

      this.props.modalOpen('negative', err.message);
    })
  }

  render() {
    return (
      <form onKeyDown={ this.handleFormChange } onChange={ this.handleFormChange } className="Form AddRecipeForm" id="addRecipeForm">
        <div className="Form-section">
          <label className="Form-sectionLabel">Title</label>
          <CustomInput placeholder="Add a title" type='text' value={this.state.title} onChange={this.handleTextInputChange} name="title" validation='isNotBlank' required />
        </div>
        <div className="Form-section">
          <label className="Form-sectionLabel">Description</label>
          <CustomTextarea placeholder="Add a description" onChange={this.handleTextInputChange} name="description" validation='isNotBlank' required />
        </div>
        <CategorySelector initialCategories={ this.state.category } handleChange={ this.handleCategorySelectorChange } name="category" />
        <IngredientsComponent ingredients={ this.state.ingredients } handleChange={ this.updateIngredients } validation='isNotBlank' />
        <DirectionsComponent directions={ this.state.directions } onChange={ this.updateDirections }/>
        <button className="AddRecipeForm-submitButton" type="button" onClick={ this.handleFormSubmit }>Submit</button>
      </form>
    )
  }
};

export default AddOneRecipeForm;
