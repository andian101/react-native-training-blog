import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useMemo } from 'react/cjs/react.development';
import styles from './styles';

const BlogListElement = ({ item, onPress, onLike }) => {
  const MemoisedElement = useMemo(() => {
    const { id, title, featuredImage, likes, content } = item;
    console.log('Render list item');
    return (
      <Pressable style={styles.post} onPress={() => onPress(item)}>
        <Image source={{ uri: featuredImage }} style={styles.postImage} />
        <View style={styles.postText}>
          <Text style={styles.postTitle}>{title}</Text>
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={styles.postDescription}>
            {content}
          </Text>
          <View style={styles.postLikeWrapper}>
            <Text style={styles.likes}>Likes: {likes.length}</Text>
            <Pressable
              onPress={() => {
                onLike(id);
                console.log('Like');
              }}>
              <Text style={styles.likes}>Like</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
  }, [onLike, onPress, item]);
  return MemoisedElement;
};

export default BlogListElement;
