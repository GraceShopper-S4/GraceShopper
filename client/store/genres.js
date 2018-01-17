import axios from "axios";

//Action Types
const GET_PRODUCT_BY_GENRE = "GET_PRODUCT_BY_GENRE";
//Action Creators
const getProductByGenre = products => ({
  type: GET_PRODUCT_BY_GENRE,
  products
});
//Thunk Creators/Thunks
export const retrieveByGenre = name => dispatch => {
  axios
    .get(`/api/genres/${name}`)
    .then(books => books.data)
    .then(genreProducts => {
      dispatch(getProductByGenre(genreProducts));
    });
};
//Reducer
export default function(genreState = [], action) {
  switch (action.type) {
    case GET_PRODUCT_BY_GENRE:
      return action.products;
    default:
      return genreState;
  }
}
