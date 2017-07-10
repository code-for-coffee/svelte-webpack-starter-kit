import { combineReducers } from 'redux';

import {
  UPDATE_SCORE,
  CHANGE_NAME
} from '../actions/types';

const initialState = {
  score: 0,
  person: 'Mysterious Stranger'
}

function scoreApp(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SCORE:
      return Object.assign({}, state, {
        score: action.score + 1
      });
    case CHANGE_NAME:
      return Object.assign({}, state, {
        person: action.name
      });
    default:
      return state;
  }
}

export default scoreApp;