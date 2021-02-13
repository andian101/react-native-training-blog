import {useCallback} from 'react';
import {SET_POSTS} from './reducer';

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
