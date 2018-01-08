import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import AddBook from '../includes/AddBook';
import AdminSideBar from './AdminSideBar';
import { addBookAction } from '../../actions/BooksActions';


export class AddANewBook extends Component {
  render() {
    const { addNewBookAction } = this.props;
    return (
      <div>
        {/* <AdminSideBar
          fullname={ this.props.user.fullname }
          isAdmin={ this.props.user.isAdmin }
        /> */}
        <AddBook
          firebaseStorage={ firebase.storage().ref('images') }
          add={ this.props.addBookAction }
        />
      </div>
    );
  }
}

/**
 *
 *
 * @param {Object} state
 *
 * @returns {Object} Object containing the application state
 */
function mapStateToProps(state) {
  return {
    user: state.auth.user.currentUser
  };
}
export default connect(mapStateToProps, { addBookAction })(AddANewBook);
