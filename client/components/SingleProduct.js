import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getSingleProduct } from '../store';


export class SingleProduct extends Component {
    //console.log('props in SingleProduct',props.passedProps.match.params.productId)
    //console.log('product 1')
    constructor(props) {
        super(props)
    }
  
    componentDidMount(){
        const productId = this.props.match.params.productId;
        this.props.getProduct(productId);
    }   

    render () {
        console.log("single props is", this.props.product.reviews)
        return (
            <div className="productCell" key={this.props.product.id} >           
                <div>
                    <h3>
                        {this.props.product.title}
                    </h3>
                </div>
                <div>
                <img src={this.props.product.photo} className="responsiveImage"/>
                </div>
                <div>
                    <p>
                        ${this.props.product.price}
                    </p>
                    <p>
                    Stock: {this.props.product.inventory}
                    </p>
                </div>
                <div>
                    <h3> Reviews </h3>
                    {
                    
                       this.props.product.reviews ? this.props.product.reviews.map((review) => {
                            return (
                                <div key={review.id}>
                                <p>
                                    {review.body}
                                </p>
                                <p>
                                    {review.rating}
                                </p>
                                </div>
                            ) 
                        }) :null
                    }
                </div>
            </div>

        )
    }
}

const mapStateToProps=(state)=> {
    return {
        product: state.products.product
    }
}


const mapDispatchToProps = (dispatch) => {
      return {
            getProduct(id){
                dispatch(getSingleProduct(id))
            }
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)