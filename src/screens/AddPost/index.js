import {useNavigation} from '@react-navigation/native';
import React, {useState, useLayoutEffect, useCallback} from 'react';
import {StyleSheet, Text, TextInput, ScrollView, Pressable} from 'react-native';
import {useMainContext} from '../../context';

export default function AddPost() {
  const {setOptions, goBack} = useNavigation();
  const {
    actions: {addPost},
  } = useMainContext();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function formatTags(tagsString) {
    return tagsString ? tagsString.split(',').map((it) => it.trim()) : [];
  }

  const saveArticle = useCallback(async () => {
    if (!title.trim() && !content.trim()) {
      return setErrorMsg('Title and content are required fields');
    }

    setErrorMsg('');
    const response = await fetch(
      'https://5f843a3c6b97440016f4f2dc.mockapi.io/blogs',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          content: content,
          tags: formatTags(tags),
        }),
      },
    );

    if (response.ok) {
      const newArticle = await response.json();
      addPost({...newArticle, likes: []});
      return goBack();
    }

    setErrorMsg(`Adding new article failed: ${response.statusText}`);
  }, [addPost, goBack, title, content, tags]);

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
      {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
      <TextInput
        style={[styles.inputField, styles.inputFieldBase]}
        placeholder="Add catchy title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        returnKeyType="done"
      />
      <TextInput
        style={[styles.inputField, styles.inputFieldBase]}
        placeholder="Add tags, comma separated"
        value={tags}
        autoCapitalize={false}
        autoCompleteType={false}
        onChangeText={(text) => setTags(text)}
        returnKeyType="done"
      />
      <TextInput
        style={styles.inputFieldBase}
        placeholder="Add article content"
        value={content}
        onChangeText={(text) => setContent(text)}
        returnKeyType="done"
        multiline
        numberOfLines={5}
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
  inputFieldBase: {
    fontSize: 18,
    marginTop: 20,
    padding: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  actionBtn: {
    marginHorizontal: 20,
  },
  actionBtnLabel: {
    fontSize: 18,
    color: '#3786de',
  },
  errorMsg: {
    fontSize: 16,
    color: '#c20a0a',
  },
});
