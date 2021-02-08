import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../assets/images';

// 1. Build component
// 2. Fetch the data
// 3. Pass the data into state
// 4. Render the data onto the screen
// 5. Add loading spinner


// {"content": "We need to bypass the auxiliary EXE pixel!", "createdAt": "2021-02-03T21:26:28.632Z", "featuredImage": "http://lorempixel.com/640/480/animals", "id": "1", "likes": [{"blogId": "1", "createdAt": 1612431246, "id": "1", "userId": 17}], "tags": [], "title": "District Communications Planner", "userId": 99}

const BlogListElement = ({title, featuredImage, content}) => {
  return (
    <View style={styles.post}>
      <Image
        source={{ uri: featuredImage }}
        style={styles.postImage}
      />
      <View style={styles.postText}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text ellipsizeMode={"tail"} numberOfLines={1} style={styles.postDescription}>{content}</Text>
      </View>
    </View>
  );
};

const Listing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await (await fetch("https://5f843a3c6b97440016f4f2dc.mockapi.io/blogs")).json();
      setTimeout(() => {
        setPosts(posts.items.map(item => {
          item.featuredImage = 'https://placeimg.com/640/480/any';
          return item;
        }));
      }, 1000)
    }

    fetchData();
  }, []);

  return (
    <View>
      { !posts.length && 
        <View style={styles.spinner}>
          <Image source={images.spinner} style={{width: 100, height: 100}} /> 
        </View>
      }
      {
        !!posts.length && 
        <FlatList 
          data={posts}
          renderItem={({item}) => <BlogListElement {...item} />}
          keyExtractor={(item) =>item.id}
        />
      }
    </View>
  );
};

export default Listing;
