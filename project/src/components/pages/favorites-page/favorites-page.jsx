import React, {useEffect} from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoriteOffers} from '../../../store/data-reducer/selectors';
import {fetchFavorites} from '../../../store/api-actions';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import {BookmarkButtonSettings} from '../../../settings';


function FavoritesPage() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  // console.log(typeof favoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  const cities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  return (
    <div className="page">
      <Header/>
      {
        favoriteOffers.length
          ? <Favorites favoriteOffers={favoriteOffers} cities={cities} bookmarkSettings={BookmarkButtonSettings.FAVORITES}/>
          : <FavoritesEmpty/>
      }
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
