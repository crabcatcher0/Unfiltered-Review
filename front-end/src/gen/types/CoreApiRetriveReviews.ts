import type { ReviewSchema } from "./ReviewSchema";

 export type CoreApiRetriveReviewsPathParams = {
    /**
     * @type integer
    */
    id: number;
};
/**
 * @description OK
*/
export type CoreApiRetriveReviews200 = ReviewSchema;
/**
 * @description OK
*/
export type CoreApiRetriveReviewsQueryResponse = ReviewSchema;
export type CoreApiRetriveReviewsQuery = {
    Response: CoreApiRetriveReviewsQueryResponse;
    PathParams: CoreApiRetriveReviewsPathParams;
};