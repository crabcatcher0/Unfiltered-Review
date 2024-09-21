import type { ReviewSchema } from "./ReviewSchema";

 /**
 * @description OK
*/
export type CoreApiListReviews200 = ReviewSchema[];
/**
 * @description OK
*/
export type CoreApiListReviewsQueryResponse = ReviewSchema[];
export type CoreApiListReviewsQuery = {
    Response: CoreApiListReviewsQueryResponse;
};