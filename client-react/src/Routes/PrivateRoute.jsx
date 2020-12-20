import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isAuth } from '../helpers/auth';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/home',
                            state: { from: props.location }
                        }}
                    />
                )
        }
    ></Route>
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);