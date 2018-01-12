import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { browserRouter, Link} from 'react-router-dom';
import { getSingleProduct } from '../store';

export const DefaultHome = (props) => {
    // console.log("default home", props.products)
    return (
        <div className="productsContainer">
        <div className="productGrid">
          {
            props.products.map(product => {
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
                    </div>
                )
            })
          }
          </div>
          
        </div>
    )
}
const mapState = (state) => ({state})
// const mapDispatch =( dispatch ) => {
//     return (
//         getSingleProduct(){
//             dipatch
//         }
//     )
// }
export default connect(mapState, null)(DefaultHome)