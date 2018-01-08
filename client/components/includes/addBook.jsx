import React, { Component } from 'react';
import firebase from 'firebase';
import Materialize from 'materialize-css';
import ImageUploader from 'react-firebase-image-uploader';
import swal from 'sweetalert';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleError: '',
      authorError: '',
      isbnError: '',
      descError: '',
      title: '',
      isbn: '',
      description: '',
      cover: '',
      author: '',
      catId: '',
      quantity: 5,
      isLoading: '',
      isUploading: '',
      progress: 0
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.onChange = this
      .onChange
      .bind(this);
    this.onhandleBlur = this
      .onhandleBlur
      .bind(this);
    this.onhandleFocus = this
      .onhandleFocus
      .bind(this);
    this.handleUploadSuccess = this
      .handleUploadSuccess
      .bind(this);
    this.handleProgress = this
      .handleProgress
      .bind(this);
    this.handleUploadStart = this
      .handleUploadStart
      .bind(this);
    this.handleUploadError = this
      .handleUploadError
      .bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onhandleFocus(event) {
    const value = event.target.value,
      name = event.target.name;

    switch (name) {
      case 'title':
        this.setState({ titleError: '' });
        break;
      case 'author':
        this.setState({ authorError: '' });
        break;
      case 'description':
        this.setState({ descError: '' });
        break;
      case 'isbn':
        this.setState({ isbnError: '' });
        break;
      default:
        this.setState(this.state);
    }
  }

  onhandleBlur(event) {
    const value = event.target.value,
      name = event.target.name;
    switch (name) {
      case 'title':
        if (value.length < 2 || !value) {
          this.setState({ titleError: 'Book title must be greater than 2 characters' });
        }
        break;
      case 'author':
        if (value.length < 2 || !value) {
          this.setState({ authorError: 'Book author name must be greater than 2 characters' });
        }
        break;
      case 'prodYear':
        if (value.length < 4 || !value) {
          this.setState({ prodYearError: 'Production year is not valid' });
          return false;
        }
        break;
      case 'description':
        if (value.length < 5 || !value) {
          this.setState({ descError: 'Book description is required' });
        }
        break;
      case 'isbn':
        if (value.length < 5 || !value) {
          this.setState({ isbnError: 'Book ISBN must be a minimum of 5 characters' });
        }
        break;
      default:
        this.setState(this.state);
    }
  }
  handleProgress(progress) {
    this.setState({ progress });
  }
  handleUploadStart() {
    this.setState({ isUploading: true, progress: 0 });
  }

  handleSubmit(event) {
    event.preventDefault();
    this
      .props
      .add(this.state)
      .then((res) => {
        if (res) {
          swal(res.data.message);
        } else {
          Materialize.toast('Book added Successfully', 2000, '#15b39d', () => {
            this.setState({ isLoading: false });
          });
          window.location.href = '/admin';
        }
      })
      .catch(err => swal(err));
  }

  handleUploadError(error) {
    this.setState({ isUploading: false });
    console.error(error);}
  
  handleUploadSuccess(filename) {
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        this.setState({ cover: url, progress: 100 });
      });
  }

  render() {
    return (
      <div
        style={{
          marginTop: 20,
          backgroundColor: '#fff',
          width: '70%',
          float: 'right',
          marginRight: 100
        }}
      >
        <div className="row">
          <form name="add_book" className="col s12" onSubmit={ this.handleSubmit }>
            <div className="add-book">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="validate"
                    onChange={ this.onChange }
                    onhandleFocus={ this.onhandleFocus }
                    onhandleBlur={ this.onhandleBlur }
                    required
                  />
                  <label htmlFor="title">Title</label>
                  <div className="red-text">{ this.state.titleError }</div>
                </div>
                <div className="input-field col s6">
                  <input
                    id="author"
                    type="text"
                    name="author"
                    className="validate"
                    onChange={ this.onChange }
                    onhandleFocus={ this.onhandleFocus }
                    onhandleBlur={ this.onhandleBlur }
                    required
                  />
                  <label htmlFor="author">Author</label>
                  <div className="red-text">{ this.state.authorError }</div>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    className="validate"
                    defaultValue="1"
                    onChange={ this.onChange }
                    onhandleFocus={ this.onhandleFocus }
                    required
                  />
                  <label htmlFor="quantity">Quantity</label>
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <select
                    id="catId"
                    name="category"
                    onChange={ this.onChange }
                    className="browser-default"
                  >
                    <option value="">Select Category</option>
                    <option value="Epic">Epic</option>
                    <option value="Drama">Drama</option>
                    <option value="Action">Action</option>
                    <option value="Scifi">Sci-fi</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <input
                    id="isbn"
                    name="isbn"
                    type="text"
                    className="validate"
                    onChange={ this.onChange }
                    onhandleBlur={ this.onhandleBlur }
                    onhandleFocus={ this.onhandleFocus }
                    required
                  />
                  <label htmlFor="isbn">ISBN</label>
                  <div className="red-text">{ this.state.isbnError }</div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="description"
                    className="materialize-textarea"
                    name="description"
                    onhandleBlur={ this.onhandleBlur }
                    onChange={ this.onChange }
                    onhandleFocus={ this.onhandleFocus }
                  />
                  <label htmlFor="description">Description</label>
                  <div className="red-text">{ this.state.descError }</div>
                </div>
              </div>
              <span>Upload Cover</span><br /><br />
              { this.state.isUploading &&
                this.state.progress < 100 &&
                <div> <div className="preloader-wrapper big active">
                  <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                      <div className="circle" />
                    </div><div className="gap-patch">
                      <div className="circle" />
                    </div><div className="circle-clipper right">
                      <div className="circle" />
                    </div>
                  </div>
                </div> <br /><br /> </div> }
              { this.state.progress === 100 &&
                <div>
                  <img
                    height="50px"
                    width="50px"
                    alt="check mark"
                    src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/512/Tick_Mark-128.png"
                  /><br /></div> }
              <ImageUploader
                name="cover"
                storageRef={ firebase
                  .storage()
                  .ref('images') }
                onProgress={ this.handleProgress }
                onUploadSuccess={ this.handleUploadSuccess }
                onUploadStart={ this.handleUploadStart }
              />
            </div>
            <button
              id="addbook"
              className="btn waves-effect waves-light"
              type="submit"
              name="submit"
              disabled={ this.state.isLoading }
            >Add Book
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddBook;

AddBook.propTypes = {
  add: React.PropTypes.func.isRequired
};
