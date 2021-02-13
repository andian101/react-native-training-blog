import {SET_POSTS} from './reducer';

export const useActions = (dispatch) => {
  const setPosts = (posts) => {
    dispatch({
      type: SET_POSTS,
      posts,
    });
  };

  return {
    setPosts,
  };
};
