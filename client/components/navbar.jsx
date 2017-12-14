import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
// import { render } from 'react-dom';

class Nav extends Component {
  logout(event) {
    event.preventDefault();
    console.log('logout');
    this.props.logout();
  }
  render() {
    const isAuthenticated = this.props.auth.authenticated;
    const guestLinks = (
      <div className="navitems">
        <li><a href="/">Home</a></li>
        <li><a href="/signin">Signin</a></li>
        <li><a href="/signup">Signup</a></li>
      </div>
    );
    const userLinks = (
      <div className="navitems">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/profile">{this.props.link1}</a></li>
        <li><a href="/dashboard">{this.props.link2}</a></li>
        <li><a onClick={ this.logout.bind(this) }>{this.props.link3}</a></li>
      </div>
    );
    return (
      <div className="navbar">
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
