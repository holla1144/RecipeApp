import React from 'react';

class MainContentContainer extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="main-content col-12 centered">
        { this.props.children }
      </main>
    )
  }
}

export default MainContentContainer;
