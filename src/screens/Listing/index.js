import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import images from '../../assets/images';
import { useMainContext } from '../../context';
import { screenTypes } from '../../navigation/constants';
import BlogListElement from './components/BlogListElement';
import styles from './styles';

// 1. Build component
// 2. Fetch the data
// 3. Pass the data into state
// 4. Render the data onto the screen
// 5. Add loading spinner

const Listing = () => {
  const { navigate, setOptions } = useNavigation();
  const {
    state: { posts },
    actions: { setPosts, likePost },
  } = useMainContext();

  useEffect(() => {
    const fetchData = async () => {
      const posts = await (
        await fetch('https://5f843a3c6b97440016f4f2dc.mockapi.io/blogs')
      ).json();
      setTimeout(() => {
        setPosts(posts.items);
      }, 1000);
    };

    fetchData();
  }, [setPosts]);

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <Pressable
          style={styles.addPostBtn}
          onPress={() => navigate(screenTypes.createArticle)}>
          <Text style={styles.addPostBtnLabel}>Add</Text>
        </Pressable>
      ),
    });
  }, [setOptions, navigate]);

  const navigateToArticle = useCallback(
    (item) => {
      navigate(screenTypes.article, { data: item });
    },
    [navigate],
  );

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
              item={item}
              onLike={likePost}
              onPress={navigateToArticle}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Listing;
