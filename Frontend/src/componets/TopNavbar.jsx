import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import Search from "../pages/Search";
const TopNavbar = () => {
  const mycart = useSelector(state => state.mycart.cart);
  //  console.log(mycart);
  const navigate = useNavigate();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


  const cartPage = () => {
    navigate("/cart");
  }
 const loginUser = async (e) => {
    e.preventDefault(); // stop the page from refreshing

    try {
      // Send login request to Django
      const res = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: email,
        password: password,
      });

      // Save token
      localStorage.setItem("access", res.data.access);

      alert("Login successful!");
      console.log("User logged in:", res.data);
    } catch (error) {
      alert("Login failed!");
    }
  };

  

  const cartLen = mycart.length;
  return (
    <>
      <div id="header">
        <span id="carticon"> {cartLen} </span>

        <a href="#" onClick={cartPage} >
          <FaShoppingCart className="space" />
        </a>


        <a href="#">
          <GrUserAdmin className="space" onClick={handleShow} />
        </a>



        <a href="search" onClick={() => { navigate("/Search") }}>
          <FaSearch className="space" />
        </a>

      </div>

    <h1>Welcome {user.full_name} Our shopping website!!</h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Email" name="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={loginUser}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default TopNavbar;
