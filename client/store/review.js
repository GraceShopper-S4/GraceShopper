import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_REVIEWS = "GET_REVIEWS";
const POST_REVIEW = "POST_REVIEW";

/**
 * INITIAL STATE
 */
const reviews = []

/**
 * ACTION CREATORS
 */
const getReviews = (reviews) => ({type: GET_REVIEWS, reviews});
const postReview = (text,rating) => ({type: POST_REVIEW, text,rating});


/**
 * THUNK CREATORS
 */

export const fetchReviews = (id) => 
    dispatch => {
        axios.get(`/api/products/${id}/reviews`)
        .then(reviews => dispatch(getReviews(reviews.data)))
        .catch(err)
    }

 
export const writeReview = (text,rating) => 
    dispatch => {
        axios.post('/api/reviews', {text,rating})
        .then(() => dispatch(postReview(text,rating)))
        .catch(err)
    }

/**
 * REDUCER
 */
export default function (state = reviews, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return [...state, {reviews:action.reviews}]
    case POST_REVIEW:
      return [...state, {text: action.text, rating: action.rating}]
    default:
      return state
  }
}
