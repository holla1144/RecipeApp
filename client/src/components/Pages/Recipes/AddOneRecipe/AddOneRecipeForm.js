import React from 'react';
import CategorySelector from './AddCategoryComponent/CategorySelector';
import TitleComponent from './TitleComponent/TitleComponent';
import DescriptionComponent from './DescriptionComponent/DescriptionComponent';
import IngredientsComponent from './AddIngredientsComponent/AddIngredientsComponent';
import DirectionsComponent from './DirectionsComponent/DirectionsComponent';
import { addOneRecipe } from '../../../../services/httpRequests';
import { validate } from '../../../../services/formValidation';

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
      steps: [''],
      titleValid: false,
      descriptionValid: false,
      categoryValid: false,
      ingredientsValid: false,
      directionsValid: false,
      formIsValid: false,
      formErrors: []
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleCategorySelectorChange = this.handleCategorySelectorChange.bind(this);
    this.addOneIngredient = this.addOneIngredient.bind(this);
    this.removeOneIngredient = this.removeOneIngredient.bind(this);
    this.updateOneIngredient = this.updateOneIngredient.bind(this);
    this.updateOneStep = this.updateOneStep.bind(this);
    this.addOneStep = this.addOneStep.bind(this);
    this.removeOneStep = this.removeOneStep.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateTitle = this.validateTitle.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
    this.validateCategory = this.validateCategory.bind(this);
    this.validateIngredients = this.validateIngredients.bind(this);
    this.validateDirections = this.validateDirections.bind(this);
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

  addOneIngredient(){
    const lastIngredient = this.state.ingredients[this.state.ingredients.length -1];

    if (!lastIngredient.name.length || !lastIngredient.amount.length) {
      //Do not add new ingredient if last ingredient had not been changed
      return
    }

    const newItem = {
      name: '',
      amount: ''
    };

    const ingredientsCopy = this.state.ingredients;
    ingredientsCopy.push(newItem);

    this.setState({
      ingredients: ingredientsCopy
    })
  }

  removeOneIngredient(index){
    if (this.state.ingredients.length === 1) {
      //Do not remove only ingredient field set
      return;
    }

    const ingredientsCopy = this.state.ingredients;

    ingredientsCopy.splice(index, 1);

    this.setState({
      ingredients: ingredientsCopy
    });
  }

  updateOneIngredient(e){
    const target = e.target;
    const targetIndex = e.target.getAttribute('index');
    const ingredientsCopy = this.state.ingredients;
    ingredientsCopy[targetIndex][target.name] = target.value;

    this.setState({
      ingredients: ingredientsCopy
    })
  }

  updateOneStep(e){
    const target = e.target;
    const targetIndex = target.getAttribute('index');
    const targetValue = target.value;
    const stepsCopy = this.state.steps;

    stepsCopy[targetIndex] = targetValue;

    this.setState({
      steps: stepsCopy
    });
  }

  addOneStep(){
    const lastStep = this.state.steps[this.state.steps.length -1];

    if (!lastStep.length || lastStep === '') {
      //Do not add additional step if previous step is blank/untouched
      return
    }

    const stepsCopy = this.state.steps;
    const newStep = '';

    stepsCopy.push(newStep);

    this.setState({
      steps: stepsCopy
    });
  };

  removeOneStep(index){
    if (this.state.steps.length === 1) {
      // Do not remove only step
      return
    }

    const stepsCopy = this.state.steps;
    stepsCopy.splice(index, 1);

    this.setState({
      steps: stepsCopy
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

  validateTitle(){
    return validate('isNotBlank', this.state.title)
  };

  validateDescription(){
    return validate('isNotBlank', this.state.description)
  };

  validateCategory(){
    return validate('hasLength', this.state.category);
  };

  validateIngredients(){
    return validate('oneIngredient', this.state.ingredients);
  }

  validateDirections(){
    return validate('isNotBlank', this.state.steps[0]);
  }

  validateForm() {
    const titleValid = this.validateTitle().isValid;
    const descriptionValid = this.validateDescription().isValid;
    const categoryValid = this.validateCategory().isValid;
    const ingredientsValid = this.validateIngredients().isValid;
    const directionsValid = this.validateDirections().isValid;
    const formIsValid = titleValid && descriptionValid && categoryValid && ingredientsValid && directionsValid;

    this.setState({
      titleValid: titleValid,
      descriptionValid: descriptionValid,
      categoryValid: categoryValid,
      ingredientsValid: ingredientsValid,
      directionsValid: directionsValid,
      formIsValid: formIsValid
    });
  }

  handleFormChange() {
    this.validateForm();
  }

  handleFormSubmit(e){
    e.preventDefault();

    if (!this.state.formIsValid) {
      this.props.modalOpen('negative', 'You have errors in your form');
      return;
    }

    const newRecipe = {};
    newRecipe.title = this.state.title.trim();
    newRecipe.description = this.state.description.trim();
    newRecipe.category = this.state.category;
    newRecipe.ingredients = this.formatIngredients();
    newRecipe.steps = this.formatDirections();

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
      <form onKeyDown={ this.handleFormChange } onChange={ this.handleFormChange } onClick={ this.handleFormChange } className="Form" id="addRecipes">

        <TitleComponent handleChange={ this.handleTextInputChange } title={ this.state.title } />

        <DescriptionComponent handleChange={ this.handleTextInputChange } description={ this.state.description }/>

        <CategorySelector initialCategories={ this.state.category } handleChange={ this.handleCategorySelectorChange } />

        <IngredientsComponent intialIngredients={ this.state.ingredients } handleChange={ this.updateOneIngredient }
                                 handleAdd={ this.addOneIngredient } handleRemove={ this.removeOneIngredient } />

        <DirectionsComponent initialSteps={ this.state.steps } handleChange={ this.updateOneStep }
                             handleAdd={ this.addOneStep } handleRemove={ this.removeOneStep }  />

        <button className="Form-submitButton" type="submit" onClick={ this.handleFormSubmit }>Submit</button>

      </form>
    )
  }
};

export default AddOneRecipeForm;
