import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { full_name, email, password, confirmPassword } = formData;

    if (!full_name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/signup/", {
        full_name,
        email,
        password,
        confirmPassword,
      });

      setSuccess("Signup successful");
      setError("");
      console.log(res.data);
    } catch (err) {
      setError("Signup failed");
      setSuccess("");
    }
  };


  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        <Col>
          <Card className="shadow p-4 signup-card w-100">
            <Card.Body>
              <h3 className="text-center mb-4">Create Account</h3>

              {error && <p className="text-danger text-center">{error}</p>}
              {success && <p className="text-success text-center">{success}</p>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="full_name"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button type="submit" className="w-100" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </Form>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <a href="/login">Login</a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
