import type { GenericSchema } from "./GenericSchema";

 export type CoreApiDeleteProductPathParams = {
    /**
     * @type integer
    */
    id: number;
};
/**
 * @description OK
*/
export type CoreApiDeleteProduct200 = GenericSchema;
/**
 * @description OK
*/
export type CoreApiDeleteProductMutationResponse = GenericSchema;
export type CoreApiDeleteProductMutation = {
    Response: CoreApiDeleteProductMutationResponse;
    PathParams: CoreApiDeleteProductPathParams;
};