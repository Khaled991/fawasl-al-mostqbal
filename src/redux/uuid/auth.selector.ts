import { IRootReducer } from "../redux.models";
import { createSelector } from "reselect";
import { IAuthState } from "./auth.models";

export const selectAuth = (state: IRootReducer) => state.auth;

export const selectUuid = createSelector(
  [selectAuth],
  (auth: IAuthState) => auth.uuid
);
