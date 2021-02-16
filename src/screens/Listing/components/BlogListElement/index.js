import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const BlogListElement = ({title, featuredImage, content, likes}) => {
  return (
    <View style={styles.post}>
      <Image source={{uri: featuredImage}} style={styles.postImage} />
      <View style={styles.postText}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={1}
          style={styles.postDescription}>
          {content}
        </Text>
        <Text style={styles.likes}>Likes: {likes.length}</Text>
      </View>
    </View>
  );
};
export default BlogListElement;
