export const SET_POSTS = 'SET_POSTS';

export const initialState = {
  posts: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};
