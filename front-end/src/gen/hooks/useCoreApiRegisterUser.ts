import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CoreApiRegisterUserMutationRequest, CoreApiRegisterUserMutationResponse, CoreApiRegisterUser400 } from "../types/CoreApiRegisterUser";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type CoreApiRegisterUserClient = typeof client<CoreApiRegisterUserMutationResponse, CoreApiRegisterUser400, CoreApiRegisterUserMutationRequest>;
type CoreApiRegisterUser = {
    data: CoreApiRegisterUserMutationResponse;
    error: CoreApiRegisterUser400;
    request: CoreApiRegisterUserMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiRegisterUserMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreApiRegisterUserClient>[0]>;
        return: Awaited<ReturnType<CoreApiRegisterUserClient>>;
    };
};
/**
 * @summary Register User
 * @link /api/users/register/
 */
export function useCoreApiRegisterUser(options: {
    mutation?: UseMutationOptions<CoreApiRegisterUser["response"], CoreApiRegisterUser["error"], CoreApiRegisterUser["request"]>;
    client?: CoreApiRegisterUser["client"]["parameters"];
} = {}): UseMutationResult<CoreApiRegisterUser["response"], CoreApiRegisterUser["error"], CoreApiRegisterUser["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<CoreApiRegisterUser["response"], CoreApiRegisterUser["error"], CoreApiRegisterUser["request"]>({
        mutationFn: async (data) => {
            const res = await client<CoreApiRegisterUser["data"], CoreApiRegisterUser["error"], CoreApiRegisterUser["request"]>({
                method: "post",
                url: `/api/users/register/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}