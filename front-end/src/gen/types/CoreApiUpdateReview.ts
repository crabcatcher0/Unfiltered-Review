import type { GenericSchema } from "./GenericSchema";
import type { PartialUpdateReview } from "./PartialUpdateReview";

 export type CoreApiUpdateReviewPathParams = {
    /**
     * @type integer
    */
    id: number;
};
/**
 * @description OK
*/
export type CoreApiUpdateReview200 = GenericSchema;
/**
 * @description Bad Request
*/
export type CoreApiUpdateReview400 = GenericSchema;
export type CoreApiUpdateReviewMutationRequest = PartialUpdateReview;
/**
 * @description OK
*/
export type CoreApiUpdateReviewMutationResponse = GenericSchema;
export type CoreApiUpdateReviewMutation = {
    Response: CoreApiUpdateReviewMutationResponse;
    Request: CoreApiUpdateReviewMutationRequest;
    PathParams: CoreApiUpdateReviewPathParams;
    Errors: CoreApiUpdateReview400;
};