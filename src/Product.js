import React from 'react'
import { useState,useEffect } from 'react'
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';

const Product = () => {
    const[products,getProducts]=useState([]);
    useEffect(()=>{
    const data = fetch('https://fakestoreapi.com/products')
    .then(data=>data.json())
    .then(result=>getProducts(result))
   },[]);

   const dispatch=useDispatch();

   const addToCart=(product)=>{
    dispatch(add(product))
   }

   const cards=products.map((product)=>(
    <div className="col-md-3" style={{marginBottom: '10px'}}>
    <Card key={product.id}>
      <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width : '100px',height : '130px'}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Rs {product.price}
        </Card.Text>

      </Card.Body>
      <Card.Footer>
        <Button variant='primary' onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
 
    </div>
   ))
  return (
    <div>
      <h1 className="text-center">Product Details</h1>
      <div className='row'>
      {cards}
      </div>
       
    </div>
  )
}

export default Product