import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div style={{ height: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <Card.Img variant="top" src={product.thumbnail} style={{ height: '100%', objectFit: 'cover' }} />
      </div>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text style={{ maxHeight: '70px', overflow: 'hidden', marginBottom: '15px' }}>
            {product.description}
          </Card.Text>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
