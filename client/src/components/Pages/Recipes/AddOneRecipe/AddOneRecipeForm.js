import React from 'react';
import CategorySelector from './AddCategoryComponent/CategorySelector';
import TitleComponent from './TitleComponent/TitleComponent';
import DescriptionComponent from './DescriptionComponent/DescriptionComponent';
import AddIngredientsComponent from './AddIngredientsComponent/AddIngredientsComponent';
import AddStepsComponent from './AddStepsComponent/AddStepsComponent';

class AddOneRecipeForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: 'Give your recipe a name',
      description: 'Add a description',
      category: ["Mexican", "Italian"],
      ingredients: [{
        name: 'Name',
        amount: 'Amount'
      }],
      steps: [{
        stepText: ''
      }],
      formIsValid: true
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleCategorySelectorChange = this.handleCategorySelectorChange.bind(this);
    this.addOneIngredient = this.addOneIngredient.bind(this);
    this.removeOneIngredient = this.removeOneIngredient.bind(this);
    this.updateOneIngredient = this.updateOneIngredient.bind(this);
    this.updateOneStep = this.updateOneStep.bind(this);
    this.addOneStep = this.addOneStep.bind(this);
    this.removeOneStep = this.removeOneStep.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

    if (lastIngredient.name === 'Name' || lastIngredient.amount === 'Amount' || !lastIngredient.name || !lastIngredient.amount) {
      //Do not add new ingredient if last ingredient had not been changed
      return
    }

    const newItem = {
      name: 'Name',
      amount: 'Amount'
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
    const newStep = {stepText: ''};

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

  handleFormSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <form className="add-recipe-form" id="addRecipes">

        <TitleComponent handleChange={ this.handleTextInputChange } title={ this.state.title } />

        <DescriptionComponent handleChange={ this.handleTextInputChange } description={ this.state.description }/>

        <CategorySelector initialCategories={ this.state.category } handleChange={ this.handleCategorySelectorChange } />

        <AddIngredientsComponent intialIngredients={ this.state.ingredients } handleChange={ this.updateOneIngredient }
                                 handleAdd={ this.addOneIngredient } handleRemove={ this.removeOneIngredient } />

        <AddStepsComponent initialSteps={ this.state.steps } handleChange={ this.updateOneStep }
                           handleAdd={ this.addOneStep } handleRemove={ this.removeOneStep }  />

        <button className="add-recipe-form_submit-button" type="submit" onClick={ this.handleFormSubmit }>Submit</button>

      </form>
    )
  }
};

export default AddOneRecipeForm;
