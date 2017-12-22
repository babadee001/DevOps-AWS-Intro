import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import dotenv from 'dotenv';
import { bindActionCreators } from 'redux';
import jwt from 'jsonwebtoken';
import { logout } from '../../actions/authActions';


dotenv.load();

/**
 *
 * Higher order component for admin authentication
 * @export {Object}
 *
 * @param {Object} ComposedComponent
 *
 * @returns {Object}
 */
export default function (ComposedComponent) {
  class AdminAuthentication extends Component {
    /**
  *
  *
  *
  * @memberOf AdminAuthentication
  */
    componentWillMount() {
      if (!this.props.authenticated) {
        window.location.href = '/';
      }

      if (this.props.user.isAdmin !== 1) {
        window.location.href = '/dashboard'; //feedback
      }
    }

    /**
   * Executes before component is updated
   *
   * @param {any} nextProps
   *
   * @memberOf AdminAuthentication
   */
    componentWillUpdate(nextProps) {
      if (nextProps.currentUser.isAdmin !== 1) {
        window.location.href = '/';
      }
    }

    /**
   * Renders the component
   *
   * @returns
   *
   * @memberOf AdminAuthentication
   */
    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }
  AdminAuthentication.PropTypes = {
    router: PropTypes.object
  };

  /**
 * Maps dispatch to the application action creators
 *
 * @param {Function} dispatch
 *
 * @returns {Object} - Object containing action creators
 */
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
          logout
        },
        dispatch
      )
    };
  }

  /**
 *
 *
 * @param {Function} state
 *
 * @returns {Object} - Object containing application state
 */
  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated,
      user: state.auth.user.currentUser };
  }

  return connect(mapStateToProps, mapDispatchToProps)(AdminAuthentication);
}
