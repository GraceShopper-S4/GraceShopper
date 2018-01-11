import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export const DefaultHome = (props) => {
    console.log(props.products)
    return (
        <div className="productsContainer">
        <div className="productGrid">
          {
            props.products.map(product => {
                return (
                    <div className="productCell" key={product.id}>
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
                    </div>
                )
            })
          }
          </div>
          
        </div>
    )
}
const mapState = (state) => ({state})
export default connect(mapState, null)(DefaultHome)