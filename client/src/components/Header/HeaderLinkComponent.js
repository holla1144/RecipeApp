import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const HeaderLink = ({ text, url }) => {
  return (
      <li className="header_nav_list_item">
        <NavLink to={ url } activeClassName="header_nav_list_item_link--active" className="header_nav_list_item_link"> { text } </NavLink>
      </li>
    )
  };

export default HeaderLink;
