import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';
import { getProduct } from '../../services/api';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProduct(productId);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details: ', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container className='mt-5 shadow'>
      <Row >
        <Col>
          <img src={product.thumbnail} alt={product.title} className='w-100 h-100' />
        </Col>
        <Col className='pt-5'>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
