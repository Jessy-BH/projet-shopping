import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, deleteItem, updateItem } from '../actions/actions-types';
import { Button } from '../style/Button.styled';
import { Main, Htwo, Hthree, Section, Product, Category, Title, Price, Infos } from '../style/Cart.styled' 
import { Label } from '../style/Label.styled';



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

  
  const handleSelect = (e) => {
    console.log(e.target.value)
  }

  let numbers = [];
  const generateNumbers = () => {
    for (let i = 1; i <= 100; i++) {
      numbers.push(i)
    }
  }
  generateNumbers();

  return (
    <Main>
      <Section>
        <Htwo>Hi {user.name} !</Htwo>
        <Hthree>
          {items.length < 2 ? 
            (items.length == 0 ? 'Your cart is empty' : `There is ${items.length} item in your cart`) :
            `There are ${items.length} items in your cart`}
        </Hthree>
        <Button onClick={() => handleClear(items)}>Clear cart</Button>
      </Section>
      
            
      <ul>
        {items.map((item, i) =>
          <Product key={i}>
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt="" />
            <Infos>
              <Title>{item.title} <Category>{item.category}</Category></Title>
              <p>{item.description}</p>
              <Price>$ {item.price}</Price>
              {/* <input type="text" onChange={handleChange} defaultValue={item.quantity}/> */}
              <Label>
                Quantity : 
                <select defaultValue={item.quantity}>
                  {numbers.map((number) => <option key={number} value={number}>{number}</option>)}
                </select>
              </Label>
              <Button onClick={() => handleDelete(item)}>Remove</Button>
            </Infos>
          </Product>
        )}
      </ul>
    </Main>
  )
}

export default Cart;