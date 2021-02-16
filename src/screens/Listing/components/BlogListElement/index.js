import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const BlogListElement = ({title, featuredImage, content, likes, onPress}) => {
  return (
    <Pressable style={styles.post} onPress={onPress}>
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
    </Pressable>
  );
};

export default BlogListElement;
