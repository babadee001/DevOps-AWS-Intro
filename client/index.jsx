import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import 'materialize-css';
import { SET_CURRENT_USER } from './actions/types';
import configureStore from './store/index';
import setAuthorizationToken from './utils/setAuthorization';
import './style/style.scss';

import routes from './routes';

setAuthorizationToken(localStorage.Token);

const store = configureStore();

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch({
    type: SET_CURRENT_USER,
    user: jwt.decode(localStorage.token)
  });
}

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('container')
);
