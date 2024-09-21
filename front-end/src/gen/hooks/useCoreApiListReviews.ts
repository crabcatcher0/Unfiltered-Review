import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { CoreApiListReviewsQueryResponse } from "../types/CoreApiListReviews";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type CoreApiListReviewsClient = typeof client<CoreApiListReviewsQueryResponse, never, never>;
type CoreApiListReviews = {
    data: CoreApiListReviewsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiListReviewsQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreApiListReviewsClient>[0]>;
        return: Awaited<ReturnType<CoreApiListReviewsClient>>;
    };
};
export const coreApiListReviewsQueryKey = () => [{ url: "/api/reviews/" }] as const;
export type CoreApiListReviewsQueryKey = ReturnType<typeof coreApiListReviewsQueryKey>;
export function coreApiListReviewsQueryOptions<TData = CoreApiListReviews["response"], TQueryData = CoreApiListReviews["response"]>(options: CoreApiListReviews["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<CoreApiListReviews["response"], CoreApiListReviews["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = coreApiListReviewsQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<CoreApiListReviews["data"], CoreApiListReviews["error"]>({
                method: "get",
                url: `http://127.0.0.1:8000/api/reviews/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary List Reviews
 * @link /api/reviews/
 */
export function useCoreApiListReviews<TData = CoreApiListReviews["response"], TQueryData = CoreApiListReviews["response"], TQueryKey extends QueryKey = CoreApiListReviewsQueryKey>(options: {
    query?: Partial<UseBaseQueryOptions<CoreApiListReviews["response"], CoreApiListReviews["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreApiListReviews["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreApiListReviews["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreApiListReviewsQueryKey();
    const query = useQuery<CoreApiListReviews["data"], CoreApiListReviews["error"], TData, any>({
        ...coreApiListReviewsQueryOptions<TData, TQueryData>(clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, CoreApiListReviews["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}