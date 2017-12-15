import React from 'react';
import CategorySelector from './AddCategorySelector/CategorySelector';
import AddIngredientsComponent from './AddIngredientsComponent/AddIngredientsComponent';

class AddOneRecipeForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: 'Title',
      description: 'Description',
      category: [],
      ingredients: []
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleCategorySelectorChange = this.handleCategorySelectorChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }

  handleTextInputChange(event) {
    console.log(this.state);
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

  handleIngredientsChange(ingredientsArray) {
    console.log(ingredientsArray);

    this.setState({
      ingredients: ingredientsArray
    })
  }

  render() {
    return (
      <form id="addRecipes">
        <label htmlFor="new-recipe-title">Title: </label>
        <input type="text" name="title" id="new-recipe-title" value={this.state.title} onChange={this.handleTextInputChange}/>
        <label htmlFor="new-recipe-descriptions">Description: </label>
        <textarea name="description" id="new-recipe-descriptions" value={this.state.description} onChange={this.handleTextInputChange}/>
        <label htmlFor="new-recipe-category">Category: </label>

        <CategorySelector value={this.state.category} handleChange={this.handleCategorySelectorChange} />
        <AddIngredientsComponent handleUpdate={this.handleIngredientsChange} />
      </form>
    )
  }
};

export default AddOneRecipeForm;
