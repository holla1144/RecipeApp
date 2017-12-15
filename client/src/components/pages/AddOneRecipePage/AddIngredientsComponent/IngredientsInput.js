import React from 'react';

class IngredientsInput extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" name="name" index={this.props.index} value={this.props.valueName} onChange={this.props.handleChange}/>
        <input type="text" name="amount" index={this.props.index} value={this.props.valueAmount} onChange={this.props.handleChange}/>
        <span onClick={() => {this.props.handleRemove(this.props.index)}}>Remove</span>
      </div>
    )
  }
};

export default IngredientsInput;
