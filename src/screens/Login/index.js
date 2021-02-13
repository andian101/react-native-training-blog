import React, { useState, useEffect } from 'react';
import { StackActions } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useMainContext } from '../../context';
import { screenTypes } from '../../navigation/constants';

const Listing = () => {
  const navigation = useNavigation();
  const {
    actions: { setUser },
  } = useMainContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const api = 'https://5f843a3c6b97440016f4f2dc.mockapi.io/users';
    const data = { email, password };
    const resp = await fetch(api, {
      method: 'POST',
      data,
    }).then((data) => data.json());

    if (resp?.email) {
      setUser(resp.email);
      return navigation.dispatch(StackActions.replace(screenTypes.listing, {}));
    }

    return Alert.alert('Something went wrong');
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.description}>Please login to view the blog.</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCompleteType={'off'}
          autoCorrect={false}
          placeholder={'email'}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCompleteType={'off'}
          autoCorrect={false}
          secureTextEntry={true}
          placeholder={'Password'}
          blurOnSubmit
          returnKeyType="next"
        />
        <Button
          disabled={!email || !password}
          onPress={handleSubmit}
          title="Submit"
        />
      </View>
    </SafeAreaView>
  );
};

export default Listing;
