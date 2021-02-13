import { SET_POSTS } from './reducer';
import { useCallback } from 'react';

export const useActions = (dispatch) => {
  const setPosts = useCallback((posts) => {
    dispatch({
      type: SET_POSTS,
      posts,
    });
  });

  return {
    setPosts,
  };
};
