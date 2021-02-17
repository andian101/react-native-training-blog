export const SET_POSTS = 'SET_POSTS';
export const SET_USER = 'SET_USER';
export const ADD_POST = 'ADD_POST';
export const LIKE_POST = 'LIKE_POST';

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
      console.log(action);
      return {
        ...state,
        user: action.user,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    case LIKE_POST: {
      const blogIdx = state.posts.findIndex((it) => it.id === action.blogId);
      if (blogIdx < -1) {
        return state;
      }

      const currPost = {
        ...state.posts[blogIdx],
      };
      currPost.likes = [...currPost.likes, state.user.id];

      const newPosts = [...state.posts];
      newPosts.splice(blogIdx, 1, currPost);

      return { ...state, posts: newPosts };
    }
    default:
      return state;
  }
};
