

import { useState, useEffect } from 'react';
import axios from "axios";



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const KidsCollection=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();

 const loadData=()=>{
   
    let api="http://127.0.0.1:8000/api/products/?category=kids";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);



 const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
  dispatch(addToCart({id:id, product_name:name, price:price, category:categ, description:desc, img:myimg, qnty:1}))
 }



 const ans=mydata.map((key)=>{
   return(
    <>
    
     <Card style={{width:"380px", marginTop:"10px"}}>
        <img src={key.img} />
      <Card.Body>
        <Card.Title> {key.product_name} for {key.category}</Card.Title>
        <Card.Text>
            {key.description} 
            <br/>
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
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
       <h1>Kids Collection</h1>
       <div id="cardData">
         {ans}     
      
       </div>

        </>
    )
}

export default KidsCollection;