import React from 'react';
import IngredientsInput from './IngredientsInput';

class AddIngredientsComponent extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [{
        name: 'Name',
        amount: 'Amount'
      }]
    };

    this.handleIngredientInputChange = this.handleIngredientInputChange.bind(this);
    this.addOneInput = this.addOneInput.bind(this);
    this.removeOneInput = this.removeOneInput.bind(this);
  }

  handleIngredientInputChange(e){
    const newIngredients = this.state.ingredients;
    const target = e.target;
    const targetIndex = target.getAttribute('index');
    const targetValue = target.value;
    const targetName = target.name;

    newIngredients[targetIndex][targetName] = targetValue;

    this.setState({
      ingredients: newIngredients
    });

    this.props.handleUpdate(this.state.ingredients);
  }

  addOneInput(){
    const newIngredients = this.state.ingredients;
    const blankIngredient = {
      name: 'Name',
      amount: 'Amount'
    };

    newIngredients.push(blankIngredient);
    this.setState({
      ingredients: newIngredients
    })
  }

  removeOneInput(index){
    const newIngredients = this.state.ingredients;
    newIngredients.splice(index, 1);

    this.setState({
      ingredients: newIngredients
    });
  }

  render() {
    const IngredientsInputs = this.state.ingredients.map((ingredient, ingredientIndex) => {
      return <IngredientsInput key={"ingredientInput-" + ingredientIndex} index={ingredientIndex} valueName={ingredient.name}
                               valueAmount={ingredient.amount} handleRemove={this.removeOneInput} handleChange={this.handleIngredientInputChange}/>
    });

    return (
      <div>
        <label>Add Ingredients</label>
        {IngredientsInputs}
        <span onClick={this.addOneInput} >Add</span>
      </div>
    )
  }
};

export default AddIngredientsComponent
