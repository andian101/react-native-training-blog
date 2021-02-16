import React from 'react';
import {View, Text, Image} from 'react-native';

const BlogListElement = ({title, featuredImage, content}) => {
  return (
    <View>
      <Image
        source={{uri: featuredImage}}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default BlogListElement;
