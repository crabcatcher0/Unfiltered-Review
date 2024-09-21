import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CoreApiDeleteReviewMutationResponse, CoreApiDeleteReviewPathParams } from "../types/CoreApiDeleteReview";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type CoreApiDeleteReviewClient = typeof client<CoreApiDeleteReviewMutationResponse, never, never>;
type CoreApiDeleteReview = {
    data: CoreApiDeleteReviewMutationResponse;
    error: never;
    request: never;
    pathParams: CoreApiDeleteReviewPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreApiDeleteReviewMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreApiDeleteReviewClient>[0]>;
        return: Awaited<ReturnType<CoreApiDeleteReviewClient>>;
    };
};
/**
 * @summary Delete Review
 * @link /api/reviews/delete/:id/
 */
export function useCoreApiDeleteReview(id: CoreApiDeleteReviewPathParams["id"], options: {
    mutation?: UseMutationOptions<CoreApiDeleteReview["response"], CoreApiDeleteReview["error"], CoreApiDeleteReview["request"]>;
    client?: CoreApiDeleteReview["client"]["parameters"];
} = {}): UseMutationResult<CoreApiDeleteReview["response"], CoreApiDeleteReview["error"], CoreApiDeleteReview["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<CoreApiDeleteReview["response"], CoreApiDeleteReview["error"], never>({
        mutationFn: async () => {
            const res = await client<CoreApiDeleteReview["data"], CoreApiDeleteReview["error"], CoreApiDeleteReview["request"]>({
                method: "delete",
                url: `/api/reviews/delete/${id}/`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}