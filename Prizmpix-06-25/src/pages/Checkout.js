import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

const CheckoutCartCard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Checkout Cart</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <span>Product 1</span>
              <span>$10.99</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <span>Product 2</span>
              <span>$5.99</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>$16.98</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <span>Tax</span>
              <span>$1.70</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <span>$18.68</span>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <Button variant="primary" block>Checkout</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CheckoutCartCard;