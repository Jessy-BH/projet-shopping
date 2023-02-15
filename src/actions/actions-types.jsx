import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SET_USER } from '../constants/actions';

export const addItem = payload => {
    return{
        type: ADD_ITEM, payload
    }
};

export const updateItem = payload => {
    return{
        type: UPDATE_ITEM, payload
    }
};

export const deleteItem = payload => {
    return{
        type: DELETE_ITEM, payload
    }
};

export const setUser = payload => {
    return{
        type: SET_USER, payload
    }
};