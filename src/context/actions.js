import {useCallback} from 'react/cjs/react.development';
import {SET_POSTS, ADD_POST} from './reducer';

export const useActions = (dispatch) => {
  const setPosts = (posts) => {
    dispatch({
      type: SET_POSTS,
      posts,
    });
  };

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
