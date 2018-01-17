import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { editForm, updateExistingProduct } from "../../store";

class CampusEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
      this.props.
  }

  render() {
    const { handleSubmit, onChange, products, product } = this.props;
    console.log('Edit Products',this.props);
    return (
      <div>
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Title To Edit</label>
                <select
                name="productId"
                onChange={onChange}
                className="form-control"
                >
                {products.map(prod => {
                    return (
                    <option name="prodId" value={prod.id} key={prod.id}>
                        {prod.title}
                    </option>
                    );
                })}
                </select>
                
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <input
                placeholder="Title"
                name="title"
                value={product.title}
                onChange={onChange}
                />
            </Form.Field>
            <br />
            <Form.Field>
                <label>Description</label>
                <input
                placeholder="Description"
                name="description"
                value={product.description}
                onChange={onChange}
                />
            </Form.Field>
            <br />
            <Form.Field>
                <label>Price</label>
                <input
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={onChange}
                />
            </Form.Field>
            <br />
            <Form.Field>
                <label>Inventory</label>
                <input
                placeholder="Inventory"
                name="inventory"
                value={product.inventory}
                onChange={onChange}
                />
            </Form.Field>
            <br />
            <Form.Field>
                <label>Image Url</label>
                <input
                placeholder="Image Url"
                name="photo"
                value={product.photo}
                onChange={onChange}
                />
            </Form.Field>
          <br />
          <Button floated="right" color="green" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = (dispatch, ownProps, state) => {
  return {
    handleSubmit(e) {
      event.preventDefault();
      const id = ownProps.match.params.id;
      console.log("id", id);
      console.log("state", this.state);
      console.log("ownProps", ownProps);
      const { name, imageUrl, description } = ownProps.campus;
      const campusUpdate = { name, imageUrl, description };
      dispatch(showForm(false));
      dispatch(updateCampus(id, campusUpdate));
    },
    onChange(ev) {
      const change = {};
      change[ev.target.name] = ev.target.value;
      const campus = Object.assign(ownProps.campus, change);

      dispatch(editForm(campus));
    },
    onClose() {
      console.log("hit");
      dispatch(showForm(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusEdit);
