import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';

const ArticleScreen = (props) => {
  const {setOptions} = useNavigation();
  const {title} = props.route.params.data;

  useEffect(() => {
    setOptions({title});
  }, [setOptions, title]);

  return <Text>{title}</Text>;
};

export default ArticleScreen;
