import axios from "axios";

//Action Types
const ADD_ORDER = "ADD_ORDER";
const GET_ORDERS = "GET_ORDERS";
const PUT_STATUS = "PUT_STATUS";

//Action Creators
export const addOrder = order => ({
  type: ADD_ORDER,
  order
});

export const getOrders = orders => ({
  type: GET_ORDERS,
  orders
});

export const putStatus = order => ({
  type: PUT_STATUS,
  order
});

//InitialState
const initialState = {
  orders: [],
  order: {}
};
//Thunk Creators/Thunks
export const newOrder = order => dispatch => {
  axios
    .post("/api/orders", {
      totalPrice: order.totalPrice,
      status: order.status || "Cart"
    })
    .then(res => res.data[0])
    .then(order => {
      dispatch(addOrder(order));
    })
    .catch(err => console.error("Error", err));
};

export const updateStatus = id => {
  return dispatch => {
    axios
      .put("/api/orders", { id, status: "Shipped" })
      .then(res => res.data)
      .then(order => {
        dispatch(putStatus(order));
      });
  };
};

export const getOrdersByUser = () => dispatch => {
  axios
    .get("/api/orders")
    .then(res => res.data)
    .then(orders => {
      dispatch(getOrders(orders));
    });
};

//Reducers
export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return Object.assign({}, state, { order: action.order });
    case GET_ORDERS:
      return Object.assign({}, state, { orders: action.orders });
    case PUT_STATUS: {
      const index = state.orders.findIndex(x => {
        return x.id === action.order.id;
      });
      state.orders[index] = action.order;
      return Object.assign({}, state, { order: state.orders[index] });
    }
    default:
      return state;
  }
};
