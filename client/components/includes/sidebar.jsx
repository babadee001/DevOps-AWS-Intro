import React, { Component } from 'react';

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
          <div
            style={{
              textAlign: 'center',
              color: '#000',
              backgroundColor: '#136d55',
              marginTop: -16
            }}
          >
            <div className="row">
              <span className="card-title">
                <h4>
                  <a className="white-text" to="dashboard">Dashboard</a>
                </h4>
              </span>
              <li className="divider" />
              <p />
              <img
                style={{
                  borderRadius: 50,
                  border: '2px solid black'
                }}
                width="100px"
                height="100px"
                src="http://res.cloudinary.com/babadee30/image/upload/v1507304526/prof_qqq3su.jpg"
                alt="Avatar"
              /><br />
              <i className="material-icons">account_circle</i>
              <b>{this.props.fullname}</b>
            </div><br />
          </div>
          <li className="divider" />
          <li id="menu-list">
            <a href="borrowed">Borrow History
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
          {/* <li id="menu-list">
            <a to="/dashboard">Rent a Book
              <i className="material-icons">chevron_right</i>
            </a>
          </li> */}
          {/* <li id="menu-list">
            <a href="borrowed">Rented Books
              <i className="material-icons">chevron_right</i>
            </a>
          </li> */}
          <li id="menu-list">
            <a href="profile">My Profile
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
          {this.props.isAdmin && <li id="menu-list">
            <a href="/admin">Admin Section
              <i className="material-icons">chevron_right</i>
            </a>
          </li>}
        </ul>
      </div>
    );
  }
}

export default SideBar;
