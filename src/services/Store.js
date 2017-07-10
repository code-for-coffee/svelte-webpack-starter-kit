import { createStore } from 'redux';
import scoreApp from './reducers/reducers';
import { changeName, updateScore } from './actions/types';

let store = createStore(scoreApp);

export default store;