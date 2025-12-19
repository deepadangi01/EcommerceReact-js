import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

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



    const cartDataAdd = (id, name, price, categ, offer, desc, myimg) => {
        dispatch(addToCart({ id: id, product_name: name, price: price, category: categ, offer: offer, description: desc, img: myimg, qnty: 1 }))
    }

    const ans = mydata.map((key) => {
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
                <div className='sideBar'> 
                    <h6> Search By Category</h6>
                    <input type="radio" value="men" name="cat" onChange={(e) => { setCatData(e.target.value) }} />mens
                    <br />
                    <input type="radio" value="women" name="cat" onChange={(e) => { setCatData(e.target.value) }} /> Womens
                    <br />
                    <input type="radio" value="kid" name="cat" onChange={(e) => { setCatData(e.target.value) }} />Kids
                    <br />
                    <Button size="sm" onClick={handleSubCategory}>Search</Button>
                    <br /> <br />
                    <h6> Search By Price</h6>

                    <input type="radio" value="2000" name="price"
                        onChange={(e) => { setPriceData(e.target.value) }} /> Rs 2000 & below
                    <br />
                    <input type="radio" value="4000" name="price"
                        onChange={(e) => { setPriceData(e.target.value) }} /> Rs 2000 - 4000
                    <br />
                    <input type="radio" value="5000" name="price"
                        onChange={(e) => { setPriceData(e.target.value) }} /> Rs 4000 - 5000
                    <br />
                    <input type="radio" value="6000" name="price"
                        onChange={(e) => { setPriceData(e.target.value) }} /> Rs 5000 & above
                    <br />

                    <Button size="sm" onClick={handleSubPrice}>Search</Button>



              </div>
                 <div>
                    <div id="proHeading">

                        {displayState ? ans : ans1}

                    </div>

                

                </div>
                

            </div>
        </>
    )
}

export default Shop;