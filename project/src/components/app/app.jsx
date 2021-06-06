import React from 'react';

import Hero from '../hero/hero';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import PointDescription from '../pages/point-description/point-description';
import Error404 from '../pages/error404/error404';


function App(props) {
  const {pointsAmount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Hero pointsAmount={pointsAmount}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PointDescription/>
        </Route>
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  pointsAmount: PropTypes.number.isRequired,
};

export default App;
