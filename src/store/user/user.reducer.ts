import { AnyAction } from "redux";
import { UserData } from "../../components/utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";
import { USER_ACTION_TYPE } from "./user.type";

export type UserState = {
  currentUser: UserData | null;
  isLoading: boolean;
  error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action))
    return { ...state, currentUser: action.payload };

  if (signOutSuccess.match(action)) return { ...state, currentUser: null };

  if (
    signUpFailed.match(action) ||
    signOutFailed.match(action) ||
    signInFailed.match(action)
  )
    return { ...state, error: action.payload };

  return state;
};
