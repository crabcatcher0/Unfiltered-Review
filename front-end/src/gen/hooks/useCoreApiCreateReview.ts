import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CoreApiCreateReviewMutationRequest, CoreApiCreateReviewMutationResponse, CoreApiCreateReview400, CoreApiCreateReview404 } from "../types/CoreApiCreateReview";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type CoreApiCreateReviewClient = typeof client<CoreApiCreateReviewMutationResponse, CoreApiCreateReview400 | CoreApiCreateReview404, CoreApiCreateReviewMutationRequest>;
type CoreApiCreateReview = {
    data: CoreApiCreateReviewMutationResponse;
    error: CoreApiCreateReview400 | CoreApiCreateReview404;
    request: CoreApiCreateReviewMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiCreateReviewMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreApiCreateReviewClient>[0]>;
        return: Awaited<ReturnType<CoreApiCreateReviewClient>>;
    };
};
/**
 * @summary Create Review
 * @link /api/reviews/create-reviews/
 */
export function useCoreApiCreateReview(options: {
    mutation?: UseMutationOptions<CoreApiCreateReview["response"], CoreApiCreateReview["error"], CoreApiCreateReview["request"]>;
    client?: CoreApiCreateReview["client"]["parameters"];
} = {}): UseMutationResult<CoreApiCreateReview["response"], CoreApiCreateReview["error"], CoreApiCreateReview["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<CoreApiCreateReview["response"], CoreApiCreateReview["error"], CoreApiCreateReview["request"]>({
        mutationFn: async (data) => {
            const res = await client<CoreApiCreateReview["data"], CoreApiCreateReview["error"], CoreApiCreateReview["request"]>({
                method: "post",
                url: `/api/reviews/create-reviews/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}