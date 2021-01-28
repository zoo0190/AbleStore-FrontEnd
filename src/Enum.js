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
var LOCAL_HOST = "http://172.30.1.37:8000";

export const SIGN_UP_API = `${LOCAL_HOST}/user/signup`;
export const LOGIN_API = `${LOCAL_HOST}/user/signin`;
export const CATEGORY_API = `${LOCAL_HOST}/community/categories/1/boards`;
export const MY_PAGE = `${LOCAL_HOST}/community/users/`;

export const BOARD_USER_API = "http://172.30.1.37:8000";

export const LIKE_API = "http://172.30.1.37:8000";

// export const TOKEN = sessionStorage.getItem("ACCESS_TOKEN")
