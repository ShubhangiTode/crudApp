import React, { useState } from "react";
import ProductApiServices from "../../Services/ProductApiServices";
import { Form, Button, Modal } from "react-bootstrap";
// import axios from "axios";

function ProductRow_old(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addata = async (e) => {
    e.preventDefault();

    const product = { ...props.product, title, brand };
    console.log(title, brand);
    const response = await ProductApiServices.add(product);

    if (response.status === 200) {
    
      alert("Data Is Added Success");
      props.handleClose();
      props.editProduct(response.data);
    } else {
      alert("data is Not Added Success");
    }
  };

  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>
      <br />
      <>
        <Form onSubmit={addata}>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Add User </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Your Title"
                onChange={(e) => setTitle(props.product.title)}
                required
              />
              <br />
              <Form.Control
                type="text"
                name="brand"
                placeholder="Enter Your Brand"
                onChange={(e) => setBrand(props.product.brand)}
                required
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} >
                Close
              </Button>
              <Button variant="primary" type="submit" >
                Save 
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    </div>
  );
}

export default ProductRow_old;
