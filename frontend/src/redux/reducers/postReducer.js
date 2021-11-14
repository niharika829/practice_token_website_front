export const GET_POSTS = "GET_POSTS";
const SET_POST_COLLECTION = "SET_POST_COLLECTION";
export const USER_LOGIN = "USER_LOGIN";
const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN"
export const USER_LOGOUT = "USER_LOGOUT"
export const STORE_IMAGE = "STORE_IMAGE"

export const getPosts = ({ }) => ({
  type: GET_POSTS,
  payload: {
  },
});

export const storePosts = (postList) => ({
  type: SET_POST_COLLECTION,
  payload: {
    postList,
  },
});

export const userLogin = (values) => ({
  type: USER_LOGIN,
  payload: {
    values
  },
});

export const storeCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  payload: {
    currentUser,
  },
});
export const storeAccessToken = (accessToken) => ({
  type: SET_ACCESS_TOKEN,
  payload: {
    accessToken,
  },
});

export const storeRefreshToken = (refreshToken) => ({
  type: SET_REFRESH_TOKEN,
  payload: {
    refreshToken,
  },
});
export const storeIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  payload: {
    isLoggedIn,
  },
});

export const storeImage = ({ bodyFormData }) => ({
  type: STORE_IMAGE,
  payload: {
    bodyFormData,
  },
});
export const userLogout = () => ({
  type: USER_LOGOUT,
  payload: {

  },
});
const initialState = {
  postList: undefined,
  currentUser: JSON.parse(localStorage.getItem("currentUser")),
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  isLoggedIn: localStorage.getItem("isLoggedIn")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_COLLECTION:
      const { postList } = action.payload;
      return { ...state, postList };
    case SET_ACCESS_TOKEN:
      const { accessToken } = action.payload;
      return { ...state, accessToken };
    case SET_REFRESH_TOKEN:
      const { refreshToken } = action.payload;
      return { ...state, refreshToken };
    case SET_CURRENT_USER:
      const { currentUser } = action.payload;
      return { ...state, currentUser };
    case SET_IS_LOGGED_IN:
      const { isLoggedIn } = action.payload;
      return { ...state, isLoggedIn };
    default:
      return state;
  }
};
