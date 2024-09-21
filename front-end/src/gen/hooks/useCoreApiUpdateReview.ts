import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CoreApiUpdateReviewMutationRequest, CoreApiUpdateReviewMutationResponse, CoreApiUpdateReviewPathParams, CoreApiUpdateReview400 } from "../types/CoreApiUpdateReview";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type CoreApiUpdateReviewClient = typeof client<CoreApiUpdateReviewMutationResponse, CoreApiUpdateReview400, CoreApiUpdateReviewMutationRequest>;
type CoreApiUpdateReview = {
    data: CoreApiUpdateReviewMutationResponse;
    error: CoreApiUpdateReview400;
    request: CoreApiUpdateReviewMutationRequest;
    pathParams: CoreApiUpdateReviewPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreApiUpdateReviewMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreApiUpdateReviewClient>[0]>;
        return: Awaited<ReturnType<CoreApiUpdateReviewClient>>;
    };
};
/**
 * @summary Update Review
 * @link /api/reviews/update-comment/:id/
 */
export function useCoreApiUpdateReview(id: CoreApiUpdateReviewPathParams["id"], options: {
    mutation?: UseMutationOptions<CoreApiUpdateReview["response"], CoreApiUpdateReview["error"], CoreApiUpdateReview["request"]>;
    client?: CoreApiUpdateReview["client"]["parameters"];
} = {}): UseMutationResult<CoreApiUpdateReview["response"], CoreApiUpdateReview["error"], CoreApiUpdateReview["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<CoreApiUpdateReview["response"], CoreApiUpdateReview["error"], CoreApiUpdateReview["request"]>({
        mutationFn: async (data) => {
            const res = await client<CoreApiUpdateReview["data"], CoreApiUpdateReview["error"], CoreApiUpdateReview["request"]>({
                method: "patch",
                url: `/api/reviews/update-comment/${id}/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}