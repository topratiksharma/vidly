import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          Vidly
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <NavLink className='nav-link' to='/movies'>Movies</NavLink>
            <NavLink className='nav-link' to='/customers'>Customers</NavLink>
            <NavLink className='nav-link' to='/rentals'>Rentals</NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
