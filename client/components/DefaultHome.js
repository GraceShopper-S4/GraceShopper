import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleProduct, retrieveProducts, addNewItem , getOrdersByUser, newOrder} from "../store";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button, Grid, Segment, Input } from "semantic-ui-react";

export class DefaultHome extends Component {
  //console.log('props in SingleProduct',props.passedProps.match.params.productId)
  //console.log('product 1')
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //this.props.getProducts()
    this.props.initializeCart()
  }

  onChange(e) {
  
    this.setState({quantity: e.target.value})
  }

  render() {
    console.log("single props is", this.props);
   // console.log("state is,", this.state);
    return (
      // <div className="productsContainer">
      // <div className="productGrid">
      //   {
      //     this.props.products ?
      //     this.props.products.map(product => {
      //         return (
      //             <div className="productCell" key={product.id} >
      //                 <Link to={`/products/${product.id}`}>

      //                 <div>
      //                     <h3>
      //                         {product.title}
      //                     </h3>
      //                 </div>
      //                 <div>
      //                 <img src={product.photo} className="responsiveImage"/>
      //                 </div>
      //                 <div>
      //                     <p>
      //                         ${product.price}
      //                     </p>
      //                     <p>
      //                     Stock: {product.inventory}
      //                     </p>

      //                     </div>
      //                     </Link>
      //                     <div>
      //                     <p>
      //                     Genres:
      //                     </p>
      //                     {product.genres.map(genre => {
      //                         return (
      //                             <p key={genre.id}>
      //                                 <Link to={`/genres/${genre.body}`}>
      //                                 {genre.body}
      //                                 </Link>
      //                             </p>
      //                         )
      //                     })}

      //                 </div>

      //                       <button onClick={() => {
                            //   let productPrice;
                            //   this.props.products.forEach((eachProduct) => { if (product.id === eachProduct.id) productPrice = eachProduct.price})
                            //   this.props.addToCart(product.id, productPrice, this.props.orders[0].id, this.state.quantity) }}
                            //   >
                            // Add To Cart
      //                        </button>
      //             </div>
      //         )
      //     }) : null
      //   }
      //   </div>

      // </div>
      <div className="defaultHome">
        <h1>Books</h1>
        <Link to={{}}>
          <Button className="cart" floated="right">
            CART
          </Button>
        </Link>

        <Grid padded>
          <Grid.Row padded>
            {this.props.products &&
              this.props.products.map(product => (
                <div key={product.id} className="defaultHome">
                  {/*console.log("Hi", product)*/}
                  <Segment>
                    <Card.Group>
                      <Card className='defaultHome'>
                        <Link to={`/products/${product.id}`}>
                          <Image src={product.photo} />
                        </Link>
                        <Card.Content>
                          <Card.Header>{product.title}</Card.Header>

                          <Card.Description>
                            {product.description}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Input
                              type="text"
                              placeholder="Enter quantity"
                              name="quantity"
                              onChange={this.onChange}
                              value={this.state.quantityValue}
                            />
                          <Button animated="vertical">
                            <Button.Content hidden onClick={() => {
                               let productPrice;
                               this.props.products.forEach((eachProduct) => { if (product.id === eachProduct.id) productPrice = eachProduct.price})
                               this.props.addToCart(product.id, productPrice, this.props.order.id, this.state.quantity) }}
                               >ADD</Button.Content>
                            <Button.Content visible>
                              <Icon name="shop" />
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </Segment>
                </div>
              ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.product,
    products: state.products.products,
    item: state.lineItems.singleItem,
    orders: state.orders.orders,
    order: state.orders.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct(id) {
      dispatch(getSingleProduct(id));
    },
    getProducts() {
      dispatch(retrieveProducts());
    },
    addToCart(productId, price, orderId, quantity) {
      let newItem = {price, quantity, productId, orderId}
      console.log('newItem is', newItem)
      dispatch(addNewItem(newItem));
    }
    ,initializeCart() {
      let totalPrice = 0;
      let order = {totalPrice}
      dispatch(newOrder(order));
      dispatch(getOrdersByUser());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DefaultHome);
