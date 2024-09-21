import type { ProductSchema } from "./ProductSchema";

 /**
 * @description OK
*/
export type CoreApiListProducts200 = ProductSchema[];
/**
 * @description OK
*/
export type CoreApiListProductsQueryResponse = ProductSchema[];
export type CoreApiListProductsQuery = {
    Response: CoreApiListProductsQueryResponse;
};