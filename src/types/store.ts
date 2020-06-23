import { ProductDto } from "./types";

export interface StoreTypes {
    result: any,
    loading: boolean,
    categories: [],
    products: [],
    user: any,
    productById: ProductDto | null
}