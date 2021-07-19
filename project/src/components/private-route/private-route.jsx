import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {getAuthStatus} from '../../store/login-reducer/selectors';

function PrivateRoute({render, path, exact}) {
  const authorizationStatus = useSelector(getAuthStatus);

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
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
