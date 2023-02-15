import React from 'react'
import { Main, Form, Htwo, Hthree } from '../style/Account.styled' 
import { Button } from '../style/Button.styled' 
import { Input } from '../style/Input.styled' 
import { Label } from '../style/Label.styled' 

const Account = () => {
  return (
    <Main>
      <Htwo>Hi Alan!</Htwo>
      <Hthree>Customize your profile here</Hthree>
      <Form>
        <Label>
          Your firstname : 
          <Input type="text" name="" />
        </Label>
        <Label>
          Your lastname : 
          <Input type="text" name="" />
        </Label>
        <Label>
          Your email : 
          <Input type="text" name="" />
        </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Main>
  )
}

export default Account