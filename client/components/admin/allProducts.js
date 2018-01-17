import React from "react";
import { connect } from "react-redux";

import showForm, { retrieveProducts } from "../../store";
import SingleProduct from "./singleProduct";
import EditProduct from './editProduct';
import AddProduct from "./addProduct";
import { Button } from "semantic-ui-react";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {showForm } = this.props;
    console.log("admin Product props !!!!", this.props);
    return (
      <div>
        <div>
            <AddProduct {...this.props} />
            <EditProduct {...this.props} />
        </div>
        {this.props.products &&
          this.props.products.map(product => {
            return <SingleProduct key={product.id} curProduct={product} />;
          })}
      </div>
    );
  }
}

// const mapState = state => state;
const mapState = state => ({
  users: state.users.users,
  products: state.products.products,
  form: state.form
});

const mapDispatch = dispatch => ({
  fetchProducts() {
    dispatch(retrieveProducts());
  }
});

export default connect(mapState, mapDispatch)(AllProducts);
