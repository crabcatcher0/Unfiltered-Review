import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { CoreApiListProductsQueryResponse } from "../types/CoreApiListProducts";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

type CoreApiListProductsClient = typeof client<CoreApiListProductsQueryResponse, never, never>;
type CoreApiListProducts = {
    data: CoreApiListProductsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiListProductsQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreApiListProductsClient>[0]>;
        return: Awaited<ReturnType<CoreApiListProductsClient>>;
    };
};
export const coreApiListProductsQueryKey = () => [{ url: "/api/products/" }] as const;
export type CoreApiListProductsQueryKey = ReturnType<typeof coreApiListProductsQueryKey>;
export function coreApiListProductsQueryOptions<TData = CoreApiListProducts["response"], TQueryData = CoreApiListProducts["response"]>(options: CoreApiListProducts["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<CoreApiListProducts["response"], CoreApiListProducts["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = coreApiListProductsQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<CoreApiListProducts["data"], CoreApiListProducts["error"]>({
                method: "get",
                url: `http://127.0.0.1:8000/api/products/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary List Products
 * @link /api/products/
 */
export function useCoreApiListProducts<TData = CoreApiListProducts["response"], TQueryData = CoreApiListProducts["response"], TQueryKey extends QueryKey = CoreApiListProductsQueryKey>(options: {
    query?: Partial<UseBaseQueryOptions<CoreApiListProducts["response"], CoreApiListProducts["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreApiListProducts["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreApiListProducts["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreApiListProductsQueryKey();
    const query = useQuery<CoreApiListProducts["data"], CoreApiListProducts["error"], TData, any>({
        ...coreApiListProductsQueryOptions<TData, TQueryData>(clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, CoreApiListProducts["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}