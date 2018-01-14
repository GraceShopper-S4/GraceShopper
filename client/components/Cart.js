import React, {Component} from 'react';
import {connect} from 'react-redux';
import {lineItems} from '../store';

class Cart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('cart')
        return (
            <h1>YO ITS THE CART </h1>
        )
    }
}

export default connect(null, null)(Cart)