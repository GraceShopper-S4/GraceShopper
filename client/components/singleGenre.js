import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { retrieveByGenre } from '../store/genres'
import SingleProduct from './SingleProduct'
 class SingleGenre extends Component{
   constructor(props) {
       super(props)
   }
   componentWillMount() {
       this.props.getGenreProducts()
   }
   render() {
    console.log(this.props.genres)
    return (
        <div>
        <h1> </h1>
         {
           this.props.genres.map(product => {
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
                        <button onClick={() => addToCart(product.id)}>
                        Add To Cart
                        </button>
                </div>
            )
            })   
        }
        </div>
    )
    }
 }

const mapState = ({genres}) => ({genres})
const mapDispatch = (dispatch, ownProps) => ({
    getGenreProducts() {
        dispatch(retrieveByGenre(ownProps.match.params[0]))
    }
})
export default connect(mapState, mapDispatch)(SingleGenre)