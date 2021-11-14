import axios from "axios";

export function fetchPosts({ }) {
  return axios.get("http://localhost:5000/posts?_start=0&_limit=10", {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      secret: localStorage.getItem('refreshToken')
    },
  });
}

export function userLoginRequest({ values }) {
  return axios.post('http://localhost:5000/login', { ...values }, {
    headers: {
      'content-type': 'application/json'
    }
  });
}

export function storeImage({ bodyFormData }) {
  return axios.post("http://localhost:5000/store", { ...bodyFormData }, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      secret: localStorage.getItem('refreshToken'),
      "Content-Type": "multipart/form-data"
    },
  });
}
export function userLogoutRequest({ }) {
  return axios.post('http://localhost:5000/logout', {}, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      secret: localStorage.getItem('refreshToken')
    }
  });
}