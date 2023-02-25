import React, { useCallback, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ProductFormModal from "./ProductFormModal";
import ProdctTableRows from "./ProductTableRow";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "types/Product";
import { RootState } from "Redux/store";
import { getProducts } from "Redux/Product/actions";

function ProductTable() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const products = useSelector((state: RootState) => state.product.products);

  const dispatch = useDispatch();

  const handleOpen = useCallback((products?: Product) => {
    setOpen(true);
    if (products) setSelectedProduct(products);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteusr = async (id: number) => {
    try {
    } catch (err) {
      console.log(err);
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
            <th>options</th>
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
        product={selectedProduct}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ProductTable;
