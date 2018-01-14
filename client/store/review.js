import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const POST_REVIEW = 'POST_REVIEW';
const UPDATE_REVIEW = 'UPDATE_REVIEW';

/**
 * INITIAL STATE
 */
const initialState = {
    reviews: [],
    updateReview:{}
}

/**
 * ACTION CREATORS
 */
const postReview = (review) => ({type: POST_REVIEW, review });
export const updateReview = updateReview => ({ type: UPDATE_REVIEW, updateReview});


/**
 * THUNK CREATORS
 */

export const writeReview = (review) =>
    dispatch => {
        console.log("this is in dispatch in axios", review)
        axios.post('/api/reviews', {body:review.body, rating:review.rating , productId: review.productId, userId:1})
        .then(() => {
            console.log('this is in dispatch',review)
            dispatch(postReview(review))})
        .catch(err => console.error('Error', err))
    }

/**
 * REDUCER
 */
export const ReviewReducer = (state = initialState, action)=> {
  switch (action.type) {
    case POST_REVIEW:
      return Object.assign({}, state, { reviews: state.reviews.concat(action.updateReview)})

    case UPDATE_REVIEW:
        console.log('reducer alert!!')
        console.log(action.updateReview);
        return Object.assign({}, state, { updateReview: action.updateReview });

    default:
      return state
  }
}

