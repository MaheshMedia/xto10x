import {
  GET_POSTS,
  POSTS_ERROR,
  FILTER_POSTS,
} from "../action/type";

const intitialState = {
  posts: [],
  loading: true,
  error: {},
  filteredPosts: []
};
export default function (state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        filteredPosts: payload,
        loading: false,
      };
    case FILTER_POSTS:
      return {
        ...state,
        filteredPosts: payload,
        loading: false,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
