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

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Home=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();
 const navigate = useNavigate();
const CreatProduct = () => {
    navigate("creatproduct");
  }
 const loadData=()=>{
    let api="http://127.0.0.1:8000/api/products/";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);



 const cartDataAdd=(id, name, price, offer,categ, desc, myimg)=>{
  dispatch(addToCart({id:id, product_name:name, price:price, offer:offer,category:categ, description:desc, img:myimg, qnty:1}))
 }



 const ans=mydata.map((key)=>{
   return(
    <>
    
     <Card className='box' style={{width:"300px" , marginTop:"20px"}}>
        <img src={key.img} />
      <Card.Body>
        <Card.Title> {key.product_name} for {key.category}</Card.Title>
        <Card.Text>
           
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
            <p style={{color:'green', fontWeight:'bold'}}> OFFer: {key.offer}%</p>  
             {key.description} 
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{cartDataAdd(key.id, key.product_name, key.price, key.category, key.description, key.img)}}>add to cart</Button>
      </Card.Body>
      </Card>
   <div className="newproduct">
    
   </div>
    
    </>
   )

 })

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

            <Button variant="primary" onClick={CreatProduct} >Create Products</Button>
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
       <div id="cardData">
         {ans}     
       </div>
        </>
    )
}
export default Home;