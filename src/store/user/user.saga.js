import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../components/utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.action";
import { USER_ACTION_TYPE } from "./user.type";

export function* getSanpshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInformation },
}) {
  yield call(getSanpshotFromUserAuth, user, additionalInformation);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSanpshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmailPassword({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSanpshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSanpshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut);
}

export function* onsignUpStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(
    USER_ACTION_TYPE.EMAIL_SIGN_IN_START,
    signInWithEmailPassword
  );
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onsignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
