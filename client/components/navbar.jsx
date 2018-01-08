import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/authActions';
// import { render } from 'react-dom';

class Nav extends Component {
  logout(event) {
    event.preventDefault();
    this.props.logout();
  }
  render() {
    const isAuthenticated = this.props.auth.authenticated;
    const guestLinks = (
      <div className="navitems">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </div>
    );
    const userLinks = (
      <div className="navitems">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">{this.props.link1}</Link></li>
        <li><Link to="/dashboard">{this.props.link2}</Link></li>
        <li><Link onClick={ this.logout.bind(this) }>{this.props.link3}</Link></li>
      </div>
    );
    return (
      <div className="navbar navbar navbar-default navbar-fixed-top">
        <nav className="teal">
          <div className="nav-wrapper">
            <a href="" className="">Hello-books</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              { isAuthenticated ? userLinks : guestLinks }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
Nav.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Nav);
