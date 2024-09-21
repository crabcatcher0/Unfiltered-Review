import type { GenericSchema } from "./GenericSchema";
import type { PostProductSchema } from "./PostProductSchema";

 /**
 * @description OK
*/
export type CoreApiCreateProducts200 = GenericSchema;
/**
 * @description Bad Request
*/
export type CoreApiCreateProducts400 = GenericSchema;
export type CoreApiCreateProductsMutationRequest = PostProductSchema;
/**
 * @description OK
*/
export type CoreApiCreateProductsMutationResponse = GenericSchema;
export type CoreApiCreateProductsMutation = {
    Response: CoreApiCreateProductsMutationResponse;
    Request: CoreApiCreateProductsMutationRequest;
    Errors: CoreApiCreateProducts400;
};