import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { CoreApiRetriveProductsQueryResponse, CoreApiRetriveProductsPathParams } from "../types/CoreApiRetriveProducts";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type CoreApiRetriveProductsClient = typeof client<CoreApiRetriveProductsQueryResponse, never, never>;
type CoreApiRetriveProducts = {
    data: CoreApiRetriveProductsQueryResponse;
    error: never;
    request: never;
    pathParams: CoreApiRetriveProductsPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreApiRetriveProductsQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreApiRetriveProductsClient>[0]>;
        return: Awaited<ReturnType<CoreApiRetriveProductsClient>>;
    };
};
export const coreApiRetriveProductsQueryKey = (id: CoreApiRetriveProductsPathParams["id"]) => [{ url: "/api/products/:id/", params: { id: id } }] as const;
export type CoreApiRetriveProductsQueryKey = ReturnType<typeof coreApiRetriveProductsQueryKey>;
export function coreApiRetriveProductsQueryOptions<TData = CoreApiRetriveProducts["response"], TQueryData = CoreApiRetriveProducts["response"]>(id: CoreApiRetriveProductsPathParams["id"], options: CoreApiRetriveProducts["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<CoreApiRetriveProducts["response"], CoreApiRetriveProducts["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = coreApiRetriveProductsQueryKey(id);
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<CoreApiRetriveProducts["data"], CoreApiRetriveProducts["error"]>({
                method: "get",
                url: `/api/products/${id}/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Retrive Products
 * @link /api/products/:id/
 */
export function useCoreApiRetriveProducts<TData = CoreApiRetriveProducts["response"], TQueryData = CoreApiRetriveProducts["response"], TQueryKey extends QueryKey = CoreApiRetriveProductsQueryKey>(id: CoreApiRetriveProductsPathParams["id"], options: {
    query?: Partial<UseBaseQueryOptions<CoreApiRetriveProducts["response"], CoreApiRetriveProducts["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreApiRetriveProducts["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreApiRetriveProducts["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreApiRetriveProductsQueryKey(id);
    const query = useQuery<CoreApiRetriveProducts["data"], CoreApiRetriveProducts["error"], TData, any>({
        ...coreApiRetriveProductsQueryOptions<TData, TQueryData>(id, clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, CoreApiRetriveProducts["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}