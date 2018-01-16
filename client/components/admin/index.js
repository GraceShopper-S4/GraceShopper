import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, withRouter, Link, Switch, Route } from "react-router-dom";
import SingleUser from './singleUser'
import AllUser from './allUsers'

class AdminIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        console.log(this.props)
        return(
            <div>Admin is here</div>
        )
    }
}
const mapState = state => ({
    users: state.users,
    products: state.products.products
})
export default connect(mapState,null)(AdminIndex)

