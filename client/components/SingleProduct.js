import React from 'react';
import { connect } from 'react-redux'
import { getSingleProduct } from "../store";

export const SingleProduct =(props)=>{
    console.log('props',props)
    return(
        <h1>Hello</h1>

    )
}

const mapStateToProps=(state)=>{
    return{
        products: state.products
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        getProduct(){
            dispatch(getSingleProduct());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)