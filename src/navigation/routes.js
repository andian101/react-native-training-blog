import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddPost from '../screens/AddPost';
import Article from '../screens/Article';
import Listing from '../screens/Listing';
import Login from '../screens/Login';
import { screenTypes } from './constants';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={screenTypes.login}
        component={Login}
      />
      <MainStack.Screen
        options={{ title: 'Blog' }}
        name={screenTypes.listing}
        component={Listing}
      />
      <MainStack.Screen
        options={{ title: 'Articles' }}
        name={screenTypes.article}
        component={Article}
      />
    </MainStack.Navigator>
  );
};

const Routes = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        options={{ headerShown: false }}
        name={'Blog'}
        component={MainStackScreen}
      />
      <RootStack.Screen
        options={{ title: 'Create Post' }}
        name={screenTypes.createArticle}
        component={AddPost}
      />
    </RootStack.Navigator>
  );
};

export default Routes;
