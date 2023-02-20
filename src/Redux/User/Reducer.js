import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../User/constants";

const initialState = {
  data: [],
  loading: false,
};
const useReducer = (state = initialState, action) => {
  const { type, payload } = action;

  const productData = [...state.data];

  switch (type) {
    case GET_PRODUCTS:
      return {
        data: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        data: [...action.payload, ...productData],
        loading: false,
      };

    case UPDATE_PRODUCT:
      const index = productData.findIndex((x) => x.id === payload.id);
      if (index === -1)
        return { data: [...action.payload, ...productData], loading: false };

      productData[index] = action.payload;
      return { data: productData, loading: false };

    case DELETE_PRODUCT:
      const data = productData.filter((x) => x.id !== payload);
      return { data: data, loading: false };

    default: {
      return state;
    }
  }
};
export default useReducer;
