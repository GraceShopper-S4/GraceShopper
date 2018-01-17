import React from "react";
import { connect } from "react-redux";

import { retrieveUsers } from "../../store";
import SingleUser from './singleUser';

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
        this.props.fetchUsers()
    }

  render() {
    console.log("admin props", this.props);
    return (
      <div>
      <h1>Render!!</h1>
        { this.props.users &&
          this.props.users.map(person => {
            return (
            <SingleUser key={person.id} curUser={person} />
            )
        })}
      </div>
    );
  }
}

// const mapState = state => state;
const mapState = state => ({
  users: state.users.users,
  products: state.products.products
});

const mapDispatch = dispatch => ({
  fetchUsers() {
    dispatch(retrieveUsers());
  }
});

export default connect(mapState, mapDispatch)(AllUsers);
