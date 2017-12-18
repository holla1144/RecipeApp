import React from 'react';
import AddRecipeLinkComponent from './AddRecipeLinkComponent'

class AddRecipeLinkContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="add-recipe-link">
        <AddRecipeLinkComponent />
      </div>
    )
  }
}

export default AddRecipeLinkContainer;
