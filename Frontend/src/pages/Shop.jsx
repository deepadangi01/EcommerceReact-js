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

const Shop = () => {
    const [catData, setCatData] = useState("");
    const [priceData, setPriceData] = useState("");
    const [displayState, setDisplayState] = useState(true)


    const [mydata, setMydata] = useState([]);

    const [pricemydata, setPriceMydata] = useState([]);

    const dispatch = useDispatch();

    const loadData = () => {
        let api = "http://127.0.0.1:8000/api/products/";
        axios.get(api).then((res) => {
            setMydata(res.data);
        })
    }

    useEffect(() => {
        loadData();
    }, []);



   const cartDataAdd = (item) => {
    dispatch(addToCart({ ...item, qnty: 1 }));
  };

    const ans = mydata.map((key) => {
        return (
            <>
                

            </>
        )

    })



    const ans1 = pricemydata.map((key) => {

        if (priceData == 2000) {
            if (key.price > 0 && key.price < 2001) {
                return (
                    <>
                        <Card style={{ width: "300px", marginTop: "20px" }}>
                            <img src={key.img} />
                            <Card.Body>
                                <Card.Title> {key.product_name} for {key.category}</Card.Title>
                                <Card.Text>

                                    <span style={{ color: 'red', fontWeight: 'bold' }}>Price : Rs. {key.price}/-</span>
                                    <p style={{ color: 'green', fontWeight: 'bold' }}>Offer: {key.offer} %</p>
                                    {key.description}
                                    <br />
                                </Card.Text>
                                <Button variant="primary"
                                    onClick={() => { cartDataAdd(key.id, key.product_name, key.price, key.category, key.description, key.img) }}>add to cart</Button>
                            </Card.Body>
                        </Card>

                    </>
                )

            }
        }

        if (priceData == 4000) {
            if (key.price > 2000 && key.price < 4001) {
                return (
                    <>
                        <Card style={{ width: "300px", marginTop: "20px" }}>
                            <img src={key.img} />
                            <Card.Body>
                                <Card.Title> {key.product_name} for {key.category}</Card.Title>
                                <Card.Text>

                                    <span style={{ color: 'red', fontWeight: 'bold' }}>Price : Rs. {key.price}/-</span>
                                    <p style={{ color: 'green', fontWeight: 'bold' }}>Offer: {key.offer} %</p>
                                    {key.description}
                                    <br />
                                </Card.Text>
                                <Button variant="primary"
                                    onClick={() => { cartDataAdd(key.id, key.product_name, key.price, key.category, key.description, key.img) }}>add to cart</Button>
                            </Card.Body>
                        </Card>

                    </>
                )

            }
        }


        if (priceData == 5000) {
            if (key.price > 4000 && key.price < 5001) {
                return (
                    <>
                        <Card style={{ width: "300px", marginTop: "20px" }}>
                            <img src={key.img} />
                            <Card.Body>
                                <Card.Title> {key.product_name} for {key.category}</Card.Title>
                                <Card.Text>

                                    <span style={{ color: 'red', fontWeight: 'bold' }}>Price : Rs. {key.price}/-</span>
                                    <p style={{ color: 'green', fontWeight: 'bold' }}>Offer: {key.offer} %</p>
                                    {key.description}
                                    <br />
                                </Card.Text>
                                <Button variant="primary"
                                    onClick={() => { cartDataAdd(key.id, key.product_name, key.price, key.category, key.description, key.img) }}>add to cart</Button>
                            </Card.Body>
                        </Card>

                    </>
                )

            }
        }

        if (priceData == 6000) {
            if (key.price > 5000) {
                return (
                    <>
                        <Card style={{ width: "300px", marginTop: "20px" }}>
                            <img src={key.img} />
                            <Card.Body>
                                <Card.Title> {key.product_name} for {key.category}</Card.Title>
                                <Card.Text>

                                    <span style={{ color: 'red', fontWeight: 'bold' }}>Price : Rs. {key.price}/-</span>
                                    <p style={{ color: 'green', fontWeight: 'bold' }}>Offer: {key.offer} %</p>
                                    {key.description}
                                    <br />
                                </Card.Text>
                                <Button variant="primary"
                                    onClick={() => { cartDataAdd(key.id, key.product_name, key.price, key.category, key.description, key.img) }}>add to cart</Button>
                            </Card.Body>
                        </Card>
                    </>
                )

            }
        }
    })

    const handleSubCategory = () => {
        let api = `http://127.0.0.1:8000/api/products/?category=${catData}`;
        axios.get(api).then((res) => {
            setMydata(res.data);
        })
        setDisplayState(true);
    }

    const handleSubPrice = () => {
        let api = "http://127.0.0.1:8000/api/products/";
        axios.get(api).then((res) => {
            setPriceMydata(res.data);
        })
        setDisplayState(false);
    }
    console.log(pricemydata);

    return (
        <>
            <div id="shoppage">
                <div className="col-md-2">
                    <div className="sticky-top p-3 bg-light rounded shadow" style={{ top: '80px' }}>
                        {/* Search by Category */}
                        <h6 className="fw-bold mb-3">Search By Category</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="men" name="cat" onChange={(e) => setCatData(e.target.value)} />
                            <label className="form-check-label">Mens</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="women" name="cat" onChange={(e) => setCatData(e.target.value)} />
                            <label className="form-check-label">Womens</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" value="kid" name="cat" onChange={(e) => setCatData(e.target.value)} />
                            <label className="form-check-label">Kids</label>
                        </div>
                        <Button variant="primary" size="sm" className="w-100 mb-3" onClick={handleSubCategory}>Search</Button>

                        <hr />

                        {/* Search by Price */}
                        <h6 className="fw-bold mb-3">Search By Price</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="2000" name="price" onChange={(e) => setPriceData(e.target.value)} />
                            <label className="form-check-label">Rs 2000 & below</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="4000" name="price" onChange={(e) => setPriceData(e.target.value)} />
                            <label className="form-check-label">Rs 2000 - 4000</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="5000" name="price" onChange={(e) => setPriceData(e.target.value)} />
                            <label className="form-check-label">Rs 4000 - 5000</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" value="6000" name="price" onChange={(e) => setPriceData(e.target.value)} />
                            <label className="form-check-label">Rs 5000 & above</label>
                        </div>
                        <Button variant="primary" size="sm" className="w-100" onClick={handleSubPrice}>Search</Button>
                    </div>
                </div>

                <div>
                    <div id="proHeading">
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
                        {displayState ? ans : ans1}

                    </div>



                </div>


            </div>
        </>
    )
}

export default Shop;