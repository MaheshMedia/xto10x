import axios from "axios";
import {
  GET_POSTS,
  POSTS_ERROR
} from "./type";


const url="https://demo7394057.mockable.io/products"

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(url);
    console.log(res);
    dispatch({
      type: GET_POSTS,
      payload: res.data.products,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};

