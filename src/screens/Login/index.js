import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import images from '../../assets/images';
import { useMainContext } from '../../context';
import { screenTypes } from '../../navigation/constants';
import styles from './styles';

const Listing = () => {
  const navigation = useNavigation();
  const {
    actions: { setUser },
  } = useMainContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const api = `https://5f843a3c6b97440016f4f2dc.mockapi.io/users?search=${email}`;
    // const data = { email, password };
    const resp = await fetch(api).then((data) => data.json());
    const result = resp.find((f) => f.email === email);

    if (result?.email) {
      setUser(result.email);
      return navigation.dispatch(StackActions.replace(screenTypes.listing, {}));
    }

    return Alert.alert('Something went very wrong');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={'height'}>
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <Image source={images.logo} style={styles.logoImage} />
          </View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.description}>Please login to view the blog.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCompleteType={'off'}
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholder={'email'}
            autoFocus
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            autoCompleteType={'off'}
            autoCorrect={false}
            autoCapitalize={'none'}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Listing;
