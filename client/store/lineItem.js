import React from "react";
import axios from "axios";

//Action Types
const GET_ALL_ITEMS = "GET_ALL_ITEMS";
const ADD_SINGLE_ITEM = "ADD_SINGLE_ITEM";
const REMOVE_SINGLE_ITEM = "REMOVE_SINGLE_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";

//Action Creators
export const getItems = items => ({
  type: GET_ALL_ITEMS,
  items
});

export const addItem = item => ({
  type: ADD_SINGLE_ITEM,
  item
});

export const removeItem = itemId => ({
  type: REMOVE_SINGLE_ITEM,
  itemId
});

//InitialState
const initialState = {
  lineItems: [],
  singleItem: {}
};
//Thunk Creators/Thunks
export const addNewItem = item => dispatch => {
  axios
    .post("/api/lineItems", item)
    .then(res => res.data[0])
    .then(() => {
      dispatch(addItem);
    });
};

export const getItemsByUserId = orderId => dispatch => {
  axios
    .get(`/api/lineItems/${orderId}`)
    .then(res => res.data)
    .then(items => {
      dispatch(getItems(items));
    });
};

//Reducers
export const LineItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return Object.assign({}, state, { lineItems: action.items });
    case ADD_SINGLE_ITEM:
      return Object.assign({}, state, {
        lineItems: state.lineItems.concat(action.item)
      });
    case REMOVE_SINGLE_ITEM:
      return state.lineItems.filter(item => item.id !== action.itemId);
    default:
      return state;
  }
};
