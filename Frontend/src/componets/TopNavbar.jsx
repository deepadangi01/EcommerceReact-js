import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
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

  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");

  const cartPage = () => {
    navigate("/cart");
  }


  const handleSubmit = () => {
    let api = `http://localhost:3000/adminuser/?adminid=${adminid}`;
    axios.get(api).then((res) => {
      if (res.data.length >= 1) {
        if (res.data[0].password == password) {
          navigate("/dashboard");
        }
        else {
          alert("Invalid Password!")
        }
      }
      else {
        alert("Invalid AdminID")
      }

    })
  }

  const cartLen = mycart.length;
  return (
    <>  <h4 style={{ backgroundColor: "pink", color: "white", margin: "0" }}><marquee behavior="" direction="right">Suprice is Big Offer for !!!!</marquee></h4>
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



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter Id : <input type="text" value={adminid} onChange={(e) => { setAdminid(e.target.value) }} />
          <br />
          Enter Password : <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <br />



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default TopNavbar;