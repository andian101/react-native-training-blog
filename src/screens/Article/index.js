import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
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

const ArticleScreen = (props) => {
  const {setOptions} = useNavigation();
  const {
    featuredImage,
    title,
    content,
    createdAt,
    tags,
    likes,
  } = props.route.params.data;

  function formatDate(date) {
    return new Date(date).toDateString();
  }

  function formatLikes(articleLikes) {
    const totalLikes = articleLikes.length;
    return `${totalLikes} ${totalLikes === 1 ? 'Like' : 'Likes'}`;
  }

  useEffect(() => {
    setOptions({title});
  }, [setOptions, title]);

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
        {tags.length ? (
          <View style={styles.tagsWrapper}>
            {tags.map((it) => (
              <Tag key={it} label={it} />
            ))}
          </View>
        ) : null}
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
    marginTop: 16,
    flexDirection: 'row',
  },
  articleDetail: {
    color: '#64707d',
    fontSize: 17,
  },
  articleDetailsWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ArticleScreen;
