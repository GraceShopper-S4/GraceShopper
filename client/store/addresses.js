import axios from 'axios'; 

//Action Types
const POST_ADDRESS = 'POST_ADDRESS';
//Action Creators
const postAddress = (address) => ({
    type: POST_ADDRESS,
    address
})
//Thunk Creators/Thunks
   export const postNewAddress = (address) => dispatch => {
        axios.post(`/api/addresses`, address)
        .then(res=> {console.log('res is', res); return res.data})
        .then(() => {
            dispatch(postAddress(address))
        })
    }
//Reducer
export const AddressReducer = (addressState = [], action) => {
    switch(action.type) {
        case POST_ADDRESS: 
        return action.address;
        default: return addressState
    }
}
