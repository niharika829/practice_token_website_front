import { takeLatest } from "redux-saga/effects";
import {
  handlePostCollection,
  handleUserLogin,
  handleUserLogout,
  handleStoreImage
} from "./handler/postHandler";
import {
  GET_POSTS,
  USER_LOGIN,
  USER_LOGOUT,
  STORE_IMAGE
} from "../reducers/postReducer";

export function* watcherSaga() {
  yield takeLatest(GET_POSTS, handlePostCollection);
  yield takeLatest(USER_LOGIN, handleUserLogin);
  yield takeLatest(USER_LOGOUT, handleUserLogout);
  yield takeLatest(STORE_IMAGE, handleStoreImage)
}
