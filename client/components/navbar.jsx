import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/AuthActions'; 

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
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact Us</Link></li>
      </div>
    );
    const userLinks = (
      <div className="navitems">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to={this.props.route1}>{this.props.link1}</Link></li>
        <li><Link to={this.props.route2}>{this.props.link2}</Link></li>
        <li><Link onClick={ this.logout.bind(this) }>Logout</Link></li>
      </div>
    );
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <nav className="teal">
          <div className="nav-wrapper">
            <Link to="/" className="">Hello-books</Link>
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
