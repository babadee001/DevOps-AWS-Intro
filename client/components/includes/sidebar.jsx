import React, { Component } from 'react';
import { Link } from 'react-router';

class SideBar extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: false,
      draggable: true //
    });
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    }
    );
    $('.modal').modal();
  }
  render() {
    return (
      <div className="col s2 m3 l3">
        <ul id="slide-out" className="side-nav fixed show-on-large-only">
          <div className="sidenav">
            <div className="row">
              <span className="card-title">
                <h4>
                  <Link className="white-text" to="/dashboard">Dashboard</Link>
                </h4>
              </span>
              <li className="divider" />
              <p />
              <img className="avatar"
                src="http://res.cloudinary.com/babadee30/image/upload/v1507304526/prof_qqq3su.jpg"
                alt="Avatar"
              /><br />
              <i className="material-icons">account_circle</i>
              <b>{this.props.fullname}</b>
            </div><br />
          </div>
          <li className="divider" />
          <li id="menu-list">
            <Link to="/history">Borrow History
              <i className="material-icons">chevron_right</i>
            </Link>
          </li>
          <li id="menu-list">
            <Link to="/dashboard">All books
              <i className="material-icons">chevron_right</i>
            </Link>
          </li>
          <li id="menu-list">
            <Link to="/profile">My Profile
              <i className="material-icons">chevron_right</i>
            </Link>
          </li>
          {this.props.isAdmin && <li id="menu-list">
            <Link to="/admin">Admin Section
              <i className="material-icons">chevron_right</i>
            </Link>
          </li>}
        </ul>
      </div>
    );
  }
}

export default SideBar;
