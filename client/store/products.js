import axios from 'axios'
import history from '../history';

//Actions
    const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
    const GET_PRODUCT = 'GET_PRODUCT';
    const ADD_PRODUCT = 'ADD_PRODUCT';
    const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
//Action Creators
    const getAllProducts = (products) => ({
        type: GET_ALL_PRODUCTS,
        products
    })
    const getProduct = (singleProduct) => ({
        type: GET_PRODUCT,
        singleProduct
    })
    const addProduct = (product) => ({
        type: ADD_PRODUCT,
        product
    })
    const removeProduct = (product) => ({
        type: REMOVE_PRODUCT,
        product
    })
//Thunks/Thunk Creators 
    export const retrieveProducts = () => dispatch => {
        axios.get('/api/products')
        .then(res => res.data)
        .then((products) => {
            dispatch(getAllProducts(products))
        }) 
    }
    const getSingleProduct = id => dispatch => {
        axios.get(`/api/products/${id}`)
        .then(res => res.data)
        .then((product) => {
            dispatch(getSingleProduct(product))
        }) 
    }
    const adminAddProduct = () => dispatch => {
        axios.get('/api/products')
        .then(products => {
            dispatch(getAllProducts(products))
        })
    }
    const adminRemoveProduct = () => dispatch => {
        axios.get('/api/products')
        .then(products => {
            dispatch(getAllProducts(products))
        })
    }
//Reducer 
    export const ProductsReducer = (products = [], action) => {
        switch(action.type) {
            case GET_ALL_PRODUCTS: 
            return [...action.products]

            case GET_PRODUCT: 
            return action.product

            default: 
            return products
        } 
    }