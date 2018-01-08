import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import AllBooks from './AllBooks';
import { getBooks, deleteBook } from '../../actions/BooksActions';
import { logout } from '../../actions/AuthActions';
import AdminSideBar from './AdminSideBar';
import Navbar from '../Navbar';

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.renderBooks = this
      .renderBooks
      .bind(this);
    this.logout = this
      .logout
      .bind(this);
  }
  componentDidMount() {
    this
      .props
      .actions
      .getBooks();
  }

  logout(event) {
    event.preventDefault();

    this
      .props
      .actions
      .logout();
    browserHistory.push('/');
  }


  renderBooks() {
    const { username } = this.props.user;
    const allbooks = this.props.books;
    if (!allbooks) {
      return (<div
        style={{
          backgroundColor: '#fff',
          float: 'right',
          marginLeft: '-100px',
          marginRight: '-50px'
        }}
      >
        <h2>There is no book in the database</h2>
      </div>);
    }

    return (
      <div className="container">
        <div className="card-panel headcard">
            <center>Available Books</center>
          </div>
        <div className="row">
          <AdminSideBar fullname={ this.props.user.username } />
          <div className="col s12 l9" id="list_boy">
            {allbooks.map(book => (<AllBooks
              deleteBook={ deleteBook }
              key={ book.id }
              prodYear={ book.prodYear }
              total={ book.quantity }
              isbn={ book.isbn }
              author={ book.author }
              description={ book.description }
              id={ book.id }
              title={ book.title }
              cover={ book.cover }
            />))
            }
          </div>
        </div>
      </div>

    );
  }
  render() {
    const { username, id } = this.props.user;
    return (
      <div>
        <Navbar route1="/dashboard" link1="Users dashboard" route2="" link2="Contact Us" />
        {this.renderBooks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books.data,
    user: state.auth.user.currentUser };
}

AdminHome.PropTypes = {
  books: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getBooks,
      logout
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
