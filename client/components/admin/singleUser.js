import React from 'react'
import {connect} from 'react-redux'
import { Button, Card, Image } from "semantic-ui-react";
import {deleteAUser,updateExistingUser, retrieveUsers  } from '../../store';
class SingleUser extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {deleteUser, curUser, toggleAdmin} = this.props
        return (
            <Card>
              <Card.Content>
                <Card.Header>{curUser.email}</Card.Header>
                <Card.Meta>{curUser.id}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className="ui three buttons">
                  <Button basic color="green">
                    Show Orders
                  </Button>
                  <Button basic color="yellow" onClick={(e) => toggleAdmin(curUser.id, {isAdmin: !curUser.isAdmin}, e)}>
                    Toggle Admin
                  </Button>
                  <Button basic color="red" onClick={(e) => this.props.deleteUser(curUser.id, e)}>
                    Delete
                  </Button>
                </div>
              </Card.Content>
            </Card>
          )
    }
}
const mapDispatch = dispatch => ({
    deleteUser(userId, e) {
        e.preventDefault()
        dispatch(deleteAUser(userId))
    },
    toggleAdmin(userId,adminToggle, e) {
        e.preventDefault()
        dispatch(updateExistingUser(userId, adminToggle))
        dispatch(retrieveUsers())
    }
})
export default connect(null,mapDispatch)(SingleUser)