import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice'; // update path as needed

const Search = () => {
  const { txtdata } = useParams();
  const [mydata, setMydata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [txtdata]);

  const loadData = () => {
    let api = "http://localhost:3000/shopping";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const addDataToCart = (id, name, price, description, category, images) => {
    dispatch(addToCart({ id, name, category, price, description, images, qnty: 1 }));
  };

  const filtered = mydata
    .filter(item => item.name.toLowerCase().includes(txtdata.toLowerCase()))
    .map((key) => (
      <Card key={key.id} style={{ width: '250px', marginTop: "20px" }}>
        <Card.Img variant="top" src={key.images} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <h4 style={{ color: "blue", fontSize: "14px" }}>
            Brand: {key.brand} — For: {key.category}
          </h4>
          <Card.Text>{key.description}</Card.Text>
          <h4 style={{ color: "red", fontSize: "16px" }}>Price: {key.price}</h4>
          <Button
            variant="primary"
            onClick={() =>
              addDataToCart(
                key.id,
                key.name,
                key.price,
                key.description,
                key.category,
                key.images
              )
            }
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    ));

  return (
    <>
      <div id="proHeading">
        <h1>Search the Products</h1>
      </div>
      <div id="homeProduct">
        {isLoading ? <p>Loading...</p> : filtered.length > 0 ? filtered : <p>No products found</p>}
      </div>
    </>
  );
};

export default Search;
