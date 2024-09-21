import type { GenericSchema } from "./GenericSchema";
import type { PostReviewSchema } from "./PostReviewSchema";

 /**
 * @description OK
*/
export type CoreApiCreateReview200 = GenericSchema;
/**
 * @description Bad Request
*/
export type CoreApiCreateReview400 = GenericSchema;
/**
 * @description Not Found
*/
export type CoreApiCreateReview404 = GenericSchema;
export type CoreApiCreateReviewMutationRequest = PostReviewSchema;
/**
 * @description OK
*/
export type CoreApiCreateReviewMutationResponse = GenericSchema;
export type CoreApiCreateReviewMutation = {
    Response: CoreApiCreateReviewMutationResponse;
    Request: CoreApiCreateReviewMutationRequest;
    Errors: CoreApiCreateReview400 | CoreApiCreateReview404;
};