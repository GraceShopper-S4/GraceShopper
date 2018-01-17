import React, {Component} from 'react';
import {connect} from 'react-redux';

import store,{lineItems, getItemsByUserId, getSingleProduct, postNewAddress} from '../store';


class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props, 'cart props again')
        this.props.getAllYourItems(this.props.orders[0].id) // needs to be this.props.orders.id
    }

    onChange (event) {
        if (event.target.getAttribute('name') === 'shippingCity'){
            this.setState({shippingCity: event.target.value})
        } else if (event.target.getAttribute('name') === 'shippingState'){
            this.setState({shippingState: event.target.value})
        } else if (event.target.getAttribute('name') === 'shippingZip'){
            this.setState({shippingZipCode: event.target.value})
        } else if (event.target.getAttribute('name') === 'billingCity'){
            this.setState({billingCity: event.target.value})
        } else if (event.target.getAttribute('name') === 'billingState'){
            this.setState({billingState: event.target.value})
        } else if (event.target.getAttribute('name') === 'billingZip'){
            this.setState({billingZipCode: event.target.value})
        } 
    }

    onSubmit(event){
        event.preventDefault()
        const address = {shippingCity: this.state.shippingCity, 
            shippingState: this.state.shippingState, 
            shippingZipCode: this.state.shippingZipCode, 
            billingCity: this.state.billingCity,
            billingState: this.state.billingState,
            billingZipCode: this.state.billingZipCode
         }
        console.log('address before dispatch', address)
        store.dispatch(postNewAddress(address));
        console.log('hit on submit');
    }

    render() {
        console.log('cart props', this.props)
        return (
            <div>
                <div className="productsContainer">
                <div className="productGrid">
                {
                    this.props.lineItems &&
                    this.props.lineItems.map((lineItem)=> {
                    // this.props.getProduct(lineItem.productId)
                        return (
                        <div className="productCell" key={lineItem.id}>
                            <h3> Book Title: {lineItem.product.title} </h3>
                            <h4> Quantity: {lineItem.quantity} </h4>
                            <h4> Price: {lineItem.price} </h4>
                        </div>
                        )
                })
                }
                </div>
                </div>
                <div>
                <form onSubmit={ this.onSubmit}>
                    <input
                    type="text"
                    placeholder="Enter Shipping City"
                    name="shippingCity"
                    onChange={this.onChange}
                    value={this.state.shippingCity}
                    />
                    <br />
                    <input
                    type="text"
                    placeholder="Enter Shipping State"
                    name="shippingState"
                    onChange={this.onChange}
                    value={this.state.shippingState}
                    />
                    <br />
                    <input
                    type="text"
                    placeholder="Enter Shipping Zip"
                    name="shippingZip"
                    onChange={this.onChange}
                    value={this.state.shippingZip}
                    />
                    <br />
                    <input
                    type="text"
                    placeholder="Enter Billing City"
                    name="billingCity"
                    onChange={this.onChange}
                    value={this.state.billingCity}
                    />
                    <br />
                    <input
                    type="text"
                    placeholder="Enter Billing State"
                    name="billingState"
                    onChange={this.onChange}
                    value={this.state.billingState}
                    />
                    <br />
                    <input
                    type="text"
                    placeholder="Enter Billing Zip"
                    name="billingZip"
                    onChange={this.onChange}
                    value={this.state.billingZip}
                    />
                    <br />

                    <button type="Submit">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
      isLoggedIn: !!state.user.id,
      orders: state.orders.orders,
      products: state.products.products,
      product: state.products.product,
      lineItems: state.lineItems.lineItems
    }
  }

  const mapDispatch = (dispatch) => {
    return {

      getAllYourItems(orderId){
        dispatch(getItemsByUserId(orderId));
      },
      getProduct(id) {
        dispatch(getSingleProduct(id));
      }
      
    }
  }

  // The `withRouter` wrapper makes sure that updates are not blocked
  // when the url changes
  export default connect(mapState,mapDispatch)(Cart)