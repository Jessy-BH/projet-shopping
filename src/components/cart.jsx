import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, deleteItem, updateItem } from '../actions/actions-types';
import { Button } from '../style/Button.styled';



const Cart = () => {

  const {items} = useSelector(state => state.itemReducer);
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = item => {
    dispatch(deleteItem(item));
  }

  const handleClear = items => {
    dispatch(deleteCart(items));
  }

  return (
    <div>
      <p>Hi {user.name} !</p>
      {/* {userName} */}
      <p>There are 0 items in your cart</p>
      {/* {itemsQuantity} */}
      <Button onClick={() => handleClear(items)}>Clear cart</Button>
      {/* DELETE_CART */}
      {/* <Item /> */}
      <p>{items.title}</p>
      {/* <ul>
        {items.map((item, i) =>
          <li key={i}>
            {item}
            <Button onClick={() => handleDelete(item)}>Remove</Button>
          </li>
        )}
      </ul> */}
      {/* DELETE_ITEM */}
    </div>
  )
}

export default Cart;