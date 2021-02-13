export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';

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
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            ...action.post,
            featuredImage: 'https://placeimg.com/640/480/any',
            likes: [],
          },
        ],
      };
    default:
      return state;
  }
};
