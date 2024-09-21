import type { GenericSchema } from "./GenericSchema";
import type { PartialUpdateProduct } from "./PartialUpdateProduct";

 export type CoreApiPartialUpdatePathParams = {
    /**
     * @type integer
    */
    id: number;
};
/**
 * @description OK
*/
export type CoreApiPartialUpdate200 = GenericSchema;
/**
 * @description Bad Request
*/
export type CoreApiPartialUpdate400 = GenericSchema;
export type CoreApiPartialUpdateMutationRequest = PartialUpdateProduct;
/**
 * @description OK
*/
export type CoreApiPartialUpdateMutationResponse = GenericSchema;
export type CoreApiPartialUpdateMutation = {
    Response: CoreApiPartialUpdateMutationResponse;
    Request: CoreApiPartialUpdateMutationRequest;
    PathParams: CoreApiPartialUpdatePathParams;
    Errors: CoreApiPartialUpdate400;
};