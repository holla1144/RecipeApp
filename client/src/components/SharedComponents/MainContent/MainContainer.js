import React from 'react';
import PageHeader from '../PageHeader/PageHeader'

class MainContainer extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="main-content col-12 col-lg-10 col-xl-8 centered">
        <PageHeader pageName={ this.props.pageName }/>
        { this.props.children }
      </main>
    )
  }
}

export default MainContainer;
