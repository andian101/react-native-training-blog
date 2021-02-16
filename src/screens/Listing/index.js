import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import images from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {screenTypes} from '../../navigation/constants';
import BlogListElement from './components/BlogListElement';

// 1. Build component
// 2. Fetch the data
// 3. Pass the data into state
// 4. Render the data onto the screen
// 5. Add loading spinner

const Listing = () => {
  const {navigate} = useNavigation();

  const [posts, setPosts] = useState([]);

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
  }, []);

  return (
    <SafeAreaView>
      {!posts.length && (
        <View style={styles.spinner}>
          <Image source={images.spinner} style={{width: 100, height: 100}} />
        </View>
      )}
      {!!posts.length && (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <BlogListElement
              {...item}
              onPress={() => {
                navigate(screenTypes.article, {data: item});
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
