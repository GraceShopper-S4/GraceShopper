import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleProduct,retrieveProducts, addNewItem} from "../store";
import {Link} from "react-router-dom";

export class DefaultHome extends Component {
  //console.log('props in SingleProduct',props.passedProps.match.params.productId)
  //console.log('product 1')
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.getProducts()
  }

  render() {
    console.log("single props is", this.props);
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
                        </div>
                            <button onClick={() => addToCart(product.id)}>
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
      products: state.products.products
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getProduct(id) {
        dispatch(getSingleProduct(id));
      },
      getProducts() {
        dispatch(retrieveProducts());
      },
      addToCart(id) {
        dispatch(addNewItem(id));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(DefaultHome);
  