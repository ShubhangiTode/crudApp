import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export const ProdctTableRow = ({ prod, handleOpen, deleteusr }) => {
  return (
    <tr>
      <td> {prod.id} </td>
      <td> {prod.title} </td>
      <td> {prod.brand} </td>
      <td>
        <Button variant="primary" onClick={() => handleOpen(prod)}>
          <FaRegEdit />
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => deleteusr(prod.id)}>
          <FaRegTrashAlt />
        </Button>
      </td>
    </tr>
  );
};

const ProdctTableRows = ({ products, handleOpen, deleteusr }) => {
  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((prod, index) => (
          <Fragment key={index}>
            <ProdctTableRow
              prod={prod}
              handleOpen={handleOpen}
              deleteusr={deleteusr}
            />
          </Fragment>
        ))}
    </>
  );
};

export default ProdctTableRows;
