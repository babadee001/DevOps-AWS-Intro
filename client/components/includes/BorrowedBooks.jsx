import React from 'react';
import PropTypes from 'prop-types';

const AllBooks = ({ handleAction, cover, title, 
	description, id, isReturned, borrowed }) => {
		
	const handleClick = () => {
		handleAction(id);
	};
	return (
		<div>
			<div className="book col s12 m3 l3">
				<div className="card">
					<div className="card-image waves-effect waves-block waves-light">
						<img className="activator" src={cover} />
					</div>
					<div className="card-content">
						<span className="card-title">{title}</span>
						<span className="truncate">{description}</span>
						<p>
														
						{borrowed && !isReturned && (
								<a href="#" id="returnBook" onClick={handleClick} 
								className="btn">
									Return
								</a>
							)}
							{borrowed && isReturned && (
								<a href="#" id="returnBook" onClick={handleClick} 
								className="btn disabled">
									Returned
								</a>
							)}
							{!borrowed && (
								<a href="#" id="borrowNow" onClick={handleClick} 
								className="btn">
									Borrow
								</a>
							)}

						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

AllBooks.PropTypes = {
	handleBorrow: PropTypes.func.isRequired,
	cover: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default AllBooks;


// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import swal from 'sweetalert';
// import { connect } from 'react-redux';
// import { returnBook } from '../../actions/booksActions';

// class BorrowedBooks extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this
//       .handleClick
//       .bind(this);
//   }

//   handleClick() {
//     const userId = this.props.userId;
//     const bookId = { bookId: this.props.id };
//     swal({
//       title: 'Are you sure?',
//       text: 'Do you really want to return this book?',
//       icon: 'warning',
//       buttons: true,
//       dangerMode: true
//     }).then((toReturn) => {
//       if (toReturn) {
//         this.props.actions.returnBook(userId, bookId)
//     }
//   })}
//   render() {
//     return (
//       <div className="book col s12 m3 l3">
//         <div className="card">
//           <div className="card-image waves-effect waves-block waves-light">
//             <img className="activator" src={ this.props.cover } alt="cover" id="cover" />
//           </div>
//           <div className="card-content">
//             <span className="card-title activator grey-text text-darken-4">{this.props.title}</span>
//             <span>{this.props.description}</span>
//             <p>
//             {borrowed && !isReturned && (
// 								<a href="#" id="returnBook" onClick={ this.handleClick } 
// 								className="btn">
// 									Return
// 								</a>
// 							)}
// 							{borrowed && isReturned && (
// 								<a href="#" id="returnBook" onClick={ this.handleClick } 
// 								className="btn disabled">
// 									Returned
// 								</a>
// 							)}
// 							{!borrowed && (
// 								<a href="#" id="borrowNow" onClick={ this.handleClick } 
// 								className="btn">
// 									Borrow
// 								</a>
// 							)}
//               {/* <button onClick={ this.handleClick } className="btn">Return</button>
//               {this.props.isReturned && <button onClick={ this.handleClick } className="btn disabled">Returned</button>} */}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: bindActionCreators(
// 			{
// 				returnBook
// 			},
// 			dispatch
// 		)
// 	};
// }

// export default connect(null, mapDispatchToProps)(BorrowedBooks);
