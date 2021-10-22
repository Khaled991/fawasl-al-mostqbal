import { IAction } from "../redux.models";
import { IAuthState } from "./auth.models";
import { authActionTypes } from "./auth.types";

const INITIAL_STATE = { uuid: "" };

export const authReducer = (
  state: IAuthState = INITIAL_STATE,
  action: IAction<string>
) => {
  switch (action.type) {
    case authActionTypes.SET_AUTH_UUID:
      return { ...state, uuid: action.payload! };

    default:
      return state;
  }
};
