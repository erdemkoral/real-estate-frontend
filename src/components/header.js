import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './auth/actions';
import { Link } from 'react-router-dom';


class Header extends Component {
  renderLinks() {
    // if (this.props.authenticated) {
    if (localStorage.getItem('token')) {
      return (
        [
          <li className="nav-item" key="1">
            <Link className="nav-link" to="/mylistings">My Listings</Link>
          </li>,
          <li className="nav-item" key="2">
            <Link className="nav-link" to="/signout">Sign Out</Link>
          </li>
        ]
      );
    } else {
      return (
        [
          <li className="nav-item" key="3">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>,
          <li className="nav-item" key="4">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        ]
      );

    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>Wheel & Home</h1>      
            <h6>Find your dream <small>tiny house</small></h6>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/alllistings" className="nav-link">Listings</Link>
              </li>
              {this.renderLinks()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(Header);