import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Tag({label}) {
  if (!label) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        <Text style={styles.hashtag}>#</Text>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22a1aa',
    padding: 7,
    marginRight: 7,
    borderRadius: 10,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
  },
  hashtag: {
    color: '#cccccc',
  },
});
