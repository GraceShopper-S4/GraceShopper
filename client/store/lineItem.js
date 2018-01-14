import React from 'react';

//Action Types 
const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
const ADD_SINGLE_ITEM = 'ADD_SINGLE_ITEM';
const REMOVE_SINGLE_ITEM = 'REMOVE_SINGLE_ITEM';

//Action Creators
export const getItems = (items) => ({
    type: GET_ALL_ITEMS,
    items
});

export const addItem = (item) => ({
    type: ADD_SINGLE_ITEM,
    item
});

export const removeItem = (itemId) => ({
    type: REMOVE_SINGLE_ITEM,
    itemId
})

//InitialState 
const initialState = {
    lineItems: [],
    singleItem: {}
}
//Thunk Creators/Thunks
export const addNewItem = (id) => (dispatch) => {
    axios.post('/api/lineItem', id)
}
//Reducers
export const LineItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_ITEMS: 
        return [...action.items]
        case ADD_SINGLE_ITEM: 
        return [...state.lineItems, ...action.item]
        case REMOVE_SINGLE_ITEM:
        return state.lineItems.filter(item => item.id !== action.itemId)
        default: return state
    }
}
