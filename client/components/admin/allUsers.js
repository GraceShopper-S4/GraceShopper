import React from "react";
import { connect } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import { retrieveUsers } from "../../store";


class AllUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
        this.props.fetchUsers()
    }

  render() {
    console.log("admin props", this.props);
    this.props.fetchUsers();
    return (
      <div>
      <h1>Render!!</h1>
        { this.props.users &&
          this.props.users.map(user => {
            return (
              <Card key={user.id}>
                <Card.Content>
                  <Card.Header>{user.email}</Card.Header>
                  <Card.Meta>Name</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Show Orders
                    </Button>
                    <Button basic color="red">
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            );
          })}
      </div>
    );
  }
}

// const mapState = state => state;
const mapState = state => ({
  users: state.users,
  products: state.products.products
});

const mapDispatch = dispatch => ({
  fetchUsers() {
    dispatch(retrieveUsers());
  }
});

export default connect(mapState, mapDispatch)(AllUsers);
