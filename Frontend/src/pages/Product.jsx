import { useState, useEffect } from 'react';
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Productdetail = (id) => {
    navigate(`/prodetail/${id}`);
  };

  const loadData = () => {
    let api = "http://127.0.0.1:8000/api/products/";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const cartDataAdd = (item) => {
    dispatch(addToCart({ ...item, qnty: 1 }));
  };

  return (
    <>
      <h2 className="text-center my-4 fw-bold text-primary">
        Our Products
      </h2>

      <Row className="g-4 px-4">
        {mydata.map((key) => (
          <Col key={key.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="product-card h-100 border-0 shadow-sm"
              onClick={() => Productdetail(key.id)}
            >
              <div className="text-center p-3">
                <Card.Img
                  src={key.img}
                  className="product-img"
                />
              </div>

              <Card.Body className="d-flex flex-column">
                <Badge bg="secondary" className="mb-2 align-self-start">
                  {key.category}
                </Badge>

                <Card.Title className="fs-6 fw-bold">
                  {key.product_name}
                </Card.Title>

                <Card.Text className="text-muted small flex-grow-1">
                  {key.description.slice(0, 60)}...
                </Card.Text>

                <div className="d-flex justify-content-between">
                  <span className="text-danger fw-bold">
                    ₹ {key.price}
                  </span>
                  <span className="text-success fw-bold">
                    {key.offer}% OFF
                  </span>
                </div>

                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={(e) => {
                    e.stopPropagation(); // 👈 important
                    cartDataAdd(key);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Product;
