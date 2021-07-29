import {combineReducers} from 'redux';
import {interfaceReducer} from './interface-reducer/interface-reducer';
import {dataReducer} from './data-reducer/data-reducer';
import {loginReducer} from './login-reducer/login-reducer';

export const NameSpace = {
  INTERFACE: 'INTERFACE',
  DATA: 'DATA',
  LOGIN: 'LOGIN',
};

export default combineReducers({
  [NameSpace.INTERFACE]: interfaceReducer,
  [NameSpace.DATA]: dataReducer,
  [NameSpace.LOGIN]: loginReducer,
});
