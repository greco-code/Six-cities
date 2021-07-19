import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.LOGIN].authorizationStatus;
export const getLogin = (state) => state[NameSpace.LOGIN].login;
