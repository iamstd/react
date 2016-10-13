import { combineReducer } from 'redux';
import order from './order.js';
import addtodo from './addtodo.js';

const rootReducer = combineReducer({
  order,
  addtodo
});

export default rootReducer;
