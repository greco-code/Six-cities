import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadWrapper from '../load-wrapper/load-wrapper';

function PrivateRoute({render, path, exact, authorizationStatus}) {

  return (
    <LoadWrapper isDataLoaded={authorizationStatus !== AuthorizationStatus.UNKNOWN}>
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN}/>
        )}
      />
    </LoadWrapper>
  );
}

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
