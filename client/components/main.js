import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { BrowserRouter as Router, withRouter, Link, Switch, Route } from "react-router-dom";
import {logout} from '../store'
import {Reviews} from './Reviews'
import {retrieveProducts, newOrder, getOrdersByUser} from '../store'
import DefaultHome from './DefaultHome'
import SingleProduct  from './SingleProduct'
import Cart from './Cart'
import SingleGenre from './singleGenre'
import AdminHome from './admin'
 
/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class Main extends React.Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      //this.props.initializeCart()
      this.props.getProducts()
    }
  render() {

    const {children, handleClick, isLoggedIn} = this.props
    console.log('props',this.props)
    return (
      <div>
        <h1>BOILERMAKER</h1>
        <nav>
          {
            isLoggedIn
              ? <div>
                {/* The navbar will show these links after you log in */}
                <Link to="/home">Home</Link>
                <a href="#" onClick={handleClick}>Logout</a>
                <Link to="/cart"> Cart </Link>
              </div>
              : <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart"> Cart </Link>
                
              </div>
          }
          {children}
        </nav>
        <hr />
        <Router>
          <Switch>
            <Route exact path='/products/:productId' component={SingleProduct} />
            <Route exact path='/products'  render={()=><DefaultHome products={this.props.products} /> } />
            <Route exact path='/cart' component={Cart} />
            <Route  path='/genres/*' component={SingleGenre} />
          </Switch> 
        </Router>
      </div>
    )
  }
  
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    products: state.products.products,
    user: state.user,
    orders: state.orders.orders,
    // products: state.products.products
   // product: state.products.product
  }
}

const mapDispatch = (dispatch,ownProps) => {
  return {
    handleClick () {
      dispatch(logout());
    },
    getProducts() {
      dispatch(retrieveProducts());
    }
    //  getProduct(id){
    //    dispatch(getSingleProduct(id));
    //  }

  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
