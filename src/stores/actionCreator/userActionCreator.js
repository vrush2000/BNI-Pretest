import { FETCH_ALL_USER, DELETE_USER, FETCH_DETAIL_USER, ADD_USER } from "../actionType/userActionType";
import axios from 'axios';

const mainUrl = "https://dummyjson.com/users"
export const actionSetAllUser = (payload) => {
    return {
        type: FETCH_ALL_USER,
        payload,
    };
};

export const actionSetDetailUser = (payload) => {
    return {
        type: FETCH_DETAIL_USER,
        payload
    }
}

export const actionDeleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload
    }
}


export const addUser = (input) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${mainUrl}/add`, {input});
            dispatch({
                type: ADD_USER,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const fetchAllUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(mainUrl);
            dispatch(actionSetAllUser(data.users));
        } catch (error) {
            console.error("Error fetching all user:", error);
        }
    };
};

export const fetchDetailUser = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${mainUrl}/${id}`)
            dispatch(actionSetDetailUser(data))
        } catch (error) {
            console.error("Error fetching detail user:", error);
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${mainUrl}/${id}`)
            dispatch(actionDeleteUser(data))
        } catch (error) {
            console.error("Error fetching detail user:", error);
        }
    }
}
