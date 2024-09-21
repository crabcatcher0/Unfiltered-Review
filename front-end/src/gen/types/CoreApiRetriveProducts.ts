import type { ProductSchema } from "./ProductSchema";

 export type CoreApiRetriveProductsPathParams = {
    /**
     * @type integer
    */
    id: number;
};
/**
 * @description OK
*/
export type CoreApiRetriveProducts200 = ProductSchema;
/**
 * @description OK
*/
export type CoreApiRetriveProductsQueryResponse = ProductSchema;
export type CoreApiRetriveProductsQuery = {
    Response: CoreApiRetriveProductsQueryResponse;
    PathParams: CoreApiRetriveProductsPathParams;
};