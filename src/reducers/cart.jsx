import React from 'react'

const stateInit = {
    id: '3',
    title: 't-shirt',
    image: 'url string lien',
    category: "men's clothing",
    description: 'blahblahblah',
    price: '250.00',
    quantity: 0,
}

export const reducerCart = (state = stateInit, action = {}) => {
    const {items, item} = state;

    switch(action.type){
        // case ADD_ITEM:

        // case UPDATE_ITEM:

        // case DELETE_ITEM:

        // default:
            // return state;
    }
}