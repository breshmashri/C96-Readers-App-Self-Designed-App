import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './TabNavigator';
import Magazines from '../screens/Magazines';
import Newspaper from '../screens/Newspaper';
import Stories from '../screens/Stories';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Stories" component={Stories} />
    </Stack.Navigator>
  );
};

export default StackNavigator();
