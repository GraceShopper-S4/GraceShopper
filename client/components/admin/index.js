import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, withRouter, Link, Switch, Route } from 'react-router-dom';
import SingleUser from './singleUser'
import AllUsers from './allUsers'
import {retrieveUsers, showForm} from '../../store';

import SingleProduct from "./singleProduct";
import AllProducts from "./allProducts";

class AdminIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    // componentDidMount() {
    //     this.props.fetchUsers()
    // }
    render() {
        console.log(this.props)
        return (

            <div>
                <h1>All users here</h1>
                  <Link to="/admin/users">All Users</Link>
                <h1>All Products</h1>
                <Link to="/admin/products">All Products</Link>
            </div>
        )
    }
}
const mapState = state => ({
    users: state.users,
    products: state.products.products
})
//  const mapDispatch = dispatch => ({
//      fetchUsers() {
//         dispatch(retrieveUsers())
//     }
//  })
export default withRouter(connect( mapState, null)(AdminIndex));

