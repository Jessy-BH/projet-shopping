import { combineReducers } from "redux";

import items from './Cart';
import user from './Account';

export default combineReducers({
    itemReducer : items,
    userReducer : user
});
