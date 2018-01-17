import React from "react";
import { connect } from "react-redux";
import { editForm, addProduct, showForm, retrieveProduct } from "../../store"; // change
import { Button, Checkbox, Form } from "semantic-ui-react";

const AddProductContainer = props => {
  console.log("Product Form Props: ", props);
  const { form, onSubmit, onChange, product } = props;
  return (
    <div>
      {
        <Form onSubmit={onSubmit}>
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
          <Button
            floated="right"
            color="green"
            type="submit"
            
          >
            Submit
          </Button>
        </Form>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    form: state.form,
    product: {}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange(ev) {
      const { name } = ev.target;
      dispatch(editForm({ [name]: ev.target.value }));
    },
    onSubmit(ev) {
      ev.preventDefault();
      const title = ev.target.title.value;
      const description = ev.target.description.value;
      const price = ev.target.price.value;
      const inventory = ev.target.inventory.value;
      const photo =
        ev.target.photo.value ||
        "https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk.png";
      dispatch(showForm(false));
      dispatch(addProduct({ title, description, price, inventory, photo }));
      dispatch(retrieveProduct());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);
