import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, deleteItem, updateItem } from '../actions/actions-types';
import { Button } from '../style/Button.styled';



const Cart = () => {

  const {items, itemsQuantity} = useSelector(state => state.itemReducer);
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = item => {
    dispatch(deleteItem(item));
  }

  const handleClear = items => {
    dispatch(deleteCart(items));
  }

  const handleChange = e => {
    const{itemsQuantity, value} = e.target;
    dispatch(updateItem({itemsQuantity, value}));
  }

  // const handleInput = e => {
  //   e.preventDefault();
  //   dispatch(updateItem());
  // }

  return (
    <div>
      <p>Hi {user.name} !</p>
      <p>There are {itemsQuantity} items in your cart</p>
      <Button onClick={() => handleClear(items)}>Clear cart</Button>
        <ul>
          {items.map((item, i) =>
            <li key={i}>
              {item.title}
              {item.category}
              {item.price}
              {item.image}
              {item.description}
              <input type="text" onChange={handleChange} defaultValue={item.quantity}/>
              <Button onClick={() => handleDelete(item)}>Remove</Button>
            </li>
          )}
        </ul>
    </div>
  )
}

export default Cart;