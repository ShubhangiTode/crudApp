import React, { useCallback, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ProductFormModal from "./ProductFormModal";
import ProdctTableRows from "./ProductTableRow";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../Redux/User/actions";



function ProductTable() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useSelector((state) => state.user.data);
  let dispatch = useDispatch();

  const handleOpen = useCallback((data) => {
    setOpen(true);
    if (data) setSelectedProduct(data);
    else setSelectedProduct(null);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedProduct(null);
  }, []);

  const fetchdata = async () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const deleteusr = async (id) => {
    try {
      dispatch(deleteProduct(id));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div>
        <Button onClick={() => handleOpen()}>Add Product</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>name</th>
            <th>Brand </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ProdctTableRows
            products={products}
            handleOpen={handleOpen}
            deleteusr={deleteusr}
          />
        </tbody>
      </Table>
      <ProductFormModal
        open={open}
        products={selectedProduct}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ProductTable;
