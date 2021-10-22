import { IAction } from "../redux.models";
import { authActionTypes } from "./auth.types";

export const setAuthUuidAction = (uuid: string): IAction<string> => ({
  type: authActionTypes.SET_AUTH_UUID,
  payload: uuid,
});
