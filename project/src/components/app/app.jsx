import React from 'react';

import HeroPage from '../pages/hero-page/hero-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import PointInfoPage from '../pages/point-info-page/point-info-page';
import ErrorPage from '../pages/error-page/error-page';
import offerProp from '../../props/offer.prop';
import commentProp from '../../props/comment.prop';


function App(props) {
  const {offers, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <HeroPage
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            favoriteOffers={
              offers.filter((offer) => offer.isFavorite)
            }
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PointInfoPage
            offer={offers[0]}
            comments={comments}
            neighbourhoodOffers={offers}
          />
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  comments: PropTypes.arrayOf(commentProp).isRequired,
};

export default App;
