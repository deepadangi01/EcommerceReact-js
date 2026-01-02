import { useState, useEffect } from 'react';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';

import ban1 from "../image/b1.jpg";
import ban2 from "../image/b2.png";
import ban3 from "../image/b3.jpg";
import offer from "../image/kidban.jpg";
import offer2 from "../image/logo.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Home=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();
 const navigate = useNavigate();
 const Productdetail = (id) => {
    navigate(`/prodetail/${id}`);
  };
 const loadData=()=>{
    let api="http://127.0.0.1:8000/api/products/";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);



 const cartDataAdd = (item) => {
    dispatch(addToCart({ ...item, qnty: 1 }));
  };





    return(
        <>
            <Carousel>
      <Carousel.Item>
          <img src={ban1} width="100%" height="400" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2} width="100%" height="400" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
      <img src={ban3} width="100%" height="400" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

           
    <div className="offer-product">
      <div className="offer1">
        <img src={offer} alt="" />
      </div>
      <div className="offer1">
        <img src={offer2} alt="" />
      </div>
      <div className="offer1">
      <img src={offer} alt="" />

      </div>
      <div className="offer1">
      <img src={offer2} alt="" />

      </div>
    </div>
    <div class="homedata">
      <Row className="g-3 px-1">
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
      </div>
        </>
        
    )
}
export default Home;