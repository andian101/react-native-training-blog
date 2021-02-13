import { SET_POSTS } from './reducer';
import { SET_USER } from './reducer';
import { useCallback } from 'react';

export const useActions = (dispatch) => {
  const setPosts = useCallback((posts) => {
    dispatch({
      type: SET_POSTS,
      posts,
    });
  });

  const setUser = (user) => {
    dispatch({
      type: SET_USER,
      user,
    });
  };

  return {
    setPosts,
    setUser,
  };
};
