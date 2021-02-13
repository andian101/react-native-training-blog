import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import styles from './styles';
import images from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { screenTypes } from '../../navigation/constants';
import { useMainContext } from '../../context';

// 1. Build component
// 2. Fetch the data
// 3. Pass the data into state
// 4. Render the data onto the screen
// 5. Add loading spinner

const BlogListElement = ({ title, featuredImage, likes, content, onPress }) => {
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
        <Text style={styles.likes}>Likes: {likes.length}</Text>
      </View>
    </Pressable>
  );
};

const Listing = () => {
  const { navigate } = useNavigation();
  const {
    state: { posts },
    actions: { setPosts },
  } = useMainContext();

  useEffect(() => {
    const fetchData = async () => {
      const posts = await (
        await fetch('https://5f843a3c6b97440016f4f2dc.mockapi.io/blogs')
      ).json();
      setTimeout(() => {
        setPosts(
          posts.items.map((item) => {
            item.featuredImage = 'https://placeimg.com/640/480/any';
            return item;
          }),
        );
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {!posts.length && (
        <View style={styles.spinner}>
          <Image source={images.spinner} style={{ width: 100, height: 100 }} />
        </View>
      )}
      {!!posts.length && (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <BlogListElement
              {...item}
              onPress={() => {
                navigate(screenTypes.article, { data: item });
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Listing;
