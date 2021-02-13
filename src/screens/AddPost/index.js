import {useNavigation} from '@react-navigation/native';
import React, {useState, useLayoutEffect, useCallback} from 'react';
import {StyleSheet, Text, TextInput, ScrollView, Pressable} from 'react-native';

export default function AddPost() {
  const {setOptions, goBack} = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function formatTags(tagsString) {
    return tagsString ? tagsString.split(',').map((it) => it.trim()) : [];
  }

  const saveArticle = useCallback(
    async (data = {title: '', content: '', tags: ''}) => {
      if (Object.keys(data).filter((key) => !data[key].trim()).length) {
        return;
      }

      try {
        const addArticle = await fetch(
          'https://5f843a3c6b97440016f4f2dc.mockapi.io/blogs1',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              title: data.title,
              content: data.content,
              tags: formatTags(data.tags),
            }),
          },
        ).then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          console.log(res);
          return setErrorMsg(res.statusText);
        });

        console.log(addArticle);
      } catch (error) {
        console.log('Error occured: ', error);
        setErrorMsg(error.message);
      }
    },
    [],
  );

  const SaveArticleButton = useCallback(
    () => (
      <Pressable
        style={styles.actionBtn}
        onPress={() => saveArticle({title, content, tags})}>
        <Text style={styles.actionBtnLabel}>Save</Text>
      </Pressable>
    ),
    [title, content, tags, saveArticle],
  );

  const CancelButton = useCallback(
    () => (
      <Pressable style={styles.actionBtn} onPress={goBack}>
        <Text style={styles.actionBtnLabel}>Cancel</Text>
      </Pressable>
    ),
    [goBack],
  );

  useLayoutEffect(() => {
    setOptions({
      headerRight: SaveArticleButton,
      headerLeft: CancelButton,
    });
  }, [CancelButton, SaveArticleButton, setOptions]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Write new post</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Add catchy title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        returnKeyType="done"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Add tags, comma separated"
        value={tags}
        onChangeText={(text) => setTags(text)}
        returnKeyType="done"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Add article content"
        value={content}
        multiline
        onChangeText={(text) => setContent(text)}
        returnKeyType="done"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  screenTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
  inputField: {
    fontSize: 18,
    marginTop: 20,
  },
  actionBtn: {
    marginHorizontal: 20,
  },
  actionBtnLabel: {
    fontSize: 18,
    color: '#3786de',
  },
});
