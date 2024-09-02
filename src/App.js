import {useState, useEffect} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Item from './components/Item';

function App() {
  const [products, setProducts] =useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data);
      console.log(Array.isArray(products))
    })
  },[])
  return (
    
    <div className="container">
        <Container>
          <Row className='justify-content-center'>
            {products.map((product)=>(
              <Col key={product.id}  className='mb-4'>
                <Item product={product}/>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
  );
}

export default App;
