import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, deleteItem, updateItem } from '../actions/actions-type';
import { Button } from '../style/Button.styled';



const Cart = () => {

  const {items} = useSelector(state => state.reducerCart);
  const dispatch = useDispatch();

  const handleDelete = item => {
    dispatch(deleteItem(item));
  }

  const handleClear = items => {
    dispatch(deleteCart(items));
  }

  return (
    <div>
      <p>Hi Alan !</p>
      {/* {userName} */}
      <p>There are 0 items in your cart</p>
      {/* {itemsQuantity} */}
      <Button onClick={() => handleClear(items)}>Clear cart</Button>
      {/* DELETE_CART */}
      {/* <Item /> */}
      <ul>
        {items.map((item, i) =>
          <li key={i}>
            {item}
            <Button onClick={() => handleDelete(item)}>Remove</Button>
          </li>
        )}
      </ul>
      {/* DELETE_ITEM */}
    </div>
  )
}

export default Cart;