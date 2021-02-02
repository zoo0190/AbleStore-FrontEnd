import axios from "axios";

export const COUNTRY = {
  country: [
    {
      key: 1,
      nation: "대한민국",
    },
    {
      key: 2,
      nation: "미국",
    },
    {
      key: 3,
      nation: "호주",
    },
    {
      key: 4,
      nation: "캐나다",
    },
    {
      key: 5,
      nation: "멕시코",
    },
    {
      key: 6,
      nation: "태국",
    },
  ],
};

const LOCAL_HOST = "http://54.180.99.152:8000";

export const SIGN_UP_API = `${LOCAL_HOST}/user/signup`;

export const LOGIN_API = `${LOCAL_HOST}/user/signin`;

export const CATEGORY_API = `${LOCAL_HOST}/community/categories/1/boards`;

export const MY_PAGE = `${LOCAL_HOST}/community/users/`;

export const SOLUTION_API = `${LOCAL_HOST}/community/boards`;

export const BASE_URL = `${LOCAL_HOST}/community/boards`;

export const BOARD_USER_API = `${LOCAL_HOST}`;

// export const TOKEN = sessionStorage.getItem("ACCESS_TOKEN")

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: sessionStorage.getItem("ACCESS_TOKEN"),
  },
});
