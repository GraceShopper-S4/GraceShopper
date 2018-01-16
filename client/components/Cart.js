import React, {Component} from 'react';
import {connect} from 'react-redux';
import {lineItems, getItemsByUserId, getSingleProduct} from '../store';


class Cart extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log(this.props, 'cart props again')
        this.props.getAllYourItems(this.props.orders.id) // needs to be this.props.orders.id
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
                {/*<form onSubmit={e => this.props.onSubmit(this.props.review, e, this.props.product.id)}>
                    <input
                    type="text"
                    placeholder="Enter a Review"
                    name="body"
                    onChange={e => this.props.onChange(this.props.review, e)}
                    value={this.props.review.body}
                    />

                    <br />
                    <button type="Submit">Submit</button>
            </form>*/}
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