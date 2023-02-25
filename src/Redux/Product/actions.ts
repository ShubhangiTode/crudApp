import ProductApiServices from "../../services/ProductApiServices";
import { Product } from "types/Product";
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./constants";
import { Dispatch } from "redux";
import { ProductAction } from "./types";
import { HandleActionCallback } from "types/HandleActionCallback";

export const getProducts = () => async (dispatch: Dispatch<ProductAction>) => {
  try {
    const res = await ProductApiServices.getAll();
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.products as Product[],
    });
  } catch (err: any) {
    console.log(err.message);
    Promise.reject(err)
  }
};

export const addProduct = (product: Product, callback?: HandleActionCallback) => async (dispatch) => {
  try {
    const res = await ProductApiServices.add(product);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
    if (callback && callback.onSuccess)
      callback.onSuccess();

  } catch (err: any) {
    console.log("addProduct success", product)
    console.log("", err);
    if (callback && callback.onError)
      callback.onError(err.message as string);
  }
};

export const updateProduct = (data: Product, callback?: HandleActionCallback) => async (dispatch) => {
  try {
    const res = await ProductApiServices.update(data);
    console.log(res);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data as Product,
    });

    if (callback && callback.onSuccess)
      callback.onSuccess();
  } catch (err: any) {
    console.log("updateProduct error");

    if (callback && callback.onError)
      callback.onError(err.message as string);
  }
};

export const deleteProduct = (id: number) => async (dispatch) => {
  try {
    await ProductApiServices.delete(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (err) {
    console.log("deleteProduct error");
  }
};

