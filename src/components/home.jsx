import React, { useEffect, useState } from 'react';
import { Main, Article, Category, Infos, Form, Title, Price } from '../style/Home.styled' 
import { Button } from '../style/Button.styled' 
import { Input } from '../style/Input.styled' 
import { Label } from '../style/Label.styled' 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <Main>
      {products.map(product => (
        <Article key={product.id}>
          <img src={product.image} alt={product.title} />
          <Infos>
            <Title>{product.title} <Category>{product.category}</Category></Title>
            <p>{product.description}</p>
            <Price>$ {product.price}</Price>

            <Form onSubmit={handleSubmit}>
              <Label>
                Quantity : 
                <Input width={'50px'} type="number" name="" id={product.id} min={1} defaultValue='1' onChange={(e) => { if(e.target.value === '') e.target.value = '1' }} />
              </Label>
              <Button type="submit">Add to basket</Button>
            </Form>
          </Infos>
        </Article>
      ))}
    </Main>
  );
}

export default Home