import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const ProductDetail=()=>{
    const {id} =useParams();
    const [mydata, setMydata]=useState({});
    const dispatch= useDispatch();

    const loadData=()=>{
        let api=`http://127.0.0.1:8000/api/products/${id}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
            console.log(res.data.img)        })
    }
    
    useEffect(()=>{
        loadData();
    }, []);


    const cartDataAdd=(id, name, price, categ, desc, image)=>{
        dispatch(addToCart({id:id, product_name:name, price:price, category:categ, description:desc, img:image, qnty:1}))
       }


    return(
        <>
          <h1> Product Detail :{id}</h1>
          <div id="pro_deatil">
            <div id="pro_img">
               <img src={mydata.img}  style={{height:'300px'}}/>
            </div>
            <div id="pro_desc">
            <h3> Product Name:  {mydata.product_name} </h3>
            <h6> About Product : {mydata.description} </h6> 
            <h4> Price : {mydata.price} </h4>
            <h6> Product for : {mydata.category} </h6>
            <h6> This is {mydata.type} Stock</h6>
            <Button
             onClick={()=>{cartDataAdd(mydata.id, mydata.product_name, mydata.price, mydata.category, mydata.description, mydata.img)}}
             >AddToCart</Button>
            </div>



          </div>

        </>
    )
}

export default ProductDetail;