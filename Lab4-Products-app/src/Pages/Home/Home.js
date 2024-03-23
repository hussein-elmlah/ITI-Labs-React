import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
import { getProducts } from '../../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products: ', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Products</h1>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
