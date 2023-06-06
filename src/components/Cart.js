import React from 'react'
import { useSelector } from 'react-redux'
import  Card  from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Cart = () => {
  const products=useSelector(state=>state.cart);
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

    </Card>
 
    </div>
   ))
  return (
    <>
   <h1>Cart</h1>
   <div className='row'>
    {cards}
   </div>
   </>

  )
}

export default Cart