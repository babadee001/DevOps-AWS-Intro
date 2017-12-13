import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Signup from './components/users/signup';
import Signin from './components/users/signin';
import Profile from './components/Pages/profile';
// import AddBook from './components/admin/addBook';
import Dashboard from './components/Pages/dashboard';
import Authentication from './components/users/authentication';
import AdminAuthentication from './components/users/adminAuthentication';
import Admin from './components/admin/home';
import BorrowedBooks from './components/Pages/Unreturned';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="/signup" component={ Signup } />
    <Route path="/signin" component={ Signin } />
    <Route path="/profile" component={ Authentication(Profile) } />
    {/* <Route path="/add" component={ AdminAuthentication(AddBook) } /> */}
    <Route path="/admin" component={ AdminAuthentication(Admin) } />
    <Route exact path="/dashboard" component={ Authentication(Dashboard) } />
    <Route path="/history" component={ Authentication(BorrowedBooks) } />
  </Route>
);
