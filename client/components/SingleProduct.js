import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getSingleProduct } from "../store";


export class SingleProduct extends Component {
    //console.log('props in SingleProduct',props.passedProps.match.params.productId)
    //console.log('product 1')
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        const productId = this.props.match.params.productId;
        props.getProduct(productId);
    }

    render () {
        console.log(this.props);
       // console.log('product id is', productId)
      //  console.log("props in singleProduct is", props)
        return (
            <h1>Hello</h1>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{
        products: state.products
    }
}

const mapDispatchToProps= (dispatch,ownProps)=>{
    return{
        getProduct(id){
            dispatch(getSingleProduct(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)