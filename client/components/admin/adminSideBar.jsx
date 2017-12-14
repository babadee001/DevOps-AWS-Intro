import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AdminSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.onChange = this
      .onChange
      .bind(this);
  }
  componentDidMount() {
    $('.buthrefn-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: false,
      draggable: true
    });
    $('.dropdown-buthrefn').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left',
      shrefpPropagation: false
    }
    );
    $('.modal').modal();
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const style = {
      account: {
        float: 'right',
        color: '#fff',
        padding: 5
      },
      adminText: {
        color: '#fff'
      },
      main: {
        float: 'right',
        marginLeft: 5,
        backgroundColor: 'rgb(0,128,128)'
      },
      row: {
        backgroundColor: '#008080'
      },
      img: {
        borderRadius: 50,
        border: '2px solid black'
      },
      side: {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#008080',
        marginhrefp: -16
      },
      menuIcon: {
        color: '#fff',
        fontSize: 40
      },
      buthrefn: {
        backgroundColor: 'rgb(0,128,128)',
        color: '#fff',
        float: 'right'
      }
    };
    return (
      <div>
        <div className="col s2 m3 l3">
          <ul id="slide-out" className="side-nav fixed show-on-large-only">
            <div style={ style.side }>
              <div className="row" style={ style.row }>
                <span className="card-title">
                  <h4>
                    <i className="material-icons">library_books</i>
                    <a href="/admin" style={ style.adminText }>Admin</a>
                  </h4>
                </span>
                <li className="divider" />
                <p />
                <img
                  width="100px"
                  height="100px"
                  src=""
                  alt=""
                /><br />
                <b>{this.props.fullname}</b>
              </div><br />
            </div>
            <li className="divider" />
            <li id="menu-list">
              <a href="/add">Add a book
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
            <li id="menu-list">
              <a href="/admin">Edit Books<i className="material-icons">chevron_right</i>
              </a>
            </li>
            <li id="menu-list">
              <a href="/admin">Delete Books<i className="material-icons">chevron_right</i>
              </a>
            </li>
            <li id="menu-list">
              <a href="/dashboard">User Dashboard<i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
          <div id="add_cat" className="modal">
            <div className="modal-content">
              <h4 style={{
                alignContent: 'center'
              }}
              >Add Category</h4>
              <div className="row">
                <form name="edit_book" className="col s12">
                  <div className="add-book">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={ this.onChange }
                          className="validate"
                          required
                        />
                        <label htmlFor="username">Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          id="description"
                          className="materialize-textarea"
                          name="description"
                          onChange={ this.onChange }
                        />
                        <label htmlFor="description">Description</label>
                      </div>
                    </div>
                  </div>
                  <buthrefn
                    style={ style.buthrefn }
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="submit"
                  >
                        Add Category
                  </buthrefn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch)
});


export default connect(null, mapDispatchToProps)(AdminSideBar);
