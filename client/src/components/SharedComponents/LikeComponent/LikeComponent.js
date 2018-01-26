import React from 'react';
import LikeButton from './LikeButton';
import { likeOne, unlikeOne } from '../../../services/services';

class LikeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.updateDocuments = this.updateDocuments.bind(this);
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
  }

  componentDidMount() {
    console.log('like component ' + JSON.stringify(this.props));
  }

  componentDidUpdate() {
    console.log('like component ' + JSON.stringify(this.props));

  }

  handleButtonClick() {
    if (!this.props.userId) {
      alert(`Sign in to like ${this.props.itemType}`);
      return;
    }

    this.toggleLike();
  }

  toggleLike() {
    const newState = Object.assign({}, this.state, {isActive: !this.state.isActive} );
    this.setState(newState, () => {
      this.updateDocuments();
    });
  }

  updateDocuments() {
    console.log(this.state)
    const data = {};
    data.userId = this.props.userId;
    data.itemId = this.props.itemId;

    if (this.state.isActive) {
      return this.like(data);
    } else {
      return this.unlike(data);
    }
  }

  like(data){
    likeOne(data).then((response) => {
      if (response.status !== 200) {
        throw new Error('Something has gone horribly wrong!');
      }
    }).catch((err) => {
      alert('Something went wrong ' + err);
    })
  }

  unlike(data){
    unlikeOne(data).then((response) => {
      if (response.status !== 200) {
        throw new Error('Something has gone horribly wrong!');
      }
    }).catch((err) => {
      alert('Something went wrong ' + err);
    })
  }

  render(){
    return (
      <div>
        <LikeButton handleClick={this.handleButtonClick} active={this.state.isActive}/>
      </div>
    )
  }
}

export default LikeContainer;
