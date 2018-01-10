import React, { Component } from 'react'
import { connect } from 'react-redux'



const Reviews = (props) => {
    const {reviews} = props
    console.log("hit right before return")
    return (
        <h1> hello world </h1>
    )
}


const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: function ({text,rating},event) {
            event.preventDefault();
    
            dispatch(postReview({text,rating}));
            //dispatch(gotNewSchoolEntryFromServer({}))
    
            //Clear input fields after submit
            //document.forms['schoolform'].reset();
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default Container;