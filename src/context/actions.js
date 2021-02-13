import { useCallback } from 'react';
import { ADD_POST, SET_POSTS } from './reducer';

export const useActions = (dispatch) => {
  const setPosts = useCallback(
    (posts) => {
      dispatch({
        type: SET_POSTS,
        posts,
      });
    },
    [dispatch],
  );

  const addPost = useCallback(
    (post) => {
      dispatch({
        type: ADD_POST,
        post,
      });
    },
    [dispatch],
  );

  return {
    setPosts,
    addPost,
  };
};
