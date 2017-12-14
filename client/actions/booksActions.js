import axios from 'axios';
import dotenv from 'dotenv';
import swal from 'sweetalert';
import { GET_BOOKS, DELETE_BOOK, EDIT_BOOK, ADD_BOOK, ADD_CATEGORY, GET_BORROWED_BOOKS, RETURN_BOOK } from './types';

dotenv.load();
export function addBook(book) {
  return { type: ADD_BOOK, book };
}
export function getBooks() {
  return dispatch => axios.get('api/v1/books', {
    headers: { xaccesstoken: localStorage.getItem('token') }
  })
    .then((res) => {
      dispatch({
        type: GET_BOOKS,
        data: res.data
      });
      return res.data;
    })
    .catch(error => error);
}

export function deleteBook(book) {
  return { type: DELETE_BOOK, book };
}
export function getBorrowed(userId) {
  return dispatch => axios.get(`api/v1/users/${userId}/books/?returned=false`)
    .then((res) => {
      dispatch({
        type: GET_BORROWED_BOOKS,
        data: res.data
      });
      return res.data;
    })
    .catch(error => error);
}

export function getHistory(userId) {
  return dispatch => axios.get(`api/v1/users/${userId}`)
    .then((res) => {
      dispatch({
        type: GET_BORROWED_BOOKS,
        data: res.data
      });
      return res.data;
    })
    .catch(error => error);
}
export function editBook(book) {
  return { type: EDIT_BOOK, book };
}

export function borrowBook(userId, bookId) {
  return axios.post(`api/v1/users/${userId}/books/${bookId.bookId}`)
    .then(res => res.data.message)
    .catch(error => error.data.message);
}
export function returnBook(userId, bookId) {
  return axios.put(`api/v1/users/${userId}/books/${bookId.bookId}`)
    .then(res => res.data.message)
    .catch(error => error.data.message);
}

export function addBookAction(bookDetails) {
  return dispatch => axios.post('api/v1/books', bookDetails)
    .then((res) => {
      dispatch({
        type: ADD_BOOK,
        message: res.data.message
      });
    })
    .catch(error => error);
}

export function addCategory(data) {
  return dispatch => axios.post('api/v1/books/cat', data)
    .then((res) => {
      dispatch({
        type: ADD_CATEGORY,
        data: res.data.category
      });
      return res.data.message;
    })
    .catch(error => error);
}
export function deleteBookAction(bookId) {
  return axios.delete(`api/v1/books/${bookId}`)
    .then(res => res.data.message)
    .catch(error => error.data.message);
}
