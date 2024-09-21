import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CoreApiCreateProductsMutationRequest, CoreApiCreateProductsMutationResponse, CoreApiCreateProducts400 } from "../types/CoreApiCreateProducts";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type CoreApiCreateProductsClient = typeof client<CoreApiCreateProductsMutationResponse, CoreApiCreateProducts400, CoreApiCreateProductsMutationRequest>;
type CoreApiCreateProducts = {
    data: CoreApiCreateProductsMutationResponse;
    error: CoreApiCreateProducts400;
    request: CoreApiCreateProductsMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiCreateProductsMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreApiCreateProductsClient>[0]>;
        return: Awaited<ReturnType<CoreApiCreateProductsClient>>;
    };
};
/**
 * @summary Create Products
 * @link /api/products/create-product/
 */
export function useCoreApiCreateProducts(options: {
    mutation?: UseMutationOptions<CoreApiCreateProducts["response"], CoreApiCreateProducts["error"], CoreApiCreateProducts["request"]>;
    client?: CoreApiCreateProducts["client"]["parameters"];
} = {}): UseMutationResult<CoreApiCreateProducts["response"], CoreApiCreateProducts["error"], CoreApiCreateProducts["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<CoreApiCreateProducts["response"], CoreApiCreateProducts["error"], CoreApiCreateProducts["request"]>({
        mutationFn: async (data) => {
            const res = await client<CoreApiCreateProducts["data"], CoreApiCreateProducts["error"], CoreApiCreateProducts["request"]>({
                method: "post",
                url: `/api/products/create-product/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}