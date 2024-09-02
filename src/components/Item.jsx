import React from 'react'
import {Card, ListGroup} from 'react-bootstrap';

import '../item.css';
export default function Item({product}) {
  
  return (
      <Card key={product.id} style={{width:'18rem'}} className='userDetails mb-4 shadow-sm border-light'>
        <Card.Body>
          <Card.Title className='text-center mb-4'>{product.username}</Card.Title>
          <Card.Subtitle>Name : {product.name}</Card.Subtitle>
          <Card.Text>Email : {product.email}</Card.Text>
        </Card.Body>
        <ListGroup className='listItems list-group-flush'>
          <ListGroup.Item className='d-flex justify-content-between'>
            Address : {product.address.street} {product.address.city} {product.address.zipcode}
          </ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between'>
            Phone : {product.phone}
          </ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between'>
            Website: <a href={`https://${product.website}`} target="_blank" rel="noopener noreferrer">{product.website}</a>
            </ListGroup.Item>
        </ListGroup>
      </Card>
  )
}
