import axios from 'axios';

//initial State
const initialState = {
  products: [],
  singleProduct: {},
  form: false
};

//Action Types
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_THIS_PRODUCT = 'REMOVE_THIS_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const SHOW_FORM = 'SHOW_FORM';
const EDIT_FORM = 'EDIT_FORM';

//Action Creators
const getProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
});
const getSingleProduct = singleProduct => ({
  type: GET_SINGLE_PRODUCT,
  singleProduct
});

const addNewProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  };
};

const updateProduct = () => ({
  type: UPDATE_PRODUCT
});

const deleteThisProduct = productId => ({
  type: REMOVE_THIS_PRODUCT,
  productId
});

export const showForm = input => {
  return {
    type: SHOW_FORM,
    input
  };
};

export const editForm = input => {
  return {
    type: EDIT_FORM,
    input
  };
};


//Thunks/Thunk Creators

export const addProduct = product => {
  return dispatch => {
    return axios
      .post('/api/products', product)
      .then(res => res.data)
      .then(newProduct => dispatch(addNewProduct(newProduct)));
  };
};

export const retrieveProduct = () => dispatch => {
  axios
    .get('/api/products')
    .then(res => res.data)
    .then(products => dispatch(getProducts(products)));
};

export const retrieveSingleProduct = id => dispatch => {
  axios
    .get(`/api/products/${id}`)
    .then(res => res.data)
    .then(product => dispatch(getSingleProduct(product)));
};

export const deleteAProduct = id => dispatch => {
  axios
    .delete(`/api/products/${id}`)
    .then(res => res.data)
    .then(product => dispatch(deleteThisProduct(id)));
};
export const updateExistingProduct = (id, toChange) => dispatch => {
  console.log(
    toChange,
    'this is the value we are passing. It is currently this'
  );
  axios
    .put(`/api/products/${id}`, toChange)
    .then(res => res.data)
    .then(() => dispatch(updateProduct()));
};

//Reducer

export const AdminProductReducer = (state = initialState, action) => {
  console.log('its here');
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { products: [...action.products] };

    case GET_SINGLE_PRODUCT:
      return {
        products: [...state.products],
        singleProduct: action.product
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, ...action.product]
      };

    case REMOVE_THIS_PRODUCT:
      return {
        product: state.products.filter(product => product.id !== action.productId),
        singleProduct: {}
      };

    case UPDATE_PRODUCT:
      return {
        products: [...state.products],
        singleProduct: {}
      };
    case SHOW_FORM:
      return Object.assign({}, state, { form: action.input });

    case EDIT_FORM:
      return Object.assign({}, state, { input: action.input });

    default:
      return state;
  }
};
