import axios from "axios";

class ProductApiServices {
  static getAll = async () => {
    const url = "https://dummyjson.com/products";
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    return await axios.get(url, undefined, config);
  };

  static add = async (data) => {
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

  static delete = async (id) => {
    const url = "https://dummyjson.com/products/" + id;
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    return await axios.delete(url, undefined, config);
  };
}

export default ProductApiServices;
