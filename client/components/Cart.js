import React, {Component} from 'react';
import {connect} from 'react-redux';
import {lineItems} from '../store';

class Cart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('cart props', this.props)
        return (
            <h1>YO ITS THE CART </h1>
        )
    }
}


const mapState = (state) => {
    return {
      isLoggedIn: !!state.user.id,
      orders: state.orders.orders,
      products: state.products.products
     // product: state.products.product
    }
  }
  
  const mapDispatch = (dispatch) => {
    return {
      
    }
  }
  
  // The `withRouter` wrapper makes sure that updates are not blocked
  // when the url changes
  export default connect(null,null)(Cart)