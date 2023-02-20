import ProductApiServices from "../../services/ProductApiServices";

import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../User/constants";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await ProductApiServices.getAll();
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.products,
    });
  } catch (err) {
    return console.log("error");
  }
};

export const addProduct = (data) => async (dispatch) => {
  try {
    const res = await ProductApiServices.add(data);
    dispatch({
      type: ADD_PRODUCT,
      payload: [{...res.data}],
    });
  } catch (err) {
    return console.log("",err );
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductApiServices.delete(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (err) {
    return console.log("deleteProduct error");
  }
};
export const updateProduct = (id,data) => async (dispatch) => {
  try {
    const res = await ProductApiServices.update(id,data);
    console.log(res);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    return console.log("updateProduct error");
  }
};
