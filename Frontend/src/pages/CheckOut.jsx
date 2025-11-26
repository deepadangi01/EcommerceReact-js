import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CashonDelivery from "./CashonDelivery";
import InternetBanking from "./InternetBanking";
import DebitCard from "./DebitCard";
import Upi from "./Upi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOut=()=>{
    const {amt}= useParams();
    const [paymethod, setPayMethod]= useState("");
    const navigate= useNavigate();
    const handleInput=(e)=>{
        let val=e.target.value;
        setPayMethod(val);
    }

    let ans1;
    if (paymethod=="cash")
    {
       ans1=<CashonDelivery/>
    }
    else 
    if(paymethod=="internet")
    {
        ans1=<InternetBanking/>
    }
    else 
    if (paymethod=="debit")
    {
        ans1=<DebitCard/>
    }
    else
    {
        ans1=<Upi/>
    }

    const paydone=()=>{
       navigate("/paydone")
    }

    return(
        <>
          <h1> CheckOut</h1>
          <h3 align="center"> Total Payble Amount : {amt}</h3>

          <div id="paydesign">
            <div id="cusform">
                <h4> Fill Your Shipping Address</h4>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile number</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={paydone}>
        Submit
      </Button>
    </Form>


            </div>
            <div id="paymethod">
                <h4> Select Your Payment Method</h4>

                <input type="radio" name="paymethod" value="cash" onChange={handleInput} /> Cash on Delivery
                <input type="radio" name="paymethod" value="internet" onChange={handleInput} /> Internet Banking
                <input type="radio" name="paymethod" value="debit" onChange={handleInput} />Debit/Credit Card
                <input type="radio" name="paymethod" value="upi" 
                onChange={handleInput} /> UPI/Phone Pay


                {ans1}
            </div>
          </div>
        </>
    )
}

export default CheckOut;