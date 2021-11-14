import { call, put } from "redux-saga/effects";
import {
  storeAccessToken,
  storeCurrentUser,
  storeIsLoggedIn,
  storePosts,
  storeRefreshToken,
} from "../../reducers/postReducer";
import {
  fetchPosts,
  storeImage,
  userLoginRequest,
  userLogoutRequest,
} from "../requests/postRequests";

export function* handlePostCollection(action) {
  try {
    const response = yield call(fetchPosts, action.payload);
    const { data } = response;

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      yield put(storeAccessToken(data.accessToken))
    }
    if (data.refreshToken) {
      localStorage.setItem("refreshToken", data.refreshToken);
      yield put(storeRefreshToken(data.refreshToken))
    }
    yield put(storePosts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUserLogin(action) {
  try {
    const response = yield call(userLoginRequest, action.payload);
    const { data } = response;
    if (data.data.accessToken) {
      localStorage.setItem("accessToken", data.data.accessToken);
      yield put(storeAccessToken(data.data.accessToken))
    }
    if (data.data.refreshToken) {
      localStorage.setItem("refreshToken", data.data.refreshToken);
      yield put(storeRefreshToken(data.data.refreshToken))
    }
    if (data.data.userRecord) {
      localStorage.setItem('currentUser', JSON.stringify(data.data.userRecord));
      yield put(storeCurrentUser(data.data.userRecord))
    }

    if (data.data.tokenRecord) {
      localStorage.setItem("isLoggedIn", true);
      yield put(storeIsLoggedIn(true))
    }

    return data
  } catch (error) {
    console.log(error);
  }
}


export function* handleStoreImage(action) {
  try {
    const response = yield call(storeImage, action.payload);
    const { data } = response;

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      yield put(storeAccessToken(data.accessToken))
    }
    if (data.refreshToken) {
      localStorage.setItem("refreshToken", data.refreshToken);
      yield put(storeRefreshToken(data.refreshToken))
    }
    return data
  } catch (error) {
    console.log(error);
  }
}
export function* handleUserLogout(action) {
  try {
    const response = yield call(userLogoutRequest, action.payload);
    const { data } = response;
    localStorage.clear();
    window.location.replace("/")

    return data
  } catch (error) {
    console.log(error);
  }
}
