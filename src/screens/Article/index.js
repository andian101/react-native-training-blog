import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Tag from '../../components/Tag';

const mockData = {
  id: '1',
  createdAt: '2021-02-03T21:26:28.632Z',
  title: 'District Communications Planner',
  content: 'We need to bypass the auxiliary EXE pixel!',
  tags: ['javascript', 'webdev'],
  userId: 99,
  featuredImage: 'https://placeimg.com/640/480/any',
  likes: [{id: '1', blogId: '1', createdAt: 1612431246, userId: 17}],
};

// 1. Get data from props
// 2. Build component
// 3. Display content
// 4. Style content

const PropertyScreen = (props) => {
  // const {image, price, address, description} = props.route.params.data;
  const {featuredImage, title, content, createdAt, tags, likes} = mockData;
  console.log(props);

  function formatDate(date) {
    return new Date(date).toDateString();
  }

  function formatLikes(articleLikes) {
    const totalLikes = articleLikes.length;
    return `${totalLikes} ${totalLikes === 1 ? 'Like' : 'Likes'}`;
  }

  return (
    <>
      <Image
        source={{uri: featuredImage}}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.tagsWrapper}>
          {tags.map((it) => (
            <Tag key={it} label={it} />
          ))}
        </View>
        <View style={styles.articleDetailsWrapper}>
          <Text style={styles.articleDetail}>{formatDate(createdAt)}</Text>
          <Text style={styles.articleDetail}>{formatLikes(likes)}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 320,
    marginBottom: 10,
  },
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 30,
    fontSize: 20,
  },
  tagsWrapper: {
    marginVertical: 16,
    flexDirection: 'row',
  },
  articleDetail: {
    color: '#64707d',
    fontSize: 17,
  },
  articleDetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PropertyScreen;
