import { Product } from "types/Product";
import { ProductAction } from "./types";
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./constants";

const initialstate = {
  products: [] as Product[],
};
const productReducer = (state = initialstate, action: ProductAction) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload as Product[],
      };
    case ADD_PRODUCT:
      return {
        products: [action.payload, ...state.products],
      };
    case UPDATE_PRODUCT:
      const productData = [...state.products];
      let index = state.products.findIndex((x) => x.id === action.payload.id);
      if (index === -1)
        return {
          products: [action.payload, ...productData],
          loading: false,
        };
      productData[index] = action.payload;
      return {
        products: productData,
        loading: false,
      };
    case DELETE_PRODUCT:
      const data = state.products.filter((x) => x.id !== action.payload);
      return { products: data, loading: false };
    default: {
      return state;
    }
  }
};
export default productReducer;
