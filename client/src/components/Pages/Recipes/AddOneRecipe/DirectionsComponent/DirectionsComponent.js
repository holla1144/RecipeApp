import React from 'react';
import DirectionItem from './DirectionItem';
import { validateOneInput } from '../../../../../services/formValidation';

class DirectionsComponent extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      directions: ['']
    };

    this.addDirection = this.addDirection.bind(this);
    this.removeOneDirection = this.removeOneDirection.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidMount() {
    const initialDirections = this.props.directions;
    this.setState({
      directions: initialDirections
    });
   }

  handleDirectionChange(e){
    const target = e.target;
    const targetIndex = target.getAttribute('index');
    const targetValue = target.value;
    const directionsCopy = this.state.directions;

    directionsCopy[targetIndex] = targetValue;

    this.setState({
      directions: directionsCopy
    });
  }

  handleFormChange(){
    this.props.onChange(this.state.directions);
  }

  addDirection(){
    const lastDirectionIndex = this.state.directions.length - 1;
    const lastDirection = this.state.directions[lastDirectionIndex];

    if (lastDirection === '') {
      const lastDirectionElement = document.querySelectorAll('.Directions-inputContainer textarea')[lastDirectionIndex];
      validateOneInput(lastDirectionElement);
      return
    }

    const directionsCopy = this.state.directions;
    const newDirection = '';

    directionsCopy.push(newDirection);

    this.setState({
      directions: directionsCopy
    });
  };

  removeOneDirection(index){
    if (this.state.directions.length === 1) {
      // Do not remove only step
      return
    }

    const directionsCopy = this.state.directions;
    directionsCopy.splice(index, 1);

    this.setState({
      directions: directionsCopy
    })
  }

  render() {
    const directionSteps = this.state.directions.map((element, index) => {
      return <DirectionItem key={'newRecipeStep-' + index} validation="isNotBlank" value={element.stepText} index={index}
                            onChange={ this.handleDirectionChange } removeDirection={ this.removeOneDirection } />
    });

    return (
      <div className="Form-section" onChange={this.handleFormChange}>
        <label className="Form-sectionLabel">Directions </label>
        <div className="Directions">
          { directionSteps }
        </div>
        <span className="Form-greenBtn" onClick={ this.addDirection }>Add</span>
      </div>
    )
  }
};

export default DirectionsComponent;
