import React from 'react';

import HeroPage from '../pages/hero-page/hero-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import PointInfoPage from '../pages/point-info-page/point-info-page';
import ErrorPage from '../pages/error-page/error-page';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';
import {isCheckedAuth} from '../../utils';


function App(props) {
  const {isDataLoaded, authorizationStatus} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner/>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <HeroPage/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PointInfoPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};


export {App};
export default connect(mapStateToProps)(App);
