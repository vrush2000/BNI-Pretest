import { ADD_USER, DELETE_USER, FETCH_ALL_USER, FETCH_DETAIL_USER } from "../actionType/userActionType";

const initialState = {
    users: [],
    user: {}
};

const userReducer = (state = initialState, action) => {
    //   console.log(action.type, 'action type')
    switch (action.type) {
        case FETCH_ALL_USER:
            return {
                ...state,
                users: action.payload,
            }
        case FETCH_DETAIL_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                users: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id),
            }
        default:
            return state;
    }
};

export default userReducer