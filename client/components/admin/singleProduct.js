import React from "react";
import { connect } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import {
  deleteAProduct,
  updateExistingProduct,
  retrieveProduct,
  retrieveProducts
} from "../../store";
import { Link } from "react-router-dom";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("singleProductProps****", this.props);
    let { deleteProduct, curProduct } = this.props;
    return (
      <div>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated="right" size="mini" src={curProduct.photo} />
              <Card.Header>{curProduct.title}</Card.Header>
              <Card.Meta>Price :{curProduct.price}</Card.Meta>
              <Card.Meta>Inventory :{curProduct.inventory}</Card.Meta>
              <Card.Description>
                Description: {curProduct.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Link to={`/admin/products/${curProduct.id}`}>
                  <Button basic color="green">
                    Edit
                  </Button>
                </Link>
                <Button
                  basic
                  color="red"
                  onClick={e => this.props.deleteProduct(curProduct.id, e)}
                >
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
const mapDispatch = dispatch => ({
  deleteProduct(productId, e) {
    dispatch(deleteAProduct(productId));
    dispatch(retrieveProducts());
  },

  editProduct(userId, adminToggle, e) {
    e.preventDefault();
    dispatch(updateExistingUser(userId, adminToggle));
    dispatch(retrieveUsers());
  }
});
export default connect(null, mapDispatch)(SingleProduct);
