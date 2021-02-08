import {StyleSheet} from 'react-native';

// 1. Add styles
// 2. Text to just one line
// 3. Passing props to styles
// 4. Adding likes bar && date created to the blog post

const styles = StyleSheet.create({
  post: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  postImage: {
    marginRight: 15,
    borderRadius: 5,
    width: 75,
    height: 75,
  },
  postText: {
    flex: 1
  },
  postTitle: {
    fontWeight: '500',
    fontSize: 25,
  },
  postDescription: {
    fontSize: 20
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
  }
});

export default styles;