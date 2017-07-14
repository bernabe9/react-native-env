import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userApi from '../api/userApi';
import * as types from './actionTypes';

export const login = (user, onSuccess) =>
  (dispatch) =>
    userApi.login({ user })
    .then(({ user }) => {
      sessionService.saveUser(user)
    }).catch((err) => {
      throw new SubmissionError({
        _error: err.errors[0]
      });
    });

export const logout = () =>
  (dispatch) => {
    userApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
    }).catch((err) => {
      throw(err);
    });
  };
