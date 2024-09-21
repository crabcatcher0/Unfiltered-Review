import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { CoreApiHomeQueryResponse } from "../types/CoreApiHome";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type CoreApiHomeClient = typeof client<CoreApiHomeQueryResponse, never, never>;
type CoreApiHome = {
    data: CoreApiHomeQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiHomeQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreApiHomeClient>[0]>;
        return: Awaited<ReturnType<CoreApiHomeClient>>;
    };
};
export const coreApiHomeQueryKey = () => [{ url: "/api/home/" }] as const;
export type CoreApiHomeQueryKey = ReturnType<typeof coreApiHomeQueryKey>;
export function coreApiHomeQueryOptions<TData = CoreApiHome["response"], TQueryData = CoreApiHome["response"]>(options: CoreApiHome["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<CoreApiHome["response"], CoreApiHome["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = coreApiHomeQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<CoreApiHome["data"], CoreApiHome["error"]>({
                method: "get",
                url: `/api/home/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Home
 * @link /api/home/
 */
export function useCoreApiHome<TData = CoreApiHome["response"], TQueryData = CoreApiHome["response"], TQueryKey extends QueryKey = CoreApiHomeQueryKey>(options: {
    query?: Partial<UseBaseQueryOptions<CoreApiHome["response"], CoreApiHome["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreApiHome["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreApiHome["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreApiHomeQueryKey();
    const query = useQuery<CoreApiHome["data"], CoreApiHome["error"], TData, any>({
        ...coreApiHomeQueryOptions<TData, TQueryData>(clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, CoreApiHome["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}