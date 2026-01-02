import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/${id}/`)
      .then((res) => setMydata(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!mydata) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="text-muted">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ background: "#f8f9fa" }}>
      <Card className="p-4 shadow-lg border-0">
        <Row className="align-items-center">
          
          {/* IMAGE */}
          <Col md={5} className="text-center">
            <img
              src={mydata.img}
              className="img-fluid rounded"
              style={{ maxHeight: "350px" }}
              alt=""
            />
          </Col>

          {/* DETAILS */}
          <Col md={7}>
            <h3 className="fw-bold text-primary">
              {mydata.product_name}
            </h3>

            <Badge bg="dark" className="mb-2">
              {mydata.category}
            </Badge>

            <h4 className="mt-3 text-danger fw-bold">
              ₹ {mydata.price}
            </h4>

            <p className="text-success fw-semibold">
              🎉 {mydata.offer}% OFF
            </p>

            <p className="text-secondary">
              {mydata.description}
            </p>

            <Button
              variant="warning"
              size="lg"
              className="me-3"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: mydata.id,
                    product_name: mydata.product_name,
                    price: mydata.price,
                    category: mydata.category,
                    offer: mydata.offer,
                    description: mydata.description,
                    img: mydata.img,
                    qnty: 1,
                  })
                )
              }
            >
              🛒 Add to Cart
            </Button>

            <Button variant="outline-primary" size="lg">
              Buy Now
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductDetail;
