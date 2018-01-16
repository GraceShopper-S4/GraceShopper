import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome, Cart, SingleProduct, SingleGenre, DefaultHome} from './components'
import {me} from './store'
import {AllUsers} from './components/admin/allUsers'
import Admin from './components/admin'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            
            <Route exact path='/products/:productId' component={SingleProduct} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products'  render={()=><DefaultHome products={this.props.products} orders={this.props.orders} /> } />
            <Route  path='/genres/*' component={SingleGenre} />
          
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                 <Route path="/home" component={UserHome} />
                 <Route exact path="/admin/users" component={AllUsers} />
                
                  <Route path="/home" component={UserHome} />
                  <Route exact path='/products/:productId' component={SingleProduct} />
                  <Route exact path='/cart' component={Cart} />
                  <Route exact path='/products'  render={()=><DefaultHome products={this.props.products} orders={this.props.orders} /> } />
                  <Route  path='/genres/*' component={SingleGenre} />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
            
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
