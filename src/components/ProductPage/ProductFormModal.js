import React, { memo, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import{addProduct,updateProduct} from "../../Redux/User/actions";




function ProductFormModal(props) {
  const isEdit = Boolean(props.product);
  const products = useSelector((state) => state.user.data);

  let dispatch=useDispatch();

  // Form Data USed To Api
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    if (props.product) {
      setTitle(props.product.title);
      setBrand(props.product.brand);
    } else {
      setTitle("");
      setBrand("");
    }
  }, [props.product]);

  const handleUpdate = async (data) => {

    // const product = { ...props.product, title, brand };
    // const response = await ProductApiServices.update(product);

    // if (response.status === 200) {
    //   alert("Data  Updated Successfully");
    //   props.handleClose();
    //   props.editProduct(response.data);
    //   console.log(response.data)
    // } else {
    //   alert("Some thing Went Wrong");
    // }
    try {
      // const data={
      //   ...products,title,brand
      // }

      dispatch(updateProduct(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAdd = async (data) => {

    // // const product = { ...props.product, title, brand };
    // // const response = await ProductApiServices.add(product);
    // if (response.status === 200) {
    //   alert("Data  Added Successfully");
    //   console.log(response.data)

    //   props.handleClose();

    //   props.addProduct(response.data);
    // } else {
    //   alert("Some thing Went Wrong");
    // }
    try {
     const data={...products,title,brand}
      dispatch(addProduct(data));
      props.handleClose();
    } catch (err) {
      console.log(err.message);
      
    }
  };


  const handleSave = (e) => {
    e.preventDefault();

    if (isEdit) handleUpdate();
    else handleAdd();
  };

  return (
    <Modal show={props.open}>
      <Modal.Header closeButton onClick={props.handleClose}>
        <Modal.Title>{isEdit ? "Edit" : "Add"} Product</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSave}>
        <Modal.Body>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Your Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <Form.Control
            type="text"
            name="brand"
            placeholder="Enter Your Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {isEdit ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default memo(ProductFormModal);
