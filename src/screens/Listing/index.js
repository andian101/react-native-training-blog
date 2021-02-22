import React, {useState, useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
import images from '../../assets/images';
import BlogListElement from './components/BlogListElement';

// 1. Build component
// 2. Fetch the data
// 3. Pass the data into state
// 4. Render the data onto the screen
// 5. Add loading spinner

const Listing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentPosts = await (
        await fetch('https://5f843a3c6b97440016f4f2dc.mockapi.io/blogs')
      ).json();
      setTimeout(() => {
        setPosts(currentPosts.items);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <View>
      {!posts.length && (
        <Image source={images.spinner} style={{width: 100, height: 100}} />
      )}
      {!!posts.length && (
        <FlatList
          data={posts}
          renderItem={({item}) => <BlogListElement {...item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Listing;
