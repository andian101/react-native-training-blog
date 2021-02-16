import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useMemo } from 'react/cjs/react.development';
import styles from './styles';

const BlogListElement = ({
  title,
  featuredImage,
  likes,
  content,
  onPress,
  onLike,
}) => {
  const MemoisedElement = useMemo(() => {
    console.log('Render list item');
    return (
      <Pressable style={styles.post} onPress={onPress}>
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
                onLike();
                console.log('Like');
              }}>
              <Text style={styles.likes}>Like</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
  }, [title, featuredImage, content, likes]);
  return MemoisedElement;
};

export default BlogListElement;
