

import { useState, useEffect } from 'react';
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const WomenCollection=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();

 const loadData=()=>{
   
    let api="http://127.0.0.1:8000/api/products/?category=women";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);



 const cartDataAdd=(id, name, price, categ,offer, desc, myimg)=>{
  dispatch(addToCart({id:id, product_name:name, price:price, category:categ, offer:offer,description:desc, img:myimg, qnty:1}))
 }



 const ans=mydata.map((key)=>{
   return(
    <>
    
     <Card style={{width:"300px" , marginTop:"20px"}}>
        <img src={key.img} />
      <Card.Body>
        <Card.Title> {key.product_name} for {key.category}</Card.Title>
        <Card.Text>
            
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
            <p style={{color:'green', fontWeight:'bold'}}> OFFer :{key.offer} %</p>
             {key.description} 
            <br/>
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{cartDataAdd(key.id, key.product_name, key.price, key.category, key.description, key.img)}}>add to cart</Button>
      </Card.Body>
      </Card>
    
    </>
   )

 })

    return(
        <>
       <h1>wemen Collections are Here</h1>
       <div id="cardData">
         {ans}     
      
       </div>

        </>
    )
}

export default WomenCollection;