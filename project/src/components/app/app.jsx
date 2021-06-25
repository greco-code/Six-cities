import React from 'react';

import HeroPage from '../pages/hero-page/hero-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import PointInfoPage from '../pages/point-info-page/point-info-page';
import ErrorPage from '../pages/error-page/error-page';


function App() {

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


export default App;
