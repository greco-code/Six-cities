import {APIRoute, AuthorizationStatus} from '../const';
import {ActionCreator} from './action';
import {adaptOfferToClient} from '../adapters';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptOfferToClient(offer)))))
    .then(() => dispatch(ActionCreator.changeOffersLoadingStatus()))
);

export const fetchComments = () => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.saveLogin(data.email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
