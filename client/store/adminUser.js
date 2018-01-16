import axios from 'axios';


//initial State
const initialState = {
    users: [],
    singleUser: {}
}


//Action Types
const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_SINGLE_USER = 'GET_SINGLE_USER';
const REMOVE_USER = 'REMOVE_USER';
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
const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId
});
const updateUser = (userId) => ({
    type: UPDATE_USER,
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
export const deleteUser = (id) => dispatch => {
    axios.delete(`/api/users/${id}`)
    .then(res => res.data)
    .then(user => dispatch(removeUser(user)))
};
export const updateExistingUser = (id) => dispatch => {
    axios.put(`/api/users/${id}`)
    .then(res => res.data) 
    .then(user => dispatch(updateUser(user)))
};

//Reducer

export const AdminUserReducer = (state = initialState, action) {
    switch(action.type) {
        case GET_ALL_USERS:
        return action.users
        case GET_SINGLE_USER:
        return {
            users: [...state.users],
            singleUser: action.user 
        }
        case REMOVE_USER:
        return {
            users: state.users.filter(user => user.id !== action.user.id),
            singleUser: {}
        }
        case UPDATE_USER:
        return {
            users: state.users,
            singleUser: action.user
        }
        default: return state
    }
}