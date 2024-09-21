import type { GenericSchema } from "./GenericSchema";
import type { PostUserRegisterSchema } from "./PostUserRegisterSchema";

 /**
 * @description OK
*/
export type CoreApiRegisterUser200 = GenericSchema;
/**
 * @description Bad Request
*/
export type CoreApiRegisterUser400 = GenericSchema;
export type CoreApiRegisterUserMutationRequest = PostUserRegisterSchema;
/**
 * @description OK
*/
export type CoreApiRegisterUserMutationResponse = GenericSchema;
export type CoreApiRegisterUserMutation = {
    Response: CoreApiRegisterUserMutationResponse;
    Request: CoreApiRegisterUserMutationRequest;
    Errors: CoreApiRegisterUser400;
};