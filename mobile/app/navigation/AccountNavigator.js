import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.MY_ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
