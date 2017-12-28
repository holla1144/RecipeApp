import React from 'react';
import Select from 'react-select';

class CategorySelector extends React.Component{
    constructor(props) {
      super(props);

      this.state = {

      };

      this.handleSelectorChange = this.handleSelectorChange.bind(this);
      this.updateFormSelected = this.updateFormSelected.bind(this);
    }

    componentDidMount() {
      const initialSelected = this.props.initialCategories;
      const formattedSelected = initialSelected.map((item, index) => {
        //Format array of categories to be rendered in select input
        return {label: item[0].toUpperCase() + item.slice(1).toLowerCase(), value: item.toLowerCase()};
      });

      this.setState({
        selected: formattedSelected
      });
    }

    updateFormSelected(e) {
      //Return only the value of selected categories
      const formattedArray = e.map((option) => { return option.value });
      this.props.handleChange(formattedArray);
    }

    handleSelectorChange(e) {
      if (e.length > 3) {
        e = this.state.selected;
      }

      this.setState({
        selected: e
      });

      this.updateFormSelected(e);
    }

    render() {
      return (
        <div className="Form-section">
          <label className="Form-sectionLabel" htmlFor="new-recipe-category">Category </label>
          <Select
            multi
            onChange={ this.handleSelectorChange }
            value={this.state.selected}
            options={[{ value: 'mexican', label: 'Mexican' },   { value: 'italian', label: 'Italian' },  { value: 'french', label: 'French' },  { value: 'american', label: 'American' }]}
          />
          <span className="CustomInput-error hidden">You must choose at least one category</span>
        </div>
      )
    }
}

export default CategorySelector;

