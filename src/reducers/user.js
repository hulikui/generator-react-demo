import {createAction} from 'redux-action';
import Immutable from 'immutable';
import {message} from 'antd';

import * as Actions from '../actions/ActionTypes';
import {user} from '../common/api';

const initialState = Immutable.fromJS({
  userProfile: {},
});

export default function users(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.GET_USER_INFO:
      return state.set('userProfile', action.payload);
    default:
      return state;
  }
}

const getUserCreator = createAction(Actions.GET_USER_INFO);
export const getUserProfile = (username) => (dispatch, getState) => {
  user.getUserProfile(username).then(res => {
    if (res.id) {
      dispatch(getUserCreator(res));
    } else {
      message.error(res.message);
    }
  })
}