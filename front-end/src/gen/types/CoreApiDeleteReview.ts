import type { GenericSchema } from "./GenericSchema";

 export type CoreApiDeleteReviewPathParams = {
    /**
     * @type integer
    */
    id: number;
};
/**
 * @description OK
*/
export type CoreApiDeleteReview200 = GenericSchema;
/**
 * @description OK
*/
export type CoreApiDeleteReviewMutationResponse = GenericSchema;
export type CoreApiDeleteReviewMutation = {
    Response: CoreApiDeleteReviewMutationResponse;
    PathParams: CoreApiDeleteReviewPathParams;
};