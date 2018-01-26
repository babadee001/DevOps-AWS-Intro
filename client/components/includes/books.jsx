import React, { Component } from 'react';
import swal from 'sweetalert';
import Navbar from '../NavigationBar';
import { borrowBook } from '../../actions/booksActions';

/**
 * @description - Books component
 * 
 * @export
 * 
 * @class Books
 * 
 * @extends {Component}
 */
export default class Books extends Component {

  /**
	 * @description - Creates an instance of Books.
	 * 
	 * @param {Object} props - Componnet props data
	 * 
	 * @memberOf Books
	 */
  constructor(props) {
    super(props);
    this.handleClick = this
      .handleClick
      .bind(this);
  }

   /**
	 * @description - Executes borrow book action
	 * 
	 * @memberOf Books
	 */
  handleClick() {
    const userId = this.props.userId;
    const bookId = { bookId: this.props.id };
    const currentDate = new Date(),
      after30days = currentDate.setDate(currentDate.getDate() + 20),
      deadline = new Date(after30days);
    swal({
      title: 'Are you sure?',
      text: `You ware required to return this book on or before ${deadline}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willBorrow) => {
      if (willBorrow) {
        borrowBook(userId, bookId)
          .then((res) => {
            if (res === 'You have successfully borrowed the book') {
              swal(res, { icon: 'success' });
            } else {
              swal(res, { icon: 'warning' });
            }
          });
      }
    });
  }

  /**
	 * 
	 * @description - Renders the component
	 * 
	 * @returns {Object} - Object
	 * 
	 * @memberOf Books
	 */
  render() {
    return (
      <div>
        <div className="col s12 m3 l3">
          <div className="card" id="book_card">
            <div className="card-image">
              <img id="cover" src={ this.props.cover } id="cover" alt="cover" />
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-content">
              <span>{this.props.description}</span>
            </div>
            <div className="card-action">
                <button onClick={ this.handleClick } className="btn">Borrow</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
