import { Product } from "types/Product";
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./constants";



export interface GetProductAction {
    payload: Product[]
}
export interface AddProductAction {
    payload: Product
}
export interface DeleteProductAction {
    payload: number
}
export interface UpdateProductAction {
    payload: Product
}

export type ProductAction =
    ({ type: typeof GET_PRODUCTS } & GetProductAction)
    | ({ type: typeof ADD_PRODUCT } & AddProductAction)
    | ({ type: typeof DELETE_PRODUCT } & DeleteProductAction)
    | ({ type: typeof UPDATE_PRODUCT } & UpdateProductAction);