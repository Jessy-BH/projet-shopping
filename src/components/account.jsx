import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../actions/actions-types";
import React from 'react'
import { Main, Form, Htwo, Hthree } from '../style/Account.styled' 
import { Button } from '../style/Button.styled' 
import { Input } from '../style/Input.styled' 
import { Label } from '../style/Label.styled' 


 

const Account = () => {
  
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleChange = e => {
      const{name, value} = e.target;
      dispatch(setUser({name, value}));
  }

  const handleSubmit = e => {
      e.preventDefault();
      dispatch(setUser());
  }
  
  return (
    <Main>
      <Htwo>Hi {user.name}!</Htwo>
      <Hthree>Customize your profile here</Hthree>
      <Form onSubmit={handleSubmit} >
        <Label>
          Your firstname : 
          <Input onChange={handleChange} type="text" name="name" defaultValue={user.name} />
        </Label>
        <Label>
          Your lastname : 
          <Input onChange={handleChange} type="text" name="lastname" defaultValue={user.lastname}/>
        </Label>
        <Label>
          Your email : 
          <Input onChange={handleChange} type="text" name="email"  defaultValue={user.email}/>
        </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Main>
  )
}

export default Account