import React from 'react'
import {connect} from 'react-redux'

class SingleUser extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>THIS BE A SPECIFIC USER YO UP IN HERE YO</div>
        )
    }
}

export default connect(null,null)(SingleUser)