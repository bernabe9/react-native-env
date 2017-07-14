import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  logoutSuccess: false
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT_SUCCESS: {
      return state.set('logoutSuccess', true);
    }
  }
}
