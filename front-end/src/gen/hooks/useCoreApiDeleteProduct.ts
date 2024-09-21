import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CoreApiDeleteProductMutationResponse, CoreApiDeleteProductPathParams } from "../types/CoreApiDeleteProduct";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type CoreApiDeleteProductClient = typeof client<CoreApiDeleteProductMutationResponse, never, never>;
type CoreApiDeleteProduct = {
    data: CoreApiDeleteProductMutationResponse;
    error: never;
    request: never;
    pathParams: CoreApiDeleteProductPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreApiDeleteProductMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreApiDeleteProductClient>[0]>;
        return: Awaited<ReturnType<CoreApiDeleteProductClient>>;
    };
};
/**
 * @summary Delete Product
 * @link /api/products/delete/:id/
 */
export function useCoreApiDeleteProduct(id: CoreApiDeleteProductPathParams["id"], options: {
    mutation?: UseMutationOptions<CoreApiDeleteProduct["response"], CoreApiDeleteProduct["error"], CoreApiDeleteProduct["request"]>;
    client?: CoreApiDeleteProduct["client"]["parameters"];
} = {}): UseMutationResult<CoreApiDeleteProduct["response"], CoreApiDeleteProduct["error"], CoreApiDeleteProduct["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<CoreApiDeleteProduct["response"], CoreApiDeleteProduct["error"], never>({
        mutationFn: async () => {
            const res = await client<CoreApiDeleteProduct["data"], CoreApiDeleteProduct["error"], CoreApiDeleteProduct["request"]>({
                method: "delete",
                url: `/api/products/delete/${id}/`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}