import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	returnBook, 
	getHistory } from '../../actions/booksActions';
import { bindActionCreators } from 'redux';
import Sidebar from '../includes/sidebar';
import AllBooks from '../includes/BorrowedBooks';
import Navbar from '../navbar';

/**
 * borrowedBooks component
 * 
 * @export {Object}
 * @class  BorrowedBooks
 * @extends {Component}
 */
export class  BorrowedBooks extends Component {
	constructor(props) {
		super(props);
		this.renderBorrowedBooks = this.renderBorrowedBooks.bind(this);
		this.handleClick =  this.handleClick.bind(this);
	}

	/**
	 * Fetches the list of rented books by a user
	 * 
	 * @param {any} props 
	 * 
	 * @memberOf  BorrowedBooks
	 */
	componentDidMount(props) {
		const userId = this.props.user.id || this.props.user.userId
		this.props.actions.getHistory(userId);
	}

	/**
	 * Handles book return
	 * 
	 * @param {any} id 
	 * 
	 * @memberOf  BorrowedBooks
	 */
	handleClick(id) {
		swal({
			title: 'Are you sure?',
			text: 'Do you really want to return the book?',
			icon: 'warning',
			buttons: true,
			dangerMode: true
		}).then((willReturn) => {
			if (willReturn) {
				this.props.actions.returnBook(this.props.user.userId, { bookId: id })
			}
		});
	}

	/**
	 * Displays lists of rented books
	 * 
	 * @returns 
	 * 
	 * @memberOf  BorrowedBooks
	 */
	renderBorrowedBooks() {
    let borrowedBooks = this.props.borrowedBooks;
    console.log(this.props)
		if (borrowedBooks.length < 1) {
			return (
				<div className="container-fluid">
					<Navbar route1="/dashboard" link1="All books" route2="" link2="Contact Us" />
          <div className="row">
          isAdmin={this.props.user.isAdmin} />
					<h1 className="empty-notifier headcard">You have not borrowed any book</h1>
          </div>
				</div>
			);
		} else {
			return (
        <div className="container-fluid">
          <Navbar route1="/dashboard" link1="All books" route2="" link2="Contact Us" />
          <div className="row"> 
					isAdmin={this.props.user.isAdmin} />
					<div className="row">
          <div className="card-panel headcard">
             <center>Borrowing History</center>
          </div>
						<div className="col s12 push-l3 m9">
							{borrowedBooks.map((book) => {
								return (
									<AllBooks
									isbn={book.isbn}
									borrowed={true}
									isReturned={book.returned}
									handleAction={this.handleClick}
									author={book.author}
									id={book.bookId}
									key={book.id}
									title={book.title}
									cover={book.cover}
									description={book.description}
									/>
								);
							})}
						</div>
					</div>
				</div>
        <Sidebar />
        </div>
			);
		}
	}

	/**
	 * Renders the component
	 * 
	 * @returns 
	 * 
	 * @memberOf  BorrowedBooks
	 */
	render() {
		return (
			<div>
				{this.renderBorrowedBooks()}
			</div>
		);
	}
}

AllBooks.PropTypes = {
	user: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	borrowedBooks: PropTypes.object.isRequired
};

/**
 * @description mapStateToProps - maps state value to props
 *
 * @param  {object} state the store state
 *
 * @return {Object} returns state object
 */
function mapStateToProps(state) {
	return {
		borrowedBooks: state.books.allBorrowedBooks,
		user: state.auth.user.currentUser
	};
}

/**
 * 
 * Maps the state to component Props
 * @param {Function} dispatch 
 *
 * @returns {Object} - Object containing functions
 */
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(
			{
				getHistory,
				returnBook
			},
			dispatch
		)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)( BorrowedBooks);


// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getHistory } from '../../actions/booksActions';
// import AllBorrowed from '../includes/BorrowedBooks';
// import Navbar from '../navbar';
// import Sidebar from '../includes/sidebar';

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.renderBooks = this
//       .renderBooks
//       .bind(this);
//   }
//   componentDidMount() {
//     this
//       .props
//       .actions
//       .getHistory(this.props.user.userId);
//   }

//   renderBooks() {
//     const allBorrowed = this.props.book;
//     if (!allBorrowed) {
//       return (<div className="empty-notifier">
//         <h2>Wawu!!!...You have no borrowing history.</h2>
//       </div>);
//     }
//     return (
//       <div className="container-fluid">
//         <Navbar route1="/dashboard" link1="All books" route2="" link2="Contact Us" />
//         <div className="row">
//           <div className="card-panel headcard">
//             <center>Borrowing History</center>
//           </div>
//           <div className="col s12 push-l3 m9">
//           {allBorrowed.map(book => (<AllBorrowed
//             key={ book.id }
//             author={ book.author }
//             borrowed={true}
//             isReturned={book.returned}
//             description={ book.description }
//             id={ book.id }
//             userId={ this.props.user.userId }
//             title={ book.title }
//             cover={ book.cover }
//           />))
//           }
//           </div>
//         </div>
//         <Sidebar />
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {/* <Navbar link2="Logout" link1="Profile" /> */}
//         {this.renderBooks()}
//       </div>
//     );
//   }
// }

// Dashboard.PropTypes = {
//   user: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired,
//   books: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   return { user: state.auth.user.currentUser,
//     book: state.books.allBorrowedBooks };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({
//       getHistory
//     }, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
