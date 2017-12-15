import React from 'react';
import Select from 'react-select';

class CategorySelector extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        selected: []
      };
      this.handleSelectorChange = this.handleSelectorChange.bind(this);
      this.updateFormSelected = this.updateFormSelected.bind(this);
    }


    updateFormSelected(e) {
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
        <Select
          name="category"
          multi
          onChange={ this.handleSelectorChange }
          value={this.state.selected}
          options={[{ value: 'mexican', label: 'Mexican' },   { value: 'italian', label: 'Italian' },  { value: 'french', label: 'French' },  { value: 'american', label: 'American' }]}
        />
      )
    }
}

export default CategorySelector;

