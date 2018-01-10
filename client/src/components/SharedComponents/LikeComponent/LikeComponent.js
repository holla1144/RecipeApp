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
    this.doLike = this.doLike.bind(this);
    this.doUnlike = this.doUnlike.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
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
    const likeData = {};
    likeData.userId = this.props.userId;
    likeData.itemId = this.props.itemId;
    likeData.itemType = this.props.itemType;

    if (this.state.isActive) {
      console.log('Do like called ' + JSON.stringify(likeData));
      return this.doLike(likeData);
    } else {
      console.log('Do unlike called ' + JSON.stringify(likeData));
      return this.doUnlike(likeData);
    }
  }

  doLike(data){
    likeOne(data).then((response) => {
      if (response.status !== 200) {
        throw new Error('Something has gone horribly wrong!');
      }
    }).catch((err) => {
      alert('Something went wrong ' + err);
    })
  }

  doUnlike(){
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
