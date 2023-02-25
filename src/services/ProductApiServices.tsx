
import axios from "axios";
import { Product } from "types/Product";

class ProductApiServices {
  static getAll = async () => {
    const url = "https://dummyjson.com/products";
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    return await axios.get(url, config);
  };

  static add = async (data: Product) => {
    const url = "https://dummyjson.com/products/add";
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    return await axios.post(url, data, config);
  };

  static update = async (data) => {
    const url = "https://dummyjson.com/products/" + data.id;
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    if (data.id) delete data.id;

    return await axios.put(url, data, config);
  };

  static delete = async (id: number) => {
    const url = "https://dummyjson.com/products/" + id;
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    return await axios.delete(url, config);
  };
}

export default ProductApiServices;
