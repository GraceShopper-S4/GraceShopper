import React from 'react'
import {connect} from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react';
class AllUsers extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            
        )
    }
}
const mapState = state => state.users;
export default connect(mapState,null)(AllUsers)