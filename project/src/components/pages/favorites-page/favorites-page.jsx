import React, {useEffect} from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoriteOffers} from '../../../store/data-reducer/selectors';
import {fetchFavorites} from '../../../store/api-actions';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';


function FavoritesPage() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  });

  const cities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  return (
    <div className="page">
      <Header/>
      {
        favoriteOffers.length
          ? <Favorites offers={favoriteOffers} cities={cities}/>
          : <FavoritesEmpty/>
      }
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
