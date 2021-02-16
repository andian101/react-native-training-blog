import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import Tag from '../../components/Tag';
import styles from './styles';

// 1. Get data from props
// 2. Build component
// 3. Display content
// 4. Style content

const ArticleScreen = (props) => {
  const { setOptions } = useNavigation();
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
    setOptions({ title });
  }, [setOptions, title]);

  return (
    <>
      <Image
        source={{ uri: featuredImage }}
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

export default ArticleScreen;
