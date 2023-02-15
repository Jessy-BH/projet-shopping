import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../constants/actions';

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