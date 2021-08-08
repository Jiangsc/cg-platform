import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-product">Add Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}