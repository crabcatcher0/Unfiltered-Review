import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CoreApiPartialUpdateMutationRequest, CoreApiPartialUpdateMutationResponse, CoreApiPartialUpdatePathParams, CoreApiPartialUpdate400 } from "../types/CoreApiPartialUpdate";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type CoreApiPartialUpdateClient = typeof client<CoreApiPartialUpdateMutationResponse, CoreApiPartialUpdate400, CoreApiPartialUpdateMutationRequest>;
type CoreApiPartialUpdate = {
    data: CoreApiPartialUpdateMutationResponse;
    error: CoreApiPartialUpdate400;
    request: CoreApiPartialUpdateMutationRequest;
    pathParams: CoreApiPartialUpdatePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreApiPartialUpdateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreApiPartialUpdateClient>[0]>;
        return: Awaited<ReturnType<CoreApiPartialUpdateClient>>;
    };
};
/**
 * @summary Partial Update
 * @link /api/products/update-product/:id/
 */
export function useCoreApiPartialUpdate(id: CoreApiPartialUpdatePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreApiPartialUpdate["response"], CoreApiPartialUpdate["error"], CoreApiPartialUpdate["request"]>;
    client?: CoreApiPartialUpdate["client"]["parameters"];
} = {}): UseMutationResult<CoreApiPartialUpdate["response"], CoreApiPartialUpdate["error"], CoreApiPartialUpdate["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<CoreApiPartialUpdate["response"], CoreApiPartialUpdate["error"], CoreApiPartialUpdate["request"]>({
        mutationFn: async (data) => {
            const res = await client<CoreApiPartialUpdate["data"], CoreApiPartialUpdate["error"], CoreApiPartialUpdate["request"]>({
                method: "patch",
                url: `/api/products/update-product/${id}/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}