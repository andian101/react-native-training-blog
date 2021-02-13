import { useCallback } from 'react';
import { ADD_POST, SET_POSTS, SET_USER } from './reducer';

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

  const setUser = useCallback(
    (user) => {
      dispatch({
        type: SET_USER,
        user,
      });
    },
    [dispatch],
  );

  return {
    setPosts,
    setUser,
    addPost,
  };
};
