import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/BooksActions';
import AllBooks from '../includes/Books';
import Sidebar from '../includes/Sidebar';
import Navbar from '../Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.renderBooks = this
      .renderBooks
      .bind(this);
  }
  componentDidMount() {
    this
      .props
      .actions
      .getBooks();
  }

  renderBooks() {
    const allbooks = this.props.books;
    if (allbooks.length === 0) {
      return (<div className="empty-notifier">
        <h2>Wawu!!!...No book available at this time.</h2>
      </div>);
    }
    return (
      <div className="container-fluid">
        <div className="card-panel headcard">
            <center>Recently Added</center>
          </div>
        <div className="row">
          <div className="col s12 l9 m6">
          {allbooks.map(book => (<AllBooks
            key={ book.id }
            author={ book.author }
            borrowed={false}
            description={ book.description }
            id={ book.id }
            userId={ this.props.user.userId }
            title={ book.title }
            cover={ book.cover }
          />))
          }
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* <Navbar link3="Logout" link1="Profile" /> */}
        {this.renderBooks()}
      </div>
    );
  }
}

Dashboard.PropTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { 
    user: state.auth.user.currentUser,
    books: state.books.data };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getBooks
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
