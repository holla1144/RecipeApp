import React from 'react';
import Logo from './LogoComponent';
import HeaderLink from './HeaderLinkComponent';

class Header extends React.Component{
  constructor(props) {
    super(props);
    console.log('header rebuilt')
    this.links = [{ text: 'Home', url: '/home'}, { text: 'About', url: '/about'},
                {text: 'Recipes', url: '/recipes'}, { text: 'Categories', url: '/categories'}];
  }

  render() {
    const linksSet = this.links.map((linkInfo, index) => {
      return <HeaderLink text={ linkInfo.text } url = { linkInfo.url } key={ 'HeaderLinkItem' + index}/>
    });

    return (
      <header className="col-12 centered">
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
