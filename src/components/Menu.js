import React from 'react';
import { Route, Link } from "react-router-dom";

const menu = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Favorite Books',
    to: '/favorite-books',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to} >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
}

const Menu = () => {
  var showMenu = (menu) => {
    var result = null;
    if (menu.length > 0) {
      result = menu.map((item, index) => {
        return (
          <MenuLink
            key={index}
            label={item.name}
            to={item.to}
            activeOnlyWhenExact={item.exact}
          />
        );
      })
    }
    return result
  }
    return (
       <div className="navbar navbar-default">
        <div className="navbar-brand">NEWS</div>
        <ul className="nav navbar-nav">
          {showMenu(menu)}
        </ul>
      </div>
    );
}

export default Menu;
