export const SET_POSTS = 'SET_POSTS';
export const SET_USER = 'SET_USER';

export const initialState = {
  posts: [],
  user: '[]',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
