import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark
      bg-primary justify-content-between
      d-flex  mb-4"
  >
    <div className="container">
      <a className="navbar-brand text-light font-weight-bold" href="">CRM</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navegacion">
        <ul className="navbar-nav ml-auto text-right">
          <li className="nav-item active">
            <Link className="btn btn-success" to="/client/new">
              Nuevo Cliente
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
