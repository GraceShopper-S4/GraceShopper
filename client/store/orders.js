
import axios from 'axios'

//Action Types 
const ADD_ORDER = 'ADD_ORDER'
const GET_ORDERS = 'GET_ORDERS'

//Action Creators
export const addOrder = (order) => ({
    type: ADD_ORDER,
    order
});

export const getOrders = (orders) => ({
    type: GET_ORDERS,
    orders
});

//InitialState 
const initialState = {
    orders: [],
    order: {}
}
//Thunk Creators/Thunks
export const newOrder = (order) =>
dispatch => {
    axios.post('/api/orders', { totalPrice: order.totalPrice , status: order.status || 'Cart'})
    .then((res) => res.data[0])
    .then(order => {
        console.log('posted order', order)
        dispatch(addOrder(order))
    })
    
    .catch(err => console.error('Error', err))
}

export const getOrdersByUser = () => 
dispatch => {
    console.log('right before axios'    )
    axios.get('/api/orders')
    .then(res => res.data)
    .then(orders => {
        console.log('orders in thunk is ', orders)
        dispatch(getOrders(orders))
    })
    .catch(err => console.log(err))
}

//Reducers
export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER: 
        return Object.assign({}, state, {order: action.order});
        case GET_ORDERS:
        return Object.assign({}, state, {orders: action.orders});
        default: 
        return state
    }
}
