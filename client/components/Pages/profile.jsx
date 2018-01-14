import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBorrowed } from '../../actions/booksActions';
import AllBorrowed from '../includes/Unreturned';
import Sidebar from '../includes/sidebar';
import Navbar from '../navbar';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, userId, email, membership } = this.props.user;
    return (
      <div>
        <Navbar route1="/dashboard" link1="All books" route2="" link2="Contact Us" />
        <div className="row">
          <Sidebar 
          fullname={ this.props.user.username }
          link1={'Borrow History'} 
          route1={'/history'}
          link2={'All books'} 
          route2={'/dashboard'}
          link3={'Profile'} 
          route3={'/profile'}
          />
        </div>
      </div>
    );
  }
}

Profile.PropTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { user: state.auth.user,
    book: state.books.allUnreturnedBooks };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getBorrowed
    }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
