import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { CoreApiRetriveReviewsQueryResponse, CoreApiRetriveReviewsPathParams } from "../types/CoreApiRetriveReviews";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type CoreApiRetriveReviewsClient = typeof client<CoreApiRetriveReviewsQueryResponse, never, never>;
type CoreApiRetriveReviews = {
    data: CoreApiRetriveReviewsQueryResponse;
    error: never;
    request: never;
    pathParams: CoreApiRetriveReviewsPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreApiRetriveReviewsQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreApiRetriveReviewsClient>[0]>;
        return: Awaited<ReturnType<CoreApiRetriveReviewsClient>>;
    };
};
export const coreApiRetriveReviewsQueryKey = (id: CoreApiRetriveReviewsPathParams["id"]) => [{ url: "/api/reviews/:id/", params: { id: id } }] as const;
export type CoreApiRetriveReviewsQueryKey = ReturnType<typeof coreApiRetriveReviewsQueryKey>;
export function coreApiRetriveReviewsQueryOptions<TData = CoreApiRetriveReviews["response"], TQueryData = CoreApiRetriveReviews["response"]>(id: CoreApiRetriveReviewsPathParams["id"], options: CoreApiRetriveReviews["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<CoreApiRetriveReviews["response"], CoreApiRetriveReviews["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = coreApiRetriveReviewsQueryKey(id);
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<CoreApiRetriveReviews["data"], CoreApiRetriveReviews["error"]>({
                method: "get",
                url: `/api/reviews/${id}/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Retrive Reviews
 * @link /api/reviews/:id/
 */
export function useCoreApiRetriveReviews<TData = CoreApiRetriveReviews["response"], TQueryData = CoreApiRetriveReviews["response"], TQueryKey extends QueryKey = CoreApiRetriveReviewsQueryKey>(id: CoreApiRetriveReviewsPathParams["id"], options: {
    query?: Partial<UseBaseQueryOptions<CoreApiRetriveReviews["response"], CoreApiRetriveReviews["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreApiRetriveReviews["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreApiRetriveReviews["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreApiRetriveReviewsQueryKey(id);
    const query = useQuery<CoreApiRetriveReviews["data"], CoreApiRetriveReviews["error"], TData, any>({
        ...coreApiRetriveReviewsQueryOptions<TData, TQueryData>(id, clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, CoreApiRetriveReviews["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}