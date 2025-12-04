import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/logo.png';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const MenuNav = () => {
  const MyData = useSelector((state) => state.mycart.cart);
  const DataCount = MyData.length;
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");

  const myCart = () => {
    navigate("/mycart");
  };

  const handleSearch = () => {
    if (searchData.trim() !== "") {
      navigate(`/search/${searchData}`);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="Logo" className="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/product">Products</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/womenwear">Women's Collections</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kidswear">Kid's Collections</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/menwear">Men's Collections</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                type="text"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                placeholder="Search..."
              />
              <FaSearch onClick={handleSearch} style={{ cursor: 'pointer' }} />
              <FaUser style={{ cursor: 'pointer' }} />
              <div onClick={myCart} style={{ cursor: 'pointer', position: 'relative' }}>
                <FaShoppingCart />
                {DataCount > 0 && (
                  <span style={{
                    padding: "2px 6px",
                    borderRadius: "50%",
                    marginLeft: "5px",
                    backgroundColor: "lightblue",
                    border: "1px solid grey",
                    fontSize: "12px"
                  }}>
                    {DataCount}
                  </span>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuNav;
