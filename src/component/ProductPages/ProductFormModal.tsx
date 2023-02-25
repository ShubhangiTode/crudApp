import { memo, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addProduct, updateProduct } from "../../Redux/Product/actions";
import { useDispatch } from "react-redux";
import { Product } from "types/Product";
import { toast } from "react-toastify";

export type ProductFormModalProps = {
  open: boolean;
  product: Product | null;
  handleClose: () => void;
};

const ProductFormModal = (props: ProductFormModalProps) => {
  const { handleClose, open, product } = props;
  const isEdit = Boolean(product);

  // Form Data USed To Api
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setBrand(product.brand);
    } else {
      setTitle("");
      setBrand("");
    }
  }, [product]);

  const handleUpdate = async () => {
    const data = { ...product, title, brand } as Product;
    try {
      dispatch(
        updateProduct(data, {
          onSuccess: () => {
            toast.success("Product updated successfully");
            handleClose();
          },
          onError: (msg) => {
            toast.error(msg ? msg : "Something went wrong");
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    try {
      const data = { title, brand } as Product;
      dispatch(
        addProduct(data, {
          onSuccess: () => {
            toast.success("Add product successfully");
            handleClose();
          },
          onError: (msg) => {
            toast.error(msg ? msg : "Something went wrong");
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isEdit) handleUpdate();
    else handleAdd();
  };

  return (
    <Modal show={open}>
      <Modal.Header closeButton onClick={handleClose}>
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
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {isEdit ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default memo(ProductFormModal);
