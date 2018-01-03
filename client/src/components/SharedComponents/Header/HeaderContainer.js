import React from 'react';
import Logo from './LogoComponent';
import HeaderLink from './HeaderLinkComponent';
import HeaderLoginComponent from './HeaderLoginComponent';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.links = [{ text: 'Home', url: '/'}, { text: 'About', url: '/about'},
                {text: 'Recipes', url: '/recipes'}, { text: 'Categories', url: '/categories'}];

  }


  render() {
    const linksSet = this.links.map((linkInfo, index) => {
      return <HeaderLink text={ linkInfo.text } url = { linkInfo.url } key={ 'HeaderLinkItem' + index}/>
    });

    return (
      <header className="header col-12 col-lg-10 col-xl-8 centered">
        <HeaderLoginComponent handleUserLogout={this.props.handleUserLogout} userLoggedIn={ this.props.userLoggedIn }/>
        <Logo />
        <nav>
          <ul className="col-8 centered header_nav_list">
            { linksSet }
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
