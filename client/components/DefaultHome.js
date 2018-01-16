import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleProduct,retrieveProducts, addNewItem, newOrder, getOrdersByUser} from "../store";
import {Link} from "react-router-dom";

export class DefaultHome extends Component {
  //console.log('props in SingleProduct',props.passedProps.match.params.productId)
  //console.log('product 1')
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //this.props.getProducts()
  }

  render() {
    console.log("single props is", this.props);
    console.log("state is,", this.state);
    return (
        <div className="productsContainer">
        <div className="productGrid">
          {
            this.props.products ?
            this.props.products.map(product => {
                return (
                    <div className="productCell" key={product.id} >
                        <Link to={`/products/${product.id}`}>
                    
                        <div>
                            <h3>
                                {product.title}
                            </h3>
                        </div>
                        <div>
                        <img src={product.photo} className="responsiveImage"/>
                        </div>
                        <div>
                            <p>
                                ${product.price}
                            </p>
                            <p>
                            Stock: {product.inventory}
                            </p>
                            
                            </div>
                            </Link>
                            <div>
                            <p>
                            Genres:
                            </p>
                            {product.genres.map(genre => {
                                return (
                                    <p key={genre.id}>
                                        <Link to={`/genres/${genre.body}`}>
                                        {genre.body}
                                        </Link>
                                    </p>
                                )
                            })}
                           <input
                              type="text"
                              placeholder="Enter quantity"
                              name="quantity"
                              onChange={this.props.onChange}
                              value={this.state.quantityValue}
                            />
                        </div>
                            <button onClick={() => {
                              this.props.getProduct(product.id)
                              this.props.addToCart(product.id,this.props.product.price)}}>
                            Add To Cart
                            </button>
                    </div>
                )
            }) : null
          }
          </div>
          
        </div>
    )
}
}




const mapStateToProps = state => {
    return {
      product: state.products.product,
      products: state.products.products,
      item: state.lineItems.singleItem,
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getProduct(id) {
        dispatch(getSingleProduct(id));
      },
      getProducts() {
        dispatch(retrieveProducts());
      },
      addToCart(productId, price,e) {
        //price, quantity, orderId, productId
        //Orders we need totalPrice, status, userId
       // const quantity = {}
        //quantity[e.target.name] = e.target.value;
       // console.log('addToCart ', quantity)
        let totalPrice = 0;
        let order = {totalPrice}
        dispatch(newOrder(order));
        // dispatch again to receive all orders 
        console.log("order is: ", order)
        //dispatch(getOrdersByUser());
       // let item = {price, productId, }
       // dispatch(addNewItem(item))
      },
      onChange(item,e) {
       // const updatedItem = item;
       // updatedItem.quantity = e.target.value;
        
  
        //console.log("event onChange body", updatedReview.body);
        //console.log("event onChange rating", updatedReview.rating);
       // dispatch(updateItem(updatedItem));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(DefaultHome);
  