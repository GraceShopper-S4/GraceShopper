import axios from 'axios';


//initial State
const initialState = {
    users: [],
    singleUser: {}
}


//Action Types
const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_SINGLE_USER = 'GET_SINGLE_USER';
const REMOVE_THIS_USER = 'REMOVE_THIS_USER';
const ALLOW_RESET = 'ALLOW_RESET';
const UPDATE_USER = 'UPDATE_USER';


//Action Creators
const getUsers = (users) => ({
    type: GET_ALL_USERS,
    users
});
const getSingleUser = (singleUser) => ({
    type: GET_SINGLE_USER,
    singleUser
});

const updateUser = () => ({
    type: UPDATE_USER,
    
})
const deleteThisUser = (userId) => ({
    type: REMOVE_THIS_USER,
    userId
})

//Thunks/Thunk Creators

export const retrieveUsers = () => dispatch => {
    axios.get('/api/users')
    .then(res => res.data) 
    .then(users => dispatch(getUsers(users)))
};
export const retrieveSingleUser = (id) => dispatch => {
    axios.get(`/api/users/${id}`)
    .then(res => res.data) 
    .then(user => dispatch(getSingleUser(user)))
};
export const deleteAUser = (id) => dispatch => {
    axios.delete(`/api/users/${id}`)
    .then(res => res.data)
    .then(user => dispatch(deleteThisUser(id)))
};
export const updateExistingUser = (id, toChange) => dispatch => {
    console.log(toChange, 'this is the value we are passing. It is currently this')
    axios.put(`/api/users/${id}`, toChange)
    .then(res => res.data) 
    .then(() => dispatch(updateUser()))
};

//Reducer

export const AdminUserReducer = (state = initialState, action) => {
    console.log("its here");
    switch(action.type) {
        case GET_ALL_USERS:
        return { users: [...action.users] }
        case GET_SINGLE_USER:
        return {
            users: [...state.users],
            singleUser: action.user 
        }
        case REMOVE_THIS_USER:
        return {
            users: state.users.filter(user => user.id !== action.userId),
            singleUser: {}
        }
        case UPDATE_USER:
        return {
            users: [...state.users],
            singleUser: {}
        }
        default: return state
    }
}