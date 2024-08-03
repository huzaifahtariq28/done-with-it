import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingScreen />
    </GestureHandlerRootView>
  );
}
