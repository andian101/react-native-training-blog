import {StyleSheet} from 'react-native';

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
    flex: 1,
    borderBottomColor: '#a0a0a0',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  likes: {
    marginTop: 10,
    fontSize: 15,
  },
  postTitle: {
    fontWeight: '500',
    fontSize: 25,
  },
  postDescription: {
    fontSize: 20,
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  addPostBtn: {
    marginRight: 20,
  },
  addPostBtnLabel: {
    fontSize: 18,
    color: '#3786de',
  },
});

export default styles;
