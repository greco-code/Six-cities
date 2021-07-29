import React, {useEffect} from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoriteOffers, getFavoritesLoadingStatus} from '../../../store/data-reducer/selectors';
import {fetchFavorites} from '../../../store/api-actions';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import {BookmarkButtonSettings} from '../../../settings';
import {changeFavoritesLoadingStatus} from '../../../store/action';
import {FAVORITES_LOADING_STATUS, OFFERS_LOADING_STATUS} from '../../../const';
import Toast from '../../../error-banner/error-banner';


function FavoritesPage() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const favoritesLoadingStatus = useSelector(getFavoritesLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFavoritesLoadingStatus(FAVORITES_LOADING_STATUS.NOT_LOADED));
    dispatch(fetchFavorites());
  }, [favoriteOffers]);

  const cities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  return (
    <div className="page">
      <Header/>
      {
        favoritesLoadingStatus === OFFERS_LOADING_STATUS.ERROR
        && <Toast/>
      }
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
