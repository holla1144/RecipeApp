import React from 'react';
import IngredientsInput from './IngredientsInput';
import { validateOneInput } from '../../../../../services/formValidation';

class IngredientsComponent extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [{
        name: '',
        amount: ''
      }]
    }
  }

  componentDidMount(){
    const initialIngredients =  this.props.ingredients;
    this.setState({
      ingredients: initialIngredients
    });

    this.addOneIngredient = this.addOneIngredient.bind(this);
    this.removeOneIngredient = this.removeOneIngredient.bind(this);
    this.handleOneChange = this.handleOneChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  addOneIngredient(){
    const lastIngredientIndex = this.state.ingredients.length - 1;
    const lastIngredient = this.state.ingredients[lastIngredientIndex];

    if (lastIngredient.name === '' || lastIngredient.amount === '') {
      const lastIngredientElement = [...document.querySelectorAll('.Ingredients-inputContainer')][lastIngredientIndex];
      const inputsToValidate = lastIngredientElement.querySelectorAll('input');
      inputsToValidate.forEach((input) => {
        validateOneInput(input)
      });
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
  };

  handleOneChange(e){
    const target = e.target;
    const targetIndex = target.getAttribute('index');
    const ingredientsCopy = this.state.ingredients;
    ingredientsCopy[targetIndex][target.name] = target.value;

    this.setState({
      ingredients: ingredientsCopy
    })
  }

  handleFormChange(){
    const ingredientsArray = this.state.ingredients;
    this.props.handleChange(ingredientsArray);
  }

  render() {
    const IngredientsInputs = this.state.ingredients.map((ingredient, ingredientIndex) => {
      return <IngredientsInput key={"ingredientInput-" + ingredientIndex} index={ ingredientIndex } valueName={ ingredient.name }
                               valueAmount={ ingredient.amount } validation={ this.props.validation} handleRemove={ this.removeOneIngredient } onChange={ this.handleOneChange }/>
    });

    return (
      <div className="Form-section" onChange={this.handleFormChange}>
        <label className="Form-sectionLabel">Ingredients </label>
        <div className="Ingredients">
          { IngredientsInputs }
        </div>
        <span className="Form-greenBtn" onClick={ this.addOneIngredient } >Add</span>
      </div>
    )
  };
}

export default IngredientsComponent
