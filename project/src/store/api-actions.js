import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  changeCommentSendingStatus,
  changeOfferLoadingStatus,
  changeOffersLoadingStatus,
  loadComments,
  loadFavorites,
  loadNearby,
  loadOffer,
  loadOffers,
  redirect,
  requireAuthorization,
  saveLogin
} from './action';
import {adaptCommentToClient, adaptOfferToClient} from '../adapters';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((offer) => adaptOfferToClient(offer)))))
    .then(() => dispatch(changeOffersLoadingStatus(true)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .then(() => dispatch(changeOfferLoadingStatus(true)))
    .catch(() => dispatch(redirect(AppRoute.ERROR)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data.map((comment) => adaptCommentToClient(comment)))))
);

export const fetchNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNearby(data.map((offer) => adaptOfferToClient(offer)))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(data.map((offer) => adaptOfferToClient(offer)))))
);

export const postComment = (id, comment) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, comment)
    .then(() => dispatch(changeCommentSendingStatus(true)))
);

export const addToFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(() => dispatch(fetchFavorites()))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(saveLogin(data.email)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirect(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
