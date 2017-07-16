import { sessionService } from 'redux-react-native-session';

import userApi from '../api/userApi';
import { alertErrors } from '../utils/helpers';
import * as messages from '../constants/messages';
import * as types from './actionTypes';

export const submitLogin = () => ({
  type: types.SUBMIT_LOGIN
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const loginError = () => ({
  type: types.LOGIN_ERROR
});

export const login = user =>
  (dispatch) => {
    dispatch(submitLogin());
    return userApi.login({ user })
    .then(({ user }) => {
      sessionService.saveUser(user)
      .then(() => dispatch(loginSuccess()));
    }).catch(() => {
      dispatch(loginError());
      alertErrors(messages.loginError);
    });
  };

export const logout = () =>
  () => {
    userApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
    }).catch((err) => {
      throw (err);
    });
  };
