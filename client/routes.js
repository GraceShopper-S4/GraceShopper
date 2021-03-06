
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome, Cart, SingleProduct, SingleGenre, DefaultHome} from './components'
import {me, getOrdersByUser, newOrder} from './store'
import AllUsers from './components/admin/allUsers'
import AllProducts from './components/admin/allProducts'
import Admin from './components/admin'
import EditProduct from './components/admin/editProduct'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    if (this.props.isLoggedIn) {
      this.props.initializeCart();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products/:productId" component={SingleProduct} />
            <Route exact path="/cart" render={() => <Cart orders={this.props.orders} />}/>
            <Route exact path="/products"  render={() => <DefaultHome products={this.props.products} orders={this.props.orders} /> } />
            <Route  path="/genres/*" component={SingleGenre} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                 <Route path="/home" render={() => (<DefaultHome products={this.props.products} orders={this.props.orders} /> )}/>
                 <Route exact path="/admin/users" component={AllUsers} />
                 <Route exact path="/admin" component={Admin} />
                 <Route exact path="/admin/products" component={AllProducts} />
                 <Route exact path="/admin/products/:id" component={ EditProduct } />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    orders: state.orders.orders
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    initializeCart() {
      let totalPrice = 0;
      let order = { totalPrice };
      dispatch(newOrder(order));
      dispatch(getOrdersByUser());
    }
  };
};

export default connect(mapState, mapDispatch)(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
