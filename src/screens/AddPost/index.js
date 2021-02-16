import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput } from 'react-native';
import { useMainContext } from '../../context';
import styles from './styles';

export default function AddPost() {
  const { setOptions, goBack } = useNavigation();
  const {
    actions: { addPost },
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
      addPost(newArticle);
      return goBack();
    }

    setErrorMsg(`Adding new article failed: ${response.statusText}`);
  }, [addPost, goBack, title, content, tags]);

  const SaveArticleButton = useCallback(
    () => (
      <Pressable
        style={styles.actionBtn}
        onPress={() => saveArticle({ title, content, tags })}>
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
        autoCompleteType={'off'}
        onChangeText={(text) => setTitle(text)}
        returnKeyType="done"
      />
      <TextInput
        style={[styles.inputField, styles.inputFieldBase]}
        placeholder="Add tags, comma separated"
        value={tags}
        autoCapitalize={'none'}
        autoCompleteType={'off'}
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
