// 3. Define Redux Reducers (reducers.js)
"use client"
import { combineReducers } from 'redux';
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../Redux/Reducer';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case UPDATE_ITEM:
      return state.map(item => item.id === action.payload.id ? action.payload : item);
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
});