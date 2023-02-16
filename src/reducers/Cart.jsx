import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, DELETE_CART } from '../constants/actions';

const stateInit = {
    items: [
        {
            id: '3',
            title: 't-shirt',
            image: 'url string lien',
            category: "men's clothing",
            description: 'blahblahblah',
            price: '250.00',
            quantity: 1,
        },
        {
            id: '5',
            title: 'pantalon',
            image: 'url string lien',
            category: "men's clothing",
            description: 'blahblahblah',
            price: '250.00',
            quantity: 5,
        },
    ],
    itemsQuantity: 2,
    
}

const reducerCart = (state = stateInit, action = {}) => {

    const {items, item} = state;

    switch(action.type){
        case ADD_ITEM:

            return {
                ...state,
                items: items.concat(item),
                quantity: state.quantity +1,
                itemsQuantity: state.itemsQuantity +1,
            }

        case UPDATE_ITEM:

            return {
                ...state,
                quantity: state.quantity -1,
                itemsQuantity: state.itemsQuantity -1,
            }

        case DELETE_ITEM:

            const itemDelete = action.payload;
            
            return {
                ...state,
                items: items.filter(item => item !== itemDelete),
                itemsQuantity: state.itemsQuantity -1,
            }

        // case DELETE_CART:

        //     return {
        //         ...state,
        //         items: ,
        //         itemsQuantity: 0,
        //     }

        default:
            return state;
    }
}

export default reducerCart;