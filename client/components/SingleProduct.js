import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleProduct, writeReview, updateReview } from "../store";

export class SingleProduct extends Component {
  //console.log('props in SingleProduct',props.passedProps.match.params.productId)
  //console.log('product 1')
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getProduct(productId);
    console.log(productId);
  }

  render() {
    console.log("single props is", this.props);
    return (
      <div className="productCell" key={this.props.product.id}>
        <div>
          <h3>{this.props.product.title}</h3>
        </div>
        <div>
          <img src={this.props.product.photo} className="responsiveImage" />
        </div>
        <div>
          <p>${this.props.product.price}</p>
          <p>Stock: {this.props.product.inventory}</p>
        </div>
        <div>
          <h3> Reviews </h3>
          <form onSubmit={e => this.props.onSubmit(this.props.review, e, this.props.product.id)}>
            <input
              type="text"
              placeholder="Enter a Review"
              name="body"
              onChange={e => this.props.onChange(this.props.review, e)}
              value={this.props.review.body}
            />
            <h3>Rating</h3>
            <select
              name="rating"
              onChange={e => this.props.onChange(this.props.review, e)}
              value={this.props.review.rating}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br />
            <button type="Submit">Submit</button>
          </form>
          <hr />
          <h2>Customer Reviews</h2>
          {this.props.product.reviews
            ? this.props.product.reviews.map(review => {
                return (
                  <div key={review.id}>
                    <p>
                      Review:{review.body}
                      <br />
                      Rating:{review.rating}
                    </p>

                    <br />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.product,
    review: state.reviews.updateReview
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct(id) {
      dispatch(getSingleProduct(id));
    },
    onChange(review, e) {
      const updatedReview = review;
      console.log("review", review);
      if (e.target.getAttribute("name") === "body") {
        updatedReview.body = e.target.value;
      }
      if (e.target.getAttribute("name") === "rating") {
        updatedReview.rating = e.target.value;
      }

      console.log("event onChange body", updatedReview.body);
      console.log("event onChange rating", updatedReview.rating);
      dispatch(updateReview(updatedReview));
    },
    onSubmit(review, e, productId) {
      e.preventDefault();
      review.productId = productId;
      console.log("onSubmit before dispatch", review);
      dispatch(writeReview(review));
      dispatch(updateReview({}));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
